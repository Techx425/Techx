'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        if (typeof document !== 'undefined') {
            document.body.classList.remove('no-scroll');
        }
    }, [pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (typeof document !== 'undefined') {
            if (!isMobileMenuOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        }
    };

    return (
        <header className={`${isSticky ? 'header-light scrollOn' : 'transparent scrollOff'} ${isMobileMenuOpen ? 'header-mobile' : ''}`}>
            <div id="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between xs-hide">
                                <div className="d-flex">

                                    <div className="topbar-widget me-5">
                                        <Link href="#"><i className="icofont-phone"></i>051 6141110</Link>
                                    </div>
                                    <div className="topbar-widget me-5">
                                        <Link href="#"><i className="icofont-envelope"></i>ceo@techx.com</Link>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="social-icons">
                                        <Link href="https://www.instagram.com/techx_pvtltd?igsh=MW1pMXcxbjZnOTY5bA==" target="_blank"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                        <Link href="https://www.linkedin.com/company/tech-x-pvt-ltd/" target="_blank"><i className="fa-brands fa-linkedin-in fa-lg"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div id="logo">
                                    <Link href="/">
                                        <img className="logo-main" src="/images/background/techx-logo.png" alt="TechX" />
                                        <img className="logo-mobile" src="/images/background/techx-logo.png" alt="TechX" />
                                    </Link>
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu" style={{ display: isMobileMenuOpen ? 'block' : undefined }}>
                                    <li>
                                        <Link className="menu-item" href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link className="menu-item" href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link className="menu-item" href="/projects">Projects</Link>
                                    </li>

                                    <li>
                                        <Link className="menu-item" href="/about">About Us</Link>
                                    </li>
                                    <li><Link className="menu-item" href="/blog">Blog</Link></li>
                                    <li><Link className="menu-item" href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="de-flex-col">
                                <div className="menu_side_area">
                                    <Link href="/contact" className="btn-main btn-line fx-slide hover-white"><span>Get a Quote</span></Link>
                                    <span id="menu-btn" onClick={toggleMobileMenu} className={isMobileMenuOpen ? 'active' : ''}></span>
                                </div>

                                <div id="btn-extra">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
