'use client';

import { useParams } from 'next/navigation';
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
        slug: 'power-solutions',
        title: 'Power Solutions',
        desc: 'At TechX, we provide end-to-end Power Solutions tailored for industrial and commercial sectors. Our expertise lies in the import, installation, and commissioning of industrial-scale solar plants. We offer flexible financial models, including direct sales and Power Purchase Agreements (PPA), enabling businesses to switch to clean energy with zero upfront capital investment.',
        img: '/images/services/1.webp',
        features: ['Industrial Solar Installation', 'PPA (Power Purchase Agreement) Models', 'EPC Services', 'Off-grid solutions']
    },
    {
        slug: 'energy-trading',
        title: 'Energy Trading',
        desc: 'Our Energy Trading division focuses on sourcing and distributing high-quality refined and non-renewable fuels. We specialize in the procurement of LPG from the Middle East, ensuring a stable and cost-effective energy supply for our clients in Pakistan. Our robust supply chain and market expertise make us a reliable partner in the fuel trading landscape.',
        img: '/images/services/2.webp',
        features: ['LPG Procurement', 'Fuel Supply Chain Management', 'Market Analysis', 'Cross-border Logistics']
    },
    {
        slug: 'energy-development',
        title: 'Energy Development',
        desc: 'TechX is at the forefront of Energy Development, working on utility-scale renewable energy projects. We handle the entire lifecycle of a project—from conceptual design and feasibility studies to arranging international funding and regulatory approvals. Our goal is to contribute to Pakistan\'s energy security through large-scale sustainable initiatives.',
        img: '/images/services/3.webp',
        features: ['Utility-scale Project Management', 'Financial Structuring', 'Feasibility Studies', 'Regulatory Approvals']
    },
    {
        slug: 'infrastructure',
        title: 'Infrastructure Management',
        desc: 'Energy infrastructure is the backbone of any developing economy. At TechX, we specialize in the development and management of energy infrastructure, including port facilities and specialized storage solutions for energy products. Our infrastructure projects are designed for long-term sustainability and operational excellence.',
        img: '/images/services/4.webp',
        features: ['Port Energy Infrastructure', 'Storage Facilities Development', 'Logistics Infrastructure', 'Operational Management']
    },
];

export default function ServiceDetail() {
    const params = useParams();
    const slug = params.id;

    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="container py-100 text-center">
                <h2>Service Not Found</h2>
                <Link href="/services" className="btn-main mt-4">Back to Services</Link>
            </div>
        );
    }

    return (
        <main>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                <section id="subheader" className="bg-dark text-light relative" style={{ backgroundImage: `url(${service.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="col-lg-12">
                                <div className="spacer-double sm-hide"></div>
                                <motion.h5 {...fadeInUp}>Specialized Energy Services</motion.h5>
                                <motion.h1 className="mb-3" {...fadeInUp} transition={{ delay: 0.2 }}>{service.title}</motion.h1>
                                <div className="border-bottom mb-3"></div>
                                <ul className="crumb">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/services">Our Services</Link></li>
                                    <li className="active">{service.title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-edge-bottom h-50"></div>
                    <div className="sw-overlay op-8"></div>
                </section>

                <section>
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <motion.div className="rounded-1 overflow-hidden shadow-2xl" {...fadeInUp}>
                                    <img src={service.img} className="w-100" alt={service.title} />
                                </motion.div>
                            </div>
                            <div className="col-lg-6">
                                <motion.div className="subtitle mb-3" {...fadeInUp}>{service.title}</motion.div>
                                <motion.h2 className="mb-4" {...fadeInUp} transition={{ delay: 0.2 }}>Expert Solutions for {service.title}</motion.h2>
                                <motion.p className="lead" {...fadeInUp} transition={{ delay: 0.3 }}>
                                    {service.desc}
                                </motion.p>

                                <div className="spacer-single"></div>

                                <div className="row g-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="col-md-6">
                                            <div className="d-flex align-items-center shadow-sm p-3 rounded-1 border-start border-4 border-color bg-light">
                                                <i className="icofont-check-circled id-color fs-24 me-3"></i>
                                                <h5 className="mb-0 fs-16">{feature}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="spacer-single"></div>

                                <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
                                    <Link className="btn-main fx-slide" href="/contact"><span>Request a Consultation</span></Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-light border-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h3 className="mb-0">Ready to transform your energy landscape?</h3>
                                <p className="mb-0 text-muted">Contact our expert team today for a tailored solution.</p>
                            </div>
                            <div className="col-lg-4 text-lg-end mt-sm-30">
                                <Link className="btn-main fx-slide" href="/contact"><span>Get in Touch</span></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
