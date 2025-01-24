import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Features', path: '/features' },
        { name: 'Calculator', path: '/calculator' },
        // { name: 'Pricing', path: '/pricing' }, // Comentado temporalmente
        { name: 'About us', path: '/about' },
        { name: 'Help', path: '/help' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Manejar el scroll del body cuando el menú está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    // Cerrar el menú cuando cambia la ruta
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-brand">
                        <span className="logo-text">
                            <span className="logo-k">K</span>NTRKT
                            <span className="logo-dot">.</span>
                        </span>
                    </Link>

                    <div className="navbar-right">
                        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                            <div className="mobile-menu-header">
                                <Link to="/" className="navbar-brand" onClick={() => setIsMobileMenuOpen(false)}>
                                    <span className="logo-text">
                                        <span className="logo-k">K</span>NTRKT
                                        <span className="logo-dot">.</span>
                                    </span>
                                </Link>
                            </div>
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name}
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ''}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/early-access" className="btn btn-primary">
                                Join Early Access
                            </Link>
                        </div>

                        <button 
                            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;