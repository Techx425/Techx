'use server';

import { prisma } from '@/lib/prisma';

export async function submitContactForm(formData: FormData) {
    try {
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

        // Save data to PostgreSQL Database using Prisma
        const savedContact = await prisma.contactSubmission.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
            }
        });

        console.log('Saved to Database:', savedContact);
        return {
            success: true,
            message: "Your message has been safely recorded. Please contact us on WhatsApp for further discussion.",
            data: data
        };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return {
            success: false,
            message: "There was an error processing your request. Please try again or contact us directly.",
        };
    }
}

