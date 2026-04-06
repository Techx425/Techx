'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const projects = [
    {
        id: 1,
        title: 'Sadaqat Solar Plant',
        category: 'Solar Power Projects',
        img: '/images/projects/1.webp',
        desc: 'Complete EPC and O&M services for Sadaqat Limited\'s industrial solar power plant.'
    },
    {
        id: 2,
        title: 'Dewan Cement Solar',
        category: 'Solar Power Projects',
        img: '/images/projects/2.webp',
        desc: 'Industrial solar solution for cement manufacturing facility.'
    },
    {
        id: 3,
        title: 'Ittehad Steel Solar Plant',
        category: 'Solar Power Projects',
        img: '/images/projects/3.webp',
        desc: 'Specialized electrical engineering and maintenance services.'
    },
    {
        id: 4,
        title: 'Uch Shareef Motorway Solar Plant',
        category: 'Solar Power Projects',
        img: '/images/projects/4.webp',
        desc: 'Highway infrastructure solar power solution.'
    },
    {
        id: 5,
        title: 'Rajhana Motorway Solar Plant',
        category: 'Solar Power Projects',
        img: '/images/projects/5.webp',
        desc: 'Motorway infrastructure solar power solution.'
    },
    {
        id: 6,
        title: 'LPG Supply Network',
        category: 'Energy Trading Projects',
        img: '/images/projects/6.webp',
        desc: 'Comprehensive LPG supply and distribution network across Pakistan.'
    },
    {
        id: 7,
        title: 'Gwadar Energy Port',
        category: 'Infrastructure Projects',
        img: '/images/background/1.webp',
        desc: 'Major port infrastructure for energy imports and exports.'
    },
    {
        id: 8,
        title: 'Utility-Scale Solar Feasibility',
        category: 'Energy Development Projects',
        img: '/images/background/2.webp',
        desc: 'Comprehensive feasibility study for utility-scale solar development.'
    },
    {
        id: 9,
        title: 'Market Intelligence System',
        category: 'Energy Trading Projects',
        img: '/images/background/3.webp',
        desc: 'Advanced market intelligence and trading analytics platform.'
    },
    {
        id: 10,
        title: 'Lahore Distribution Center',
        category: 'Infrastructure Projects',
        img: '/images/background/4.webp',
        desc: 'Energy distribution and storage infrastructure.'
    },
    {
        id: 11,
        title: 'Faisalabad Industrial Hub',
        category: 'Infrastructure Projects',
        img: '/images/background/5.webp',
        desc: 'Industrial energy infrastructure development.'
    },
    {
        id: 12,
        title: 'Energy Project Management',
        category: 'Energy Development Projects',
        img: '/images/background/6.webp',
        desc: 'End-to-end project management for energy development projects.'
    }
];

export default function Projects() {
    return (
        <main>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                <section id="subheader" className="bg-dark text-light relative" style={{ backgroundImage: 'url(/images/background/w2.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="col-lg-12">
                                <div className="spacer-double sm-hide"></div>
                                <motion.h5 {...fadeInUp}>Innovating the Energy Landscape</motion.h5>
                                <motion.h1 className="mb-3" {...fadeInUp} transition={{ delay: 0.2 }}>Our Projects Portfolio</motion.h1>
                                <div className="border-bottom mb-3 col-lg-4"></div>
                                <ul className="crumb">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active">Projects</li>
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
                            {projects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    className="col-lg-4 col-md-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="hover group rounded-1 overflow-hidden shadow-lg bg-white h-100 d-flex flex-column">
                                        <div className="relative overflow-hidden aspect-video">
                                            <img src={project.img} className="w-100 h-100 object-cover group-hover:scale-110 transition-transform duration-700" alt={project.title} />
                                            <div className="abs top-0 start-0 m-3 z-3">
                                                <span className="badge bg-warning text-dark px-3 py-2 fs-12 uppercase fw-bold shadow-sm">{project.category}</span>
                                            </div>
                                        </div>
                                        <div className="p-4 flex-grow-1 d-flex flex-column">
                                            <h4 className="mb-2">{project.title}</h4>
                                            <p className="text-muted fs-15 flex-grow-1">{project.desc}</p>
                                            <div className="mt-3 pt-3 border-top">
                                                <Link href="/contact" className="text-dark fw-bold fs-14 hover-color d-flex align-items-center">
                                                    View Details <i className="icofont-arrow-right ms-2 mt-1"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-dark text-light pt-60 pb-40">
                    <div className="container text-center">
                        <div className="row g-4 grid-divider justify-content-center">
                            {[
                                { title: "Need Our Services?", text: "Call: +92 321 7558101" },
                                { title: "Work Hours", text: "Mon to Sat 08:00 - 17:00" },
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
                                    <h4 className="mb-0 id-color">{item.title}</h4>
                                    <p className="mb-0">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
