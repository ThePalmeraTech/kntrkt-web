import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.scss';

const Footer = () => {
    const footerLinks = {
        product: [
            { name: 'Features', path: '/features' },
            { name: 'Calculator', path: '/calculator' },
            // { name: 'Pricing', path: '/pricing' }, // Temporalmente oculto
            { name: 'Early Access', path: '/early-access' },
        ],
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Help', path: '/help' },
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms & Conditions', path: '/terms' }
        ]
    };

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <span className="logo-text">
                                <span className="logo-k">K</span>NTRKT
                                <span className="logo-dot">.</span>
                            </span>
                        </Link>
                        <p>Empowering creatives with smart contract and payment solutions.</p>
                        <div className="social-links">
                            {['twitter', 'linkedin'].map(platform => (
                                <a key={platform} href={`https://${platform}.com/kntrkt`} target="_blank" rel="noopener noreferrer">
                                    <i className={`fab fa-${platform}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="footer-links">
                            <h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5>
                            <ul>
                                {links.map(link => (
                                    <motion.li 
                                        key={link.name}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link to={link.path}>{link.name}</Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                    <div className="newsletter">
                        <h5>Subscribe to our newsletter</h5>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                    <div className="copyright">
                        <p>&copy; {new Date().getFullYear()} KNTRKT. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 