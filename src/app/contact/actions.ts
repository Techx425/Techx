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

        return {
            success: true,
            message: 'Your details have been saved successfully! Please click the button below to continue our conversation on WhatsApp.',
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
