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
        title: 'Textile Solar Plant',
        logo: '/images/projects/sadaqat logo.jpeg',
        capacity: '12 MW',
        location: 'Faisalabad',
        img: '/images/projects/textile1.jpeg',
        desc: 'Complete engineering, procurement, construction, and ongoing operations & maintenance services for Sadaqat Limited\'s industrial solar power plant.',
        tags: ['EPC Services', 'O&M Services', 'Grid Integration'],
    },
    {
        id: 2,
        title: 'Cement Solar Plant',
        logo: '/images/projects/dewan .jpeg',
        capacity: '8 MW',
        location: 'Karachi',
        img: '/images/projects/deewan2.jpeg',
        desc: 'Full-scale industrial solar solution for Dewan Cement\'s manufacturing facility, reducing grid dependency and cutting operational energy costs.',
        tags: ['EPC Services', 'Industrial Solar', 'Energy Audit'],
    },
    {
        id: 3,
        title: 'Steel Solar Plant',
        logo: '/images/projects/ittehad logo.jpeg',
        capacity: '5 MW',
        location: 'Lahore',
        img: '/images/projects/ittehad steel 1.jpeg',
        desc: 'Specialized electrical engineering and maintenance services for Ittehad Steel\'s on-site solar generation facility.',
        tags: ['O&M Services', 'Electrical Engineering', 'Solar PV'],
    },
    {
        id: 4,
        title: 'Motorway Solar',
        logo: '/images/projects/moterway logo.jpeg',
        capacity: '660 KW',
        location: 'Uch Shareef & Rajhana',
        img: ['/images/projects/moterway.webp', '/images/projects/projects-main.jpeg'] as any,
        desc: 'Highway infrastructure solar power solution providing clean energy to motorway service areas and administrative buildings.',
        tags: ['Infrastructure', 'EPC Services', 'Solar PV', 'Grid Integration', 'O&M Services'],
    },
    {
        id: 6,
        title: 'Fuel Supply Network',
        logo: '/images/projects/ssgc.jpeg',
        capacity: 'N/A',
        location: 'Nationwide',
        img: '/images/services/core-energy-trading.webp',
        desc: 'Comprehensive LPG sourcing and distribution network across Pakistan, importing refined fuels from the Middle East.',
        tags: ['Fuel Trading', 'LPG', 'Distribution'],
    },
    {
        id: 7,
        title: 'Energy Storage Infrastructure ( Upcoming )',
        logo: '/images/projects/ssgc.jpeg',
        capacity: 'N/A',
        location: 'Gwadar',
        img: '/images/background/1.webp',
        desc: 'Major port infrastructure development enabling large-scale energy imports and exports through the strategic Gwadar deep-sea port.',
        tags: ['Infrastructure', 'Port Development', 'Logistics'],
    },



];

export default function Projects() {
    return (
        <main>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                <section id="subheader" className="bg-dark text-light relative" style={{ backgroundImage: 'url(/images/projects/projects-main.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                    <div className="sw-overlay op-3"></div>
                </section>

                <section>
                    <div className="container">
                        <div className="row g-4">
                            {projects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    className="col-lg-4 col-md-6"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                                >
                                    <div style={cardStyle}>
                                        {/* Image */}
                                        <div style={imgWrapStyle}>
                                            {Array.isArray(project.img) ? (
                                                <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                                                    {project.img.map((src: string, i: number) => (
                                                        <div key={i} style={{ flex: 1, overflow: 'hidden' }}>
                                                            <img
                                                                src={src}
                                                                alt={project.title}
                                                                style={{ ...imgStyle, height: '100%', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <img
                                                    src={project.img}
                                                    alt={project.title}
                                                    style={imgStyle}
                                                />
                                            )}
                                        </div>

                                        {/* Body */}
                                        <div style={bodyStyle}>
                                            {/* Title Row */}
                                            <div style={titleRowStyle}>
                                                <h4 style={titleStyle}>{project.title}</h4>
                                                {project.logo ? (
                                                    <img src={project.logo} alt="Client Logo" style={{ height: '30px', objectFit: 'contain', maxWidth: '80px' }} />
                                                ) : (
                                                    <span style={badgeStyle}>&nbsp;</span>
                                                )}
                                            </div>

                                            <div style={dividerStyle}></div>

                                            {/* Meta Row */}
                                            <div style={metaRowStyle}>
                                                <div style={metaItemStyle}>
                                                    <span style={metaLabelStyle}>Capacity</span>
                                                    <span style={metaValueStyle}>{project.capacity}</span>
                                                </div>
                                                <div style={metaItemStyle}>
                                                    <span style={metaLabelStyle}>Location</span>
                                                    <span style={metaValueStyle}>
                                                        {project.location}
                                                        <span style={dotStyle}>.</span>
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p style={descStyle}>{project.desc}</p>

                                            {/* Tags */}
                                            <div style={tagsStyle}>
                                                {project.tags.map((tag) => (
                                                    <span key={tag} style={tagStyle}>{tag}</span>
                                                ))}
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
                                { title: "Need Our Services?", text: "Call: 051 6141110" },
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

/* ── Inline styles matching the reference card design ── */

const cardStyle: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '14px',
    overflow: 'hidden',
    boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
};

const imgWrapStyle: React.CSSProperties = {
    width: '100%',
    aspectRatio: '16/10',
    overflow: 'hidden',
};

const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
};

const bodyStyle: React.CSSProperties = {
    padding: '20px 22px 18px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
};

const titleRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '4px',
};

const titleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#111111',
    margin: 0,
    lineHeight: 1.3,
};

const badgeStyle: React.CSSProperties = {
    minWidth: '60px',
    height: '28px',
    borderRadius: '6px',
    background: '#F5A623',
    flexShrink: 0,
    display: 'inline-block',
};

const dividerStyle: React.CSSProperties = {
    borderTop: '1px solid #ebebeb',
    margin: '14px 0',
};

const metaRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '32px',
    marginBottom: '14px',
};

const metaItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
};

const metaLabelStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    color: '#999',
    fontWeight: 500,
    letterSpacing: '0.02em',
};

const metaValueStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#111',
};

const dotStyle: React.CSSProperties = {
    color: '#e02020',
    fontWeight: 900,
};

const descStyle: React.CSSProperties = {
    fontSize: '0.88rem',
    color: '#444',
    lineHeight: 1.65,
    margin: '0 0 16px',
    flexGrow: 1,
};

const tagsStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: 'auto',
};

const tagStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#333',
    border: '1px solid #ddd',
    borderRadius: '6px',
    padding: '4px 10px',
    background: '#fafafa',
    letterSpacing: '0.01em',
};
