'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const blogPosts = [
    {
        id: 1,
        category: 'solar energy',
        title: 'The Basics of Solar Energy',
        desc: 'Discover how solar panels work and the fundamentals behind converting sunlight into sustainable energy for homes and businesses...',
        author: 'Amelia Bright',
        authorImg: '/images/testimonial/1.webp',
        date: '10 Jan 2025',
        img: '/images/blog/1.webp',
    },
    {
        id: 2,
        category: 'solar energy',
        title: 'Benefits of Going Solar in 2025',
        desc: 'Learn why more homeowners are switching to solar energy to reduce electricity bills and carbon footprints in today’s economy...',
        author: 'Daniel Yuen',
        authorImg: '/images/testimonial/2.webp',
        date: '22 Feb 2025',
        img: '/images/blog/2.webp',
    },
    {
        id: 3,
        category: 'solar energy',
        title: 'Common Myths About Solar Panels',
        desc: 'Uncover the truth behind popular misconceptions about solar energy, from performance on cloudy days to installation costs...',
        author: 'Leona Hart',
        authorImg: '/images/testimonial/3.webp',
        date: '05 Mar 2025',
        img: '/images/blog/3.webp',
    },
    {
        id: 4,
        category: 'solar energy',
        title: 'Tips for Maximizing Solar Efficiency',
        desc: 'Explore practical ways to boost the output of your solar system through maintenance, angle adjustments, and energy management...',
        author: 'Marco Elridge',
        authorImg: '/images/testimonial/4.webp',
        date: '12 Mar 2025',
        img: '/images/blog/4.webp',
    },
    {
        id: 5,
        category: 'solar energy',
        title: 'The Future of Solar Technology',
        desc: 'From solar roof tiles to energy storage solutions, get a glimpse into the cutting-edge innovations shaping solar energy in the next decade...',
        author: 'Nina Torres',
        authorImg: '/images/testimonial/5.webp',
        date: '28 Apr 2025',
        img: '/images/blog/5.webp',
    },
    {
        id: 6,
        category: 'solar energy',
        title: 'Choosing the Right Solar Installer',
        desc: 'Selecting a reliable installer is key to a successful solar investment. Here\'s what to look for when evaluating solar installation companies...',
        author: 'Ethan Wells',
        authorImg: '/images/testimonial/6.webp',
        date: '03 May 2025',
        img: '/images/blog/6.webp',
    },
];

export default function Blog() {
    return (
        <main>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                <section id="subheader" className="bg-dark text-light relative" style={{ backgroundImage: 'url(/images/background/7.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="col-lg-12">
                                <div className="spacer-double sm-hide"></div>
                                <motion.h5 {...fadeInUp}>Power Your Future with Clean Energy</motion.h5>
                                <motion.h1 className="mb-3" {...fadeInUp} transition={{ delay: 0.2 }}>Our Blog</motion.h1>
                                <div className="border-bottom mb-3"></div>
                                <ul className="crumb">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active">Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-edge-bottom h-50"></div>
                    <div className="sw-overlay"></div>
                </section>

                <section>
                    <div className="container">
                        <div className="row g-4 gy-5">
                            {blogPosts.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    className="col-lg-4 col-md-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="hover group">
                                        <div className="post-image rounded-1 mb-3 overflow-hidden shadow-lg">
                                            <div className="d-tagline z-2 shadow">
                                                <span>{post.category}</span>
                                            </div>
                                            <Link href="/blog">
                                                <img alt={post.title} src={post.img} className="hover-scale-1-1 w-100 transition-all duration-700" />
                                            </Link>
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="mb-2"><Link className="text-dark hover-color transition-all" href="/blog">{post.title}</Link></h4>
                                            <p className="mb-3 text-muted fs-15">{post.desc}</p>
                                            <div className="d-flex align-items-center">
                                                <img src={post.authorImg} className="w-30px h-30px me-2 circle shadow-sm" alt={post.author} />
                                                <div className="fs-14 me-3 fw-600 text-dark">{post.author}</div>
                                                <div className="fs-14 text-muted"><i className="icofont-ui-calendar id-color me-2"></i><span>{post.date}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
