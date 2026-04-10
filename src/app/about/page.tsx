'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function About() {
    return (
        <main>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                <section id="subheader" className="bg-dark text-light relative" style={{ backgroundImage: 'url(/images/background/2.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="col-lg-12">
                                <div className="spacer-double sm-hide"></div>

                                <motion.h1 className="mb-3" {...fadeInUp} transition={{ delay: 0.2 }}>About TECH X</motion.h1>
                                <h6>At TECHX Pvt Ltd, we are driven to fulfill the energy needs of industrial and commercial users by providing solutions tailored to their needs.

                                    We help our clients source energy and power that works for their unique needs and suits their budgets. Not just a vendor, we work as partners with industries across Pakistan, to help them assess the right solution for their requirements.</h6>
                                <div className="border-bottom mb-3"></div>
                                <ul className="crumb">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active">About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-edge-bottom h-50"></div>
                    <div className="sw-overlay"></div>
                </section>

                <div className="spacer-double"></div>

                {/* OUR STORY CARDS SECTION */}
                <section className="bg-light py-5">
                    <div className="container">

                        <div className="row text-center mb-5">
                            <div className="col-lg-12">
                                <motion.h2 {...fadeInUp}>
                                    Our Story
                                </motion.h2>

                                <motion.p
                                    className="col-lg-8 mx-auto text-muted"
                                    {...fadeInUp}
                                    transition={{ delay: 0.2 }}
                                >
                                    At TECHX Pvt Ltd, we combine deep knowledge of the energy
                                    value chain with our technical excellence to deliver
                                    impactful solutions. Our multidisciplinary expertise
                                    enables us to address complex challenges and drive
                                    innovation across the energy and power landscape.
                                </motion.p>
                            </div>
                        </div>

                        <div className="row g-4 text-center">

                            <motion.div className="col-lg-4" {...scaleIn}>
                                <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                                    <i className="fa-solid fa-bolt fs-1 text-warning mb-3"></i>
                                    <h4>Power Solutions</h4>
                                    <p className="text-muted">
                                        Import and installation of industrial scale solar
                                        plants under sale and PPA contracts.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="col-lg-4"
                                {...scaleIn}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                                    <i className="fa-solid fa-right-left fs-1 text-warning mb-3"></i>
                                    <h4>Energy Trading</h4>
                                    <p className="text-muted">
                                        Sourcing refined and non-renewable fuels including
                                        LPG from Middle East.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="col-lg-4"
                                {...scaleIn}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                                    <i className="fa-solid fa-industry fs-1 text-warning mb-3"></i>
                                    <h4>Energy Development</h4>
                                    <p className="text-muted">
                                        Development, design and arranging funding for
                                        utility scale projects.
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                <section className="bg-light">
                    <div className="container">
                        <div className="row g-4 text-center">
                            <div className="col-lg-12">
                                <motion.div className="fw-bold fs-30 mb-2" {...fadeInUp}>Our Professional Team</motion.div>
                                <motion.h2 className="fw-bold" {...fadeInUp} transition={{ delay: 0.2 }}>Key Board and Team Members</motion.h2>
                                <div>Meet the leadership team driving TECHX's success in the energy sector.</div>
                            </div>
                            {[
                                { name: "Engr. Saad Sikander", role: "Founder and CEO", img: "1" },
                                { name: "Air Commodore (Retd.) Sikander Niaz (TI M)", role: "Chairman", img: "2" },
                                { name: "Mrs. Amina Sikander", role: "Board Member", img: "3" },
                                { name: "Mr. Fahad Sikander", role: "Project Manager", img: "4" },
                                { name: "Engr. Umair ur Rehman", role: "Snr. Mgr and CTO", img: "4" },
                                { name: "Dr. Atif Naveed Khan", role: "Director Technical and Projects", img: "4" },
                                { name: "Mr. Rizwan", role: "Senior Supervisor", img: "4" },
                                { name: "Mr. Aamir", role: "Senior Supervisor", img: "4" },
                                { name: "Mr. Asad Abbas", role: "Manager Admin and Maintenance", img: "4" },
                                { name: "Engr. Noman", role: "Manager Electrical", img: "4" },
                                { name: "Engr.Ansar Abbas", role: "Electrical Supervision" },
                                { name: "Raja Azhar", role: "Manager Operatiom" },
                                { name: "Engr Hashim Abbasi", role: "Assistant Manager" },
                                { name: "Isha Azeem", role: "Team Member" }



                            ].map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    className="col-lg-3 col-md-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="bg-white relative border-gray rounded-1 overflow-hidden group hover:shadow-2xl transition-all h-100">
                                        <div className="p-4 text-center">
                                            <h4 className="mb-0">{member.name}</h4>
                                            <p className="mb-3 text-muted">{member.role}</p>
                                            <div className="social-icons s1 mt-3">
                                                <Link href={`mailto:${member.role === 'Founder and CEO' ? 'ceo@techx.com' : 'info@techx.com'}`}><i className="fa-regular fa-envelope"></i></Link>
                                                {member.role === 'Founder and CEO' && (
                                                    <Link href="https://www.linkedin.com/in/saad-sikander-659384193?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden py-5" style={{ backgroundImage: 'url(/images/background/gradient-2.webp)', backgroundSize: 'cover' }}>
                    <div className="container py-5">
                        <div className="row g-4 gx-5">
                            <section className="relative overflow-hidden py-5">
                                <div className="container py-5">
                                    <div className="row g-4 gx-5">
                                        {/* Our Vision */}
                                        <div className="col-lg-6">
                                            <motion.h2 className="mb-4" {...fadeInUp}>Our Vision</motion.h2>
                                            <motion.p className="fs-20 fw-500 lh-1-6" {...fadeInUp} transition={{ delay: 0.2 }}>
                                                Our vision is to become a trusted leader in delivering innovation, reliable, and sustainable enery solutions that empower businesses, industries, and communities to grow and succeed. We aim to transform the way energy is generated and managed by intregrating advanced technologies, efficient systems, and renewable resources. Through continous innovation and a commitment to excellence, we strive to create energy solutions that suport economic growth while reducing enviromental impact. Ultimately, our goal is to contribute to a future powered by clean, efficient, and intelligence energy system that enable progress and sustainability for generations to come.                                          </motion.p>
                                        </div>

                                        {/* TECHX Mission */}
                                        <div className="col-lg-6">
                                            <motion.h2 className="mb-4" {...fadeInUp}>TECHX Mission (Current Purpose)</motion.h2>
                                            <motion.p className="fs-16 lh-1-6" {...fadeInUp} transition={{ delay: 0.2 }}>
                                                Mission defines what the company is currently doing to achieve its vision.
                                            </motion.p>

                                            <motion.ul className="list-unstyled fs-16 lh-1-6" {...fadeInUp} transition={{ delay: 0.3 }}>
                                                <li>👉 Provide businesses with reliable and modern energy solutions</li>
                                                <li>👉 Develop solar systems and energy infrastructure</li>
                                                <li>👉 Offer EPC (Engineering, Procurement, Construction) and O&M (Operation & Maintenance) services (<a href="https://techx.com.pk" target="_blank" className="text-warning">techx.com.pk</a>)</li>
                                            </motion.ul>

                                            <motion.p className="mt-3 fs-16 lh-1-6" {...fadeInUp} transition={{ delay: 0.4 }}>
                                                In simple terms:
                                            </motion.p>

                                            <motion.ul className="list-unstyled fs-16 lh-1-6" {...fadeInUp} transition={{ delay: 0.5 }}>
                                                <li>• Install industrial solar power systems</li>
                                                <li>• Conduct energy trading (like LPG import)</li>
                                                <li>• Design and develop power projects</li>
                                                <li>• Provide maintenance and monitoring for solar systems</li>
                                            </motion.ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

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
