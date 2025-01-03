import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav 
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <h1 className="brand-text">
                        <span className="brand-highlight">K</span>NTRKT
                    </h1>
                </Link>
                
                <div className="nav-links">
                    {['Features', 'Pricing', 'About Us', 'Contact US'].map((item) => (
                        <motion.div 
                            key={item}
                            className="nav-link-wrapper"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                        </motion.div>
                    ))}
                </div>

                <div className="nav-auth">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link to="/login" className="btn btn-link">Login</Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link to="/register" className="btn btn-primary">Start Free</Link>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar; 