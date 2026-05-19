'use server';

import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function submitContactForm(formData: FormData) {
    try {
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

        if (!data.name || !data.email || !data.phone || !data.message) {
            return { success: false, message: 'All fields are required.' };
        }

        // --- 1. Save to Neon DB ---
        try {
            await prisma.contactSubmission.create({
                data: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    message: data.message,
                },
            });
            console.log('✅ Saved to database');
        } catch (dbError) {
            console.error('⚠️ DB save failed:', dbError);
        }

        // --- 2. Create SMTP Transporter (port 465 SSL — works on Vercel) ---
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'mail.techx.com.pk',
            port: 465,
            secure: true, // SSL
            auth: {
                user: process.env.SMTP_USER || 'developer@techx.com.pk',
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // --- 3. Email to CEO + Sales ---
        try {
            await transporter.sendMail({
                from: `"TechX Contact Form" <${process.env.SMTP_USER || 'developer@techx.com.pk'}>`,
                to: process.env.CEO_EMAIL || 'ceo@techx.com.pk',
                cc: process.env.SALES_EMAIL || 'sales@techx.com.pk',
                replyTo: data.email,
                subject: `New Inquiry from ${data.name} — TechX Website`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
                        <div style="background: #1a1a2e; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                            <h2 style="color: #F5A623; margin: 0;">New Contact Form Submission</h2>
                            <p style="color: #ccc; margin: 5px 0 0;">TechX Pvt Ltd – Website Inquiry</p>
                        </div>
                        <div style="background: #fff; padding: 24px; border-radius: 0 0 8px 8px;">
                            <table style="width:100%; border-collapse: collapse;">
                                <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;color:#555;width:120px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#222;">${data.name}</td></tr>
                                <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;color:#555;">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#222;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
                                <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;color:#555;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#222;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
                                <tr><td style="padding:10px 0;font-weight:bold;color:#555;vertical-align:top;">Message</td><td style="padding:10px 0;color:#222;line-height:1.6;">${data.message.replace(/\n/g, '<br/>')}</td></tr>
                            </table>
                            <div style="margin-top:24px;padding:16px;background:#fff8ee;border-left:4px solid #F5A623;border-radius:4px;">
                                <p style="margin:0;color:#888;font-size:13px;">Submitted via TechX website. Reply to this email to respond to the client.</p>
                            </div>
                        </div>
                    </div>
                `,
            });
            console.log('✅ CEO/Sales email sent');
        } catch (emailError) {
            console.error('⚠️ CEO email failed:', emailError);
        }

        // --- 4. Auto-reply to client ---
        try {
            await transporter.sendMail({
                from: `"TechX Pvt Ltd" <${process.env.SMTP_USER || 'developer@techx.com.pk'}>`,
                to: data.email,
                subject: `We received your message, ${data.name}!`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <div style="background: #1a1a2e; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                            <h2 style="color: #F5A623; margin: 0;">Thank You, ${data.name}!</h2>
                        </div>
                        <div style="background: #fff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
                            <p style="color: #444; line-height: 1.7;">Thank you for reaching out to <strong>TechX Pvt Ltd</strong>. We have received your message and our team will get back to you within <strong>24 hours</strong>.</p>
                            <p style="color: #444;">For urgent inquiries:</p>
                            <ul style="color: #444; line-height: 2;">
                                <li>📞 Phone: <a href="tel:+923217558101">+92 321 7558101</a></li>
                                <li>💬 WhatsApp: <a href="https://wa.me/923435609624">+92 343 5609624</a></li>
                                <li>📧 Sales: <a href="mailto:sales@techx.com.pk">sales@techx.com.pk</a></li>
                            </ul>
                            <p style="color: #888; font-size: 13px; margin-top: 24px;">— TechX Pvt Ltd Team</p>
                        </div>
                    </div>
                `,
            });
            console.log('✅ Auto-reply sent');
        } catch (replyError) {
            console.error('⚠️ Auto-reply failed:', replyError);
        }

        return {
            success: true,
            message: 'Your message has been sent successfully! Check your email for confirmation. You can also reach us instantly on WhatsApp.',
            data: data,
        };

    } catch (error) {
        console.error('Contact form error:', error);
        return {
            success: false,
            message: 'Failed to send your message. Please try again or contact us directly on WhatsApp.',
        };
    }
}
