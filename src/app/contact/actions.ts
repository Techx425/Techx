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

        // Validate required fields
        if (!data.name || !data.email || !data.phone || !data.message) {
            return { success: false, message: 'All fields are required.' };
        }

        // --- 1. Save to Database ---
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
            console.error('⚠️ Database save failed (continuing anyway):', dbError);
        }

        // --- 2. Send Email to CEO ---
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.gmail.com',
                port: Number(process.env.SMTP_PORT) || 587,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            await transporter.sendMail({
                from: `"TechX Contact Form" <${process.env.SMTP_USER}>`,
                to: process.env.CEO_EMAIL || 'ceo@techx.com.pk',
                cc: process.env.SALES_EMAIL || 'sales@techx.com.pk',
                replyTo: data.email,
                subject: `New Contact Form Submission from ${data.name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
                        <div style="background: #1a1a2e; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                            <h2 style="color: #F5A623; margin: 0;">New Contact Form Submission</h2>
                            <p style="color: #ccc; margin: 5px 0 0;">TechX Pvt Ltd – Website Inquiry</p>
                        </div>
                        <div style="background: #fff; padding: 24px; border-radius: 0 0 8px 8px;">
                            <table style="width:100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 120px;">Name</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222;">${data.name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222;"><a href="mailto:${data.email}">${data.email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222;"><a href="tel:${data.phone}">${data.phone}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
                                    <td style="padding: 10px 0; color: #222; line-height: 1.6;">${data.message.replace(/\n/g, '<br/>')}</td>
                                </tr>
                            </table>
                            <div style="margin-top: 24px; padding: 16px; background: #fff8ee; border-left: 4px solid #F5A623; border-radius: 4px;">
                                <p style="margin: 0; color: #888; font-size: 13px;">This message was submitted via the TechX website contact form. Reply directly to this email to respond to the client.</p>
                            </div>
                        </div>
                    </div>
                `,
            });

            // Auto-reply to the client
            await transporter.sendMail({
                from: `"TechX Pvt Ltd" <${process.env.SMTP_USER}>`,
                to: data.email,
                subject: `We received your message, ${data.name}!`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <div style="background: #1a1a2e; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                            <h2 style="color: #F5A623; margin: 0;">Thank You, ${data.name}!</h2>
                        </div>
                        <div style="background: #fff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
                            <p style="color: #444; line-height: 1.7;">Thank you for reaching out to <strong>TechX Pvt Ltd</strong>. We have received your message and our team will get back to you within <strong>24 hours</strong>.</p>
                            <p style="color: #444;">For urgent inquiries, feel free to contact us directly:</p>
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

            console.log('✅ Emails sent');
        } catch (emailError) {
            console.error('⚠️ Email send failed:', emailError);
        }

        // --- 3. Auto WhatsApp Notification (CallMeBot) ---
        const callMeBotApiKey = process.env.CALLMEBOT_API_KEY;
        const whatsappNumber = process.env.WHATSAPP_NUMBER || '923435609624';

        if (callMeBotApiKey) {
            try {
                const waMessage = encodeURIComponent(
                    `🔔 New TechX Contact Form\n\n👤 Name: ${data.name}\n📧 Email: ${data.email}\n📞 Phone: ${data.phone}\n\n💬 Message: ${data.message}`
                );
                const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${whatsappNumber}&text=${waMessage}&apikey=${callMeBotApiKey}`;
                const waRes = await fetch(waUrl);
                console.log('✅ WhatsApp notification sent:', waRes.status);
            } catch (waError) {
                console.error('⚠️ WhatsApp notification failed:', waError);
            }
        } else {
            console.log('ℹ️ CALLMEBOT_API_KEY not set — WhatsApp notification skipped');
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
