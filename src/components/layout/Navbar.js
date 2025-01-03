import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Features', path: '/features' },
        { name: 'Calculator', path: '/calculator' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About us', path: '/about' },
      //  { name: 'Blog', path: '/blog' },
        { name: 'Help', path: '/help' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-brand">
                        <img src="/logo.svg" alt="Kntrkt" className="logo" />
                    </Link>

                    <button 
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.name}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link 
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ''}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                      
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;