import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="section-dark">
            <div className="container relative z-2">
                <div className="row gx-5">
                    <div className="col-lg-4 col-sm-6">
                        <img src="/images/background/techx-logo.png" className="logo-footer" alt="TechX" />
                        <div className="spacer-20"></div>
                        <p>At TechX, we’re committed to delivering reliable, efficient, and sustainable solar energy solutions. From residential installations to commercial systems, we help you harness the power of the sun and reduce your energy bills while protecting the planet.</p>

                        <div className="social-icons mb-sm-30">
                            <Link href="https://wa.me/923435609624" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
                            <Link href="https://www.instagram.com/techx_pvtltd?igsh=MW1pMXcxbjZnOTY5bA==" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                            <Link href="https://www.linkedin.com/company/tech-x-pvt-ltd/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                    </div>

                    <div className="col-lg-5 col-sm-12 order-lg-1 order-sm-2">
                        <div className="row">
                            <div className="col-lg-7 col-sm-6">
                                <div className="widget">
                                    <h5>Our Services</h5>
                                    <ul>
                                        <li><Link href="/services/power-solutions">Power Solutions</Link></li>
                                        <li><Link href="/services/energy-trading">Energy Trading</Link></li>
                                        <li><Link href="/services/energy-development">Energy Development</Link></li>
                                        <li><Link href="/services/infrastructure">Infrastructure Management</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-5 col-sm-6">
                                <div className="widget">
                                    <h5>Company</h5>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/services">Our Services</Link></li>
                                        <li><Link href="/projects">Projects</Link></li>

                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 order-lg-2 order-sm-1">
                        <div className="widget">
                            <h5>Contact Us</h5>

                            <div className="fw-bold text-white d-flex align-items-center">
                                <i className="icofont-location-pin me-2 id-color"></i><span>Head Office</span>
                            </div>
                            4th Floor Anchor Acrade Block D, Naval Ancourage, Islamabad

                            <div className="spacer-20"></div>

                            <div className="fw-bold text-white d-flex align-items-center">
                                <i className="icofont-phone me-2 id-color"></i><span>Call Us</span>
                            </div>
                            051 6141110

                            <div className="spacer-20"></div>

                            <div className="fw-bold text-white d-flex align-items-center">
                                <i className="icofont-envelope me-2 id-color"></i><span>Email Us</span>
                            </div>
                            ceo@techx.com
                        </div>
                    </div>
                </div>
            </div>

            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    &copy; {new Date().getFullYear()} - TechX Pvt Ltd
                                </div>
                                <ul className="menu-simple">
                                    <li><Link href="#">Terms &amp; Conditions</Link></li>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abs w-50 end-0 bottom-0 op-3">
                <img src="/images/misc/c1.webp" className="w-100 rtl-hide wow fadeInRight" data-wow-duration="2s" alt="" />
            </div>
        </footer>
    );
}
