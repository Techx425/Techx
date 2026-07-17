'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const services = [
    {
        slug: 'power-solutions',
        title: 'Renewable Energy Solutions',
        desc: 'At TechX, we provide end-to-end Renewable Energy Solutions tailored for industrial and commercial sectors. Our expertise lies in the import, installation, and commissioning of industrial-scale solar plants. We offer flexible financial models, including direct sales and Power Purchase Agreements (PPA), enabling businesses to switch to clean energy with zero upfront capital investment.',
        img: '/images/projects/deewan2.jpeg',
        features: ['Industrial Solar Installation', 'PPA (Power Purchase Agreement) Models', 'EPC Services', 'Off-grid solutions']
    },
    {
        slug: 'energy-trading',
        title: 'Fuel Trading',
        desc: 'Our Fuel Trading division focuses on sourcing and distributing high-quality refined and non-renewable fuels. We specialize in the procurement of LPG from the Middle East, ensuring a stable and cost-effective energy supply for our clients in Pakistan. Our robust supply chain and market expertise make us a reliable partner in the fuel trading landscape.',
        img: '/images/services/core-energy-trading.webp',
        features: ['LPG Procurement', 'Fuel Supply Chain Management', 'Market Analysis', 'Cross-border Logistics']
    },
    {
        slug: 'energy-development',
        title: 'Renewable Energy Infrastructure',
        desc: 'TechX is at the forefront of Renewable Energy Infrastructure, working on utility-scale renewable energy projects. We handle the entire lifecycle of a project—from conceptual design and feasibility studies to arranging international funding and regulatory approvals. Our goal is to contribute to Pakistan\'s energy security through large-scale sustainable initiatives.',
        img: '/images/services/enerydevelopement.webp',
        features: [
            'Utility-scale Project Management', 
            'Financial Structuring', 
            'Feasibility Studies', 
            'Regulatory Approvals',
            { 
                title: 'Energy Analysis & Feasibility Studies', 
                desc: 'TechX conducts comprehensive solar energy analysis using PVsyst and HelioScope, delivering accurate energy yield simulations, performance ratio assessments, and financial feasibility studies to ensure bankable, high-return solar investments.',
                subItems: [
                    'Energy yield simulation', 
                    'Generation estimation', 
                    'Performance Ratio (PR)', 
                    'Loss analysis', 
                    'Shading analysis', 
                    'Financial feasibility', 
                    'Payback calculation', 
                    'Peak shaving study'
                ] 
            },
            {
                title: 'Site Survey Services',
                desc: 'Our site survey team combines drone technology with on-ground inspection to assess roof conditions, shading patterns, and existing electrical infrastructure; the foundation for accurate solar system design.',
                subItems: [
                    'Drone survey',
                    'Roof inspection',
                    'Shade analysis',
                    'GPS mapping',
                    'Utility data collection',
                    'Existing electrical assessment'
                ]
            },
            {
                title: 'Grid Compliance & Documentation',
                desc: 'TechX manages the complete net metering and grid compliance process required by Pakistan\'s DISCOs and NEPRA, preparing protection study reports, technical specifications, and BOQs to keep projects fully compliant.',
                subItems: [
                    'Net metering documentation',
                    'Protection study reports',
                    'Grid compliance reports',
                    'Electrical calculations',
                    'BOQ preparation',
                    'Technical specifications'
                ]
            },
            {
                title: 'Procurement Support',
                desc: 'For clients managing their own equipment purchase, TechX offers independent technical assistance: from BOQ verification to Factory Acceptance Testing, ensuring quality and value at every stage.',
                subItems: [
                    'BOQ verification',
                    'Vendor comparison',
                    'Technical bid evaluation',
                    'Factory Acceptance Test (FAT) witnessing',
                    'Material inspection',
                    'Quality assurance'
                ]
            }
        ]
    },
    {
        slug: 'o-and-m',
        title: 'O & M',
        desc: 'At TechX, we provide comprehensive Operations and Maintenance (O&M) services to ensure your solar power plants and energy infrastructure operate at peak efficiency. Our proactive maintenance strategies minimize downtime, maximize energy yield, and significantly extend the lifespan of your renewable energy assets.',
        img: '/images/services/O&M.jpeg',
        features: ['Preventive & Corrective Maintenance', 'Performance Monitoring', 'Asset Management', 'Cleaning & Inspection']
    },
];

export default function ServiceDetail() {
    const params = useParams();
    const slug = params.id;
    const [openFeatures, setOpenFeatures] = useState<number[]>([]);

    const toggleFeature = (idx: number) => {
        setOpenFeatures(prev => {
            const current = Array.isArray(prev) ? prev : [];
            return current.includes(idx) ? current.filter(i => i !== idx) : [...current, idx];
        });
    };

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
                    <div className="abs top-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
                </section>

                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <motion.div className="subtitle mb-3" {...fadeInUp}>{service.title}</motion.div>
                                <motion.h2 className="mb-4" {...fadeInUp} transition={{ delay: 0.2 }}>Expert Solutions for {service.title}</motion.h2>
                                <motion.p className="lead" {...fadeInUp} transition={{ delay: 0.3 }}>
                                    {service.desc}
                                </motion.p>

                                <div className="spacer-single"></div>

                                <div className="row g-4 text-start">
                                    {service.features.map((feature, idx) => {
                                        const isObject = typeof feature === 'object' && feature !== null;
                                        const title = isObject ? (feature as any).title : feature;
                                        const desc = isObject ? (feature as any).desc : null;
                                        const subItems = isObject ? (feature as any).subItems : [];
                                        const isOpen = openFeatures.includes(idx);

                                        return (
                                            <div key={idx} className="col-md-6">
                                                <div 
                                                    className="shadow-sm p-3 rounded-1 border-start border-4 border-color bg-light"
                                                    style={isObject ? { cursor: 'pointer' } : {}}
                                                    onClick={isObject ? () => toggleFeature(idx) : undefined}
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <i className="icofont-check-circled id-color fs-24 me-3"></i>
                                                        <h5 className="mb-0 fs-16 flex-grow-1">{title as string}</h5>
                                                        {isObject && (
                                                            <i className={`icofont-rounded-${isOpen ? 'up' : 'down'} ms-2`}></i>
                                                        )}
                                                    </div>
                                                    {isObject && isOpen && (
                                                        <div className="mt-3 ps-4 pt-3 border-top">
                                                            {desc && <p className="mb-3 text-muted lh-base">{desc}</p>}
                                                            <ul className="list-unstyled mb-0">
                                                                {subItems.map((item: string, i: number) => (
                                                                    <li key={i} className="mb-2"><i className="icofont-long-arrow-right id-color me-2"></i>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
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
