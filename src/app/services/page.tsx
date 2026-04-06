'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const services = [
    {
        id: 1,
        slug: 'power-solutions',
        title: 'Power Solutions',
        desc: 'Import and installation of industrial scale solar plants under sale and PPA contracts.',
        img: '/images/services/1.webp',
    },
    {
        id: 2,
        slug: 'energy-trading',
        title: 'Energy Trading',
        desc: 'Sourcing refined and non-renewable fuels: LPG from Middle East.',
        img: '/images/services/2.webp',
    },
    {
        id: 3,
        slug: 'energy-development',
        title: 'Energy Development',
        desc: 'Development, design and arranging funding for utility scale projects.',
        img: '/images/services/3.webp',
    },
    {
        id: 4,
        slug: 'infrastructure',
        title: 'Infrastructure',
        desc: 'Development of Port and energy storage infrastructure.',
        img: '/images/services/4.webp',
    },
];

export default function Services() {
    return (
        <main>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                <section id="subheader" className="bg-dark text-light relative" style={{ backgroundImage: 'url(/images/background/w2.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="col-lg-12">
                                <div className="spacer-double sm-hide"></div>
                                <motion.h5 {...fadeInUp}>Power Your Future with Clean Energy</motion.h5>
                                <motion.h1 className="mb-3" {...fadeInUp} transition={{ delay: 0.2 }}>Our Services</motion.h1>
                                <div className="border-bottom mb-3"></div>
                                <ul className="crumb">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active">Our Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-edge-bottom h-50"></div>
                    <div className="sw-overlay"></div>
                </section>

                <section>
                    <div className="container">
                        <div className="row g-4">
                            {services.map((service, idx) => (
                                <motion.div
                                    key={service.id}
                                    className="col-lg-4 col-sm-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="hover group">
                                        <div className="relative overflow-hidden">
                                            <Link href={`/services/${service.slug}`} className="d-block">
                                                <div className="relative overflow-hidden rounded-1">
                                                    <img src={service.img} className="w-100 hover-scale-1-2" alt={service.title} />
                                                </div>
                                            </Link>
                                            <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100 shadow-lg group-hover:shadow-2xl transition-all">
                                                <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px flex-center shadow">
                                                    <Link href={`/services/${service.slug}`}>
                                                        <img src="/images/misc/up-right-arrow.webp" className="w-100 p-20" alt="" />
                                                    </Link>
                                                </div>
                                                <h4>{service.title}</h4>
                                                <p className="mb-0 text-muted">{service.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-dark text-light pt-60 pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="row g-4 grid-divider justify-content-center">
                                    {[
                                        { title: "Need Our Services?", text: "Call: +92 321 7558101" },
                                        { title: "Message Us", text: "We Are Always Ready" },
                                        { title: "Email Us", text: "ceo@techx.com" }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="col-lg-4 col-md-6"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.2 }}
                                        >
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="ms-3">
                                                    <h4 className="mb-0 id-color">{item.title}</h4>
                                                    <p className="mb-0">{item.text}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
