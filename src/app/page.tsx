'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Sun, Zap, Award, Users, Globe, BarChart } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  transition: { duration: 0.8 }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const newLocal = "Reduce your carbon footprint and protect the planet.";
  return (
    <main>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section className="section-dark no-top no-bottom text-light relative v-center h-100vh overflow-hidden">
          <img
            src="/images/background/home.jpeg"
            className="abs w-100 h-100 object-cover z-0"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Hero Background"
          />



          <div className="abs w-80 bottom-10 z-2 w-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-start">
                    <motion.div className="col-lg-5" {...fadeInUp}>
                      <p className="fs-20">At TECHX Pvt Ltd, we are driven to fulfill the energy needs of industrial and commercial users by providing solutions tailored to their needs. We help our clients source energy and power that works for their unique requirements and suits their budgets.</p>
                    </motion.div>
                    <motion.h1
                      className="fs-50 text-uppercase fs-sm-10vw mb-4 lh-1"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Powering Pakistan's Future with Sustainable Energy Solutions
                    </motion.h1>

                    <motion.div
                      className="d-flex align-items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <Link className="btn-main me-5" href="/contact">Get Started Now</Link>
                      <div className="relative me-4">
                        {[1, 2, 3].map((i) => (
                          <motion.img
                            key={i}
                            src={`/images/testimonial/${i}.webp`}
                            className="w-50px circle ms-min-10 shadow-lg border border-2 border-white"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + (i * 0.2) }}
                            alt=""
                          />
                        ))}
                      </div>
                      <div className="fw-600 fs-14 lh-1-5">
                        <span className="fs-16 fw-bold">25k+</span><br />happy customers
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <motion.h5 {...fadeInUp}>About Us</motion.h5>
              </div>
              <div className="col-lg-9">
                <motion.h3 {...fadeInUp} transition={{ delay: 0.2 }}>
                  At TECHX Pvt Ltd, we are driven to fulfill the energy needs of industrial and commercial users by providing solutions tailored to their needs.
                  <span className="op-3"> We help our clients source energy and power that works for their unique needs and suits their budgets. Not just a vendor, we work as partners with industries across Pakistan, to help them assess the right solution for their requirements.</span>
                </motion.h3>

                <div className="spacer-single"></div>

                <div className="row g-4 gx-5">
                  {[
                    { val: "100K+", label: "Solar Panels Installed" },
                    { val: "25K+", label: "Homes Powered" },
                    { val: "16+", label: "Years of Expertise" }
                  ].map((stat, idx) => (
                    <div key={idx} className="col-md-3 col-sm-6">
                      <motion.div
                        className="de_count lh-1-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * (idx + 1) }}
                      >
                        <h3 className="fs-40 mb-0 id-color">{stat.val}</h3>
                        {stat.label}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-top bg-light">
          <div className="container">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="relative">
                  <motion.div className="relative overflow-hidden z-2 mb-5 rounded-1 w-60 soft-shadow" {...scaleIn}>
                    <img src="/images/misc/p1.webp" className="w-100 hover-scale-1-2 transition-all" alt="" />
                  </motion.div>
                  <motion.div
                    className="abs overflow-hidden top-0 end-0 mt-5 rounded-1 w-60 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <img src="/images/misc/p2.webp" className="w-100 hover-scale-1-2 transition-all" alt="" />
                  </motion.div>
                </div>
              </div>

              <div className="col-lg-6">
                <motion.div className="subtitle id-color mb-2" {...fadeInUp}>Solar Power for Smarter Future</motion.div>
                <motion.h2 {...fadeInUp} transition={{ delay: 0.2 }}>Not Just a Vendor, We're Your Energy  <span className="op-3">Partner</span></motion.h2>
                <motion.p {...fadeInUp} transition={{ delay: 0.3 }}>We work as partners with industries across Pakistan, to help them assess the right solution for their requirements. Our multidisciplinary expertise enables us to address complex challenges and drive innovation across the energy and power landscape.</motion.p>

                <div className="border-bottom mb-4"></div>

                <motion.div
                  className="feature-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }} >

                  <ul className="ul-check fw-600 mb-0">
                    {[
                      "EPC & O&M Services.",
                      "Solar PPA Solutions",
                      "On-grid & Off-grid.",
                      "Performance Optimization."
                    ].map((text, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                      >
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
                  <Link className="btn-main fx-slide" href="/contact"><span>Get a Quote</span></Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <section className="section-dark p-0 bg-color overflow-hidden" aria-label="section">
          <div className="text-dark d-flex py-4 lh-1">

            <motion.div
              className="d-flex flex-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              }}
              style={{ width: "max-content" }}
            >
              {[...Array(2)].map((_, j) =>
                Array(10).fill(0).map((_, i) => (
                  <div key={`${j}-${i}`} className="d-flex align-items-center mx-4">
                    <span className="fs-30 fw-800 text-uppercase">
                      Solar Energy Experts
                    </span>
                    <img
                      src="/images/logo-icon-dark.webp"
                      className="w-30px mx-4"
                      alt=""
                    />
                  </div>
                ))
              )}
            </motion.div>

          </div>
        </section>
        {/* Services Swiper */}
        <section className="bg-light">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 text-center">
                <motion.div className="subtitle mb-3" {...fadeInUp}>Solar Energy Services</motion.div>
                <motion.h2 {...fadeInUp} transition={{ delay: 0.2 }}>Reliable, Renewable, and <span className="op-3">Cost-Effective Energy</span></motion.h2>
                <motion.p className="lead mb-0" {...fadeInUp} transition={{ delay: 0.3 }}>Switch to solar and enjoy lower bills, clean energy, and expert service designed for homes, businesses, and beyond.</motion.p>
                <div className="spacer-single"></div>
              </div>
            </div>

            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-5"
            >
              {[
                { title: 'Power Solutions', slug: 'power-solutions', img: '1', desc: 'Import and installation of industrial scale solar plants under sale and PPA contracts.' },
                { title: 'Energy Trading', slug: 'energy-trading', img: '2', desc: 'Sourcing refined and non-renewable fuels: LPG from Middle East.' },
                { title: 'Energy Development', slug: 'energy-development', img: '3', desc: 'Development, design and arranging funding for utility scale projects.' },
                { title: 'Infrastructure', slug: 'infrastructure', img: '4', desc: 'Development of Port and energy storage infrastructure.' },

              ].map((service, i) => (
                <SwiperSlide key={i}>
                  <div className="hover p-2">
                    <div className="relative overflow-hidden group">
                      <Link href={`/services/${service.slug}`} className="d-block">
                        <div className="relative overflow-hidden rounded-1 shadow-sm">
                          <img src={`/images/services/${service.img}.webp`} className="w-100 hover-scale-1-2" alt={service.title} />
                        </div>
                      </Link>
                      <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100 shadow-lg">
                        <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px flex-center shadow">
                          <Link href={`/services/${service.slug}`}>
                            <img src="/images/misc/up-right-arrow.webp" className="w-100 p-20" alt="" />
                          </Link>
                        </div>
                        <h4 className="mb-2">{service.title}</h4>
                        <p className="mb-0 text-muted">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center mt-4">
              <Link className="btn-main fx-slide" href="/services"><span>View All Services</span></Link>
            </div>
          </div>
        </section>
        {/* Services Swiper Section End */}

        {/* Ultra Modern Stats Section */}
        <section className="parallax-section relative overflow-hidden py-24" style={{ backgroundImage: 'url(/images/background/2.webp)', backgroundColor: '#000' }}>
          <div className="absolute inset-0 bg-black/85 z-0"></div>
          {/* Beautiful glowing orb effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[120px] pointer-events-none z-0"></div>

          <div className="container relative z-10">
            <div className="row g-4 justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <motion.div
                  className="subtitle id-color mb-3 font-semibold tracking-wider uppercase text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  TechX Global Impact
                </motion.div>
                <motion.h2
                  className="text-white mb-4 display-4 fw-bold"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Innovating the Energy <span className="text-primary glow-text">Landscape</span>
                </motion.h2>
              </div>
            </div>

            <div className="row g-4 relative z-10">
              {[
                { icon: Sun, val: "250", suffix: "MW", label: "Solar Capacity", delay: 0 },
                { icon: Globe, val: "15", suffix: "+", label: "Regions Covered", delay: 0.1 },
                { icon: Users, val: "500", suffix: "+", label: "Happy Clients", delay: 0.2 },
                { icon: BarChart, val: "85", suffix: "%", label: "Efficiency Increase", delay: 0.3 }
              ].map((stat, idx) => (
                <div key={idx} className="col-lg-3 col-md-6">
                  <motion.div
                    className="glass-card p-5 text-center rounded-2 floating h-100 animate-gradient-border"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay, duration: 0.8 }}
                  >
                    <div className="radial-light top-50 start-50 translate-middle"></div>

                    <div className="mb-4 d-flex justify-content-center">
                      <div className="p-3 rounded-circle bg-white/10 border border-white/20">
                        <stat.icon className="id-color" size={32} />
                      </div>
                    </div>

                    <h2 className="glow-number fs-60 mb-2">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {stat.val}
                      </motion.span>
                      {stat.suffix}
                    </h2>

                    <p className="text-white/60 text-uppercase fw-bold ls-2 fs-14 mb-0">
                      {stat.label}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-dark text-light">
          <div className="container relative z-1">
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="relative">
                  <motion.div className="bg-blur text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden shadow-2xl" {...scaleIn}>
                    <h2 className="mb-0 id-color">325%</h2>
                    <p className="lh-1-5 mb-0">Average Increase in Efficiency</p>
                  </motion.div>
                  <motion.div className="rounded-1 w-90 overflow-hidden shadow-2xl" {...fadeInUp}>
                    <img src="/images/misc/s4.webp" className="w-100 hover-scale-1-2" alt="" />
                  </motion.div>
                  <motion.div
                    className="rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-2xl border border-dark"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <img src="/images/misc/s1.webp" className="w-100" alt="" />
                  </motion.div>
                </div>
              </div>

              <div className="col-lg-6">
                <motion.div className="subtitle id-color mb-2" {...fadeInUp}>Trusted & Affordable</motion.div>
                <motion.h2 className="mb-4" {...fadeInUp} transition={{ delay: 0.2 }}>Why Choose TechX?</motion.h2>
                <div className="row g-4">
                  {[
                    { title: "Professional Team", desc: "Certified experts with years of experience." },
                    { title: "Custom Solutions", desc: "Systems tailored to your property layout." },
                    { title: "Affordable Plans", desc: "Flexible financing and incentive guidance." },
                    { title: "Ongoing Support", desc: "Maintenance after installation." }
                  ].map((item, idx) => (
                    <div key={idx} className="col-lg-6">
                      <motion.div
                        className="bg-white/5 p-4 rounded-1 border border-white/10 hover-bg-white/10 transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <h4 className="id-color mb-1">{item.title}</h4>
                        <p className="mb-0 text-white/70">{item.desc}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-double"></div>
        </section>

        {/* Projects Swiper */}
        <section>
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 text-center">
                <motion.div className="subtitle mb-3" {...fadeInUp}>TechX Portfolio</motion.div>
                <motion.h2 {...fadeInUp} transition={{ delay: 0.2 }}>Pioneering Solutions <span className="op-3">Across Pakistan</span></motion.h2>
                <motion.p className="lead mb-0" {...fadeInUp} transition={{ delay: 0.3 }}>From industrial-scale solar plants to regional energy trading networks, we deliver excellence in every project.</motion.p>
                <div className="spacer-single"></div>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              loop={true}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 }
              }}
              className="project-swiper"
            >
              {[
                { title: 'Sadaqat Solar Plant', category: 'Solar Power Projects', img: '1' },
                { title: 'Dewan Cement Solar', category: 'Solar Power Projects', img: '2' },
                { title: 'Ittehad Steel Solar Plant', category: 'Solar Power Projects', img: '3' },
                { title: 'Uch Shareef Motorway Solar Plant', category: 'Solar Power Projects', img: '4' },
                { title: 'Rajhana Motorway Solar Plant', category: 'Solar Power Projects', img: '5' },
                { title: 'LPG Supply Network', category: 'Energy Trading Projects', img: '6' }
              ].map((project, idx) => (
                <SwiperSlide key={idx}>
                  <Link href="/projects">
                    <div className="hover rounded-1 relative overflow-hidden text-light group shadow-lg aspect-video">
                      <div className="abs p-40 top-0 z-3">
                        <img src="/images/misc/up-right-arrow-white.webp" className="w-10 mb-3 group-hover:scale-110 transition-transform" alt="" />
                      </div>
                      <div className="abs p-30 bottom-0 z-3">
                        <span className="badge bg-warning text-dark px-2 py-1 fs-10 uppercase fw-bold mb-2 d-inline-block">{project.category}</span>
                        <h4 className="mb-0 text-white">{project.title}</h4>
                      </div>
                      <div className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2 transition-opacity"></div>
                      <img src={`/images/projects/${project.img}.webp`} className="w-100 h-100 object-cover group-hover:scale-110 transition-transform duration-700" alt={project.title} />
                      <div className="gradient-edge-bottom h-50"></div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-color-2 no-top no-bottom overflow-hidden relative">
          <div className="container-fluid relative half-fluid">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 position-lg-absolute left-half h-100" style={{ minHeight: '600px' }}>
                  <div className="abs w-100 h-100 top-0 start-0" style={{ backgroundImage: 'url(/images/misc/s2.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="abs w-100 h-100 bg-dark/20 top-0 start-0"></div>
                </div>
                <div className="col-lg-5 offset-lg-7 py-5 my-5">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    className="testimonial-swiper"
                  >
                    {[
                      { name: "Alex Morgan", text: "Switching to solar with TechX was the best decision we made. Lower bills, clean energy, and outstanding support." },
                      { name: "Sarah Johnson", text: "The installation was fast and professional. We're already seeing a 70% reduction in our monthly utility costs!" },
                      { name: "Michael Chen", text: "Their monitoring system is amazing. I can see exactly how much energy my roof is producing in real-time." }
                    ].map((t, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="py-4">
                          <i className="icofont-quote-left id-color fs-60 d-block mb-4"></i>
                          <h3 className="mb-4 lh-1-4">{t.text}</h3>
                          <div className="d-flex align-items-center">
                            <img src={`/images/testimonial/${idx + 1}.webp`} className="w-60px circle me-3 shadow" alt="" />
                            <div>
                              <h5 className="mb-0">{t.name}</h5>
                              <span className="text-muted fs-14">Verified Customer</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5">
                <motion.div className="subtitle id-color mb-2" {...fadeInUp}>Everything You Need to Know</motion.div>
                <motion.h2 className="mb-4" {...fadeInUp} transition={{ delay: 0.2 }}>Frequently Asked <span className="id-color">Questions</span></motion.h2>
                <motion.p {...fadeInUp} transition={{ delay: 0.3 }}>Find answers to common questions about solar panel installation, maintenance, and the benefits of renewable energy.</motion.p>
                <motion.div className="mt-4" {...fadeInUp} transition={{ delay: 0.4 }}>
                  <Link href="/contact" className="btn-main font-bold">Ask Anything</Link>
                </motion.div>
              </div>
              <div className="col-lg-7">
                <div className="accordion s2">
                  {[
                    { q: "How does solar energy work?", a: "Solar panels absorb sunlight using PV cells, which convert it into DC electricity. An inverter then converts it to AC for your home." },
                    { q: "Will solar panels reduce my bills?", a: "Absolutely. Most customers see an immediate reduction in utility costs, often paying off the system in 5-7 years." },
                    { q: "What happens on cloudy days?", a: "Solar panels still generate electricity in diffuse light, though at lower efficiency. Your battery storage or grid connection ensures power." },
                    { q: "Does the roof need replacing first?", a: "We inspect your roof during the consultation. If it needs replacement soon, we recommend doing it before install." }
                  ].map((faq, idx) => (
                    <motion.div
                      key={idx}
                      className="accordion-section mb-3 border rounded-1 overflow-hidden"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="accordion-section-title p-3 fw-600 cursor-pointer d-flex justify-content-between align-items-center bg-light">
                        {faq.q}
                        <i className="icofont-rounded-down"></i>
                      </div>
                      <div className="accordion-section-content p-3 text-muted">
                        {faq.a}
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
