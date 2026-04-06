'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { submitContactForm } from './actions';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<{ success: boolean; message: string; data?: any } | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setResult(null);

        const formData = new FormData(event.currentTarget);
        const response = await submitContactForm(formData);

        setResult(response);
        setIsSubmitting(false);

        if (response.success) {
            (event.target as HTMLFormElement).reset();
        }
    }

    return (
        <main>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                <section id="subheader" className="bg-dark text-light relative" style={{ backgroundImage: 'url(/images/background/7.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="col-lg-12">
                                <div className="spacer-double sm-hide"></div>
                                <motion.h5 {...fadeInUp}>Contact Us</motion.h5>
                                <motion.h1 className="mb-3" {...fadeInUp} transition={{ delay: 0.2 }}>Get in Touch</motion.h1>
                                <div className="border-bottom mb-3"></div>
                                <ul className="crumb">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active">Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-edge-bottom h-50"></div>
                    <div className="sw-overlay"></div>
                </section>

                <section>
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <motion.div {...fadeInUp}>
                                    <h3>Send Us a Message</h3>
                                    <p className="lead">Have a question or want to start a project? Fill out the form below and our team will get back to you within 24 hours.</p>

                                    <form onSubmit={handleSubmit} className="form-s1">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="field-set">
                                                    <input type="text" name="phone" className="form-control" placeholder="Your Phone" required />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="field-set">
                                                    <textarea name="message" className="form-control" placeholder="Your Message" rows={5} required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div id="submit" className="mt-3">
                                                    <button
                                                        type="submit"
                                                        className="btn-main fx-slide"
                                                        disabled={isSubmitting}
                                                    >
                                                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    {result && (
                                        <motion.div
                                            className={`mt-4 p-4 rounded-1 ${result.success ? 'bg-success/10 text-success border border-success/20' : 'bg-danger/10 text-danger border border-danger/20'}`}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <p className="mb-0">{result.message}</p>
                                            {result.success && result.data && (
                                                <div className="mt-3">
                                                    <Link 
                                                        href={`https://wa.me/923435609624?text=${encodeURIComponent(`Hello TechX! I have just submitted a contact form on your website.\n\n*Name:* ${result.data.name}\n*Email:* ${result.data.email}\n*Phone:* ${result.data.phone}\n*Message:* ${result.data.message}`)}`} 
                                                        target="_blank" 
                                                        className="btn-main fx-slide" 
                                                        style={{ backgroundColor: '#25D366' }}
                                                    >
                                                        <span><i className="fa-brands fa-whatsapp me-2 text-white"></i>Send Details to WhatsApp</span>
                                                    </Link>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>

                            <div className="col-lg-4">
                                <div className="row g-4">
                                    {[
                                        { title: "Head Office", icon: "icofont-location-pin", text: "4th Floor Anchor Acrade Block D, Naval Ancourage, Islamabad" },
                                        { title: "Call Us", icon: "icofont-phone", text: "+92 321 7558101" },
                                        { title: "Email Us", icon: "icofont-envelope", text: "ceo@techx.com" },
                                        { title: "Business Hours", icon: "icofont-clock-time", text: "Mon - Fri: 9:00 AM - 6:00 PM" }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="col-12"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <div className="p-4 bg-light rounded-1 border border-dark/5 hover-shadow-lg transition-all">
                                                <h5 className="id-color mb-2">
                                                    <i className={`${item.icon} me-2`}></i>{item.title}
                                                </h5>
                                                <p className="mb-0 fw-600 text-dark">{item.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="spacer-single"></div>

                                <div className="bg-dark p-4 rounded-1 text-light">
                                    <h4>Follow Us</h4>
                                    <div className="social-icons s1">
                                        <Link href="https://www.instagram.com/techx_pvtltd?igsh=MW1pMXcxbjZnOTY5bA==" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                                        <Link href="https://www.linkedin.com/company/tech-x-pvt-ltd/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
