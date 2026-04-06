'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const upcomingProjects = [
    {
        id: 1,
        title: 'WHRS (Waste Heat Recovery System) - 4MW',
        category: 'Energy Efficiency',
        status: 'Feasibility Stage',
        img: '/images/background/1.webp',
        desc: 'Implementation of a 4MW Waste Heat Recovery System designed to capture industrial waste heat and convert it into clean electricity. This initiative aims to significantly maximize overall plant energy efficiency and drastically reduce carbon emissions.'
    },
    {
        id: 2,
        title: 'Wind Turbine - 7MW',
        category: 'Renewable Generation',
        status: 'Design Phase',
        img: '/images/background/2.webp',
        desc: 'Installation of advanced, high-capacity 7MW wind turbine infrastructure. This project focuses on harnessing optimal wind vectors to provide a highly reliable, sustainable, and scalable addition to the national renewable energy grid.'
    },
    {
        id: 3,
        title: 'E-Hydrogen',
        category: 'Clean Fuel Technology',
        status: 'Conceptual Phase',
        img: '/images/background/4.webp',
        desc: 'Development of cutting-edge green hydrogen synthesis facilities. The E-Hydrogen initiative paves the way for zero-emission industrial applications, highly efficient future energy storage, and long-term sustainable transport solutions.'
    }
];

export default function UpcomingProjects() {
    return (
        <main>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                <section id="subheader" className="bg-dark text-light relative" style={{ backgroundImage: 'url(/images/background/home.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="col-lg-12">
                                <div className="spacer-double sm-hide"></div>
                                <motion.h5 {...fadeInUp}>The Future of Energy</motion.h5>
                                <motion.h1 className="mb-3" {...fadeInUp} transition={{ delay: 0.2 }}>Upcoming Projects</motion.h1>
                                <div className="border-bottom mb-3 col-lg-4"></div>
                                <ul className="crumb">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active">Upcoming Projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-edge-bottom h-50"></div>
                    <div className="sw-overlay op-7"></div>
                </section>

                <section>
                    <div className="container">
                        <div className="row g-4 justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <motion.h2 {...fadeInUp}>Pioneering the Next Generation of <span className="id-color">Clean Energy</span></motion.h2>
                                <motion.p className="lead" {...fadeInUp} transition={{ delay: 0.2 }}>TechX is constantly exploring new horizons to meet Pakistan's growing energy demands through innovation and sustainable technologies.</motion.p>
                            </div>
                        </div>

                        <div className="row g-4">
                            {upcomingProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    className="col-lg-6"
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx, duration: 0.8 }}
                                >
                                    <div className="hover group rounded-1 overflow-hidden shadow-lg bg-white d-md-flex h-100 border border-light">
                                        <div className="col-md-5 relative overflow-hidden">
                                            <img src={project.img} className="w-100 h-100 object-cover group-hover:scale-110 transition-transform duration-700" alt={project.title} />
                                            <div className="abs top-0 start-0 m-3 z-3">
                                                <span className="badge bg-dark text-white px-3 py-2 fs-10 uppercase fw-bold shadow-sm">{project.status}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-7 p-4 p-md-5 d-flex flex-column">
                                            <div className="subtitle id-color mb-2 fs-12 uppercase ls-1 fw-bold">{project.category}</div>
                                            <h4 className="mb-3">{project.title}</h4>
                                            <p className="text-muted mb-4">{project.desc}</p>
                                            <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
                                                <span className="fs-13 text-uppercase fw-700 ls-1">Estimated Launch: 2026+</span>
                                                <div className="id-color fw-bold"><i className="icofont-pulse"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-dark text-light py-100 relative overflow-hidden">
                    <div className="abs top-0 start-0 w-100 h-100 bg-blur z-0 opacity-20"></div>
                    <div className="container relative z-1">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h2 className="mb-2">Are you an investor or partner looking for future opportunities?</h2>
                                <p className="mb-0 text-white/70">Join us in shaping the sustainable energy infrastructure of Pakistan.</p>
                            </div>
                            <div className="col-lg-5 text-lg-end mt-sm-30">
                                <Link className="btn-main fx-slide me-4" href="/contact"><span>Partner With Us</span></Link>
                                <Link className="btn-main btn-line fx-slide hover-white" href="/projects"><span>View Current Portfolio</span></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
