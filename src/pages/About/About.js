import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Landing/Footer/Footer';
import './About.scss';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';

const About = () => {
    const team = [
        {
            name: 'Julio Luque',
            position: 'CEO',
            image: 'https://placehold.co/400x400?text=JL',
            bio: 'Leading Kntrkt\'s vision to revolutionize contract management and payments for creative professionals.',
            linkedin: '#'
        },
        {
            name: 'Hanaley Mosley',
            position: 'CTO',
            image: 'https://placehold.co/400x400?text=HM',
            bio: 'Driving technological innovation and building the future of secure digital contracts.',
            linkedin: '#'
        },
        {
            name: 'Teo Irrisari',
            position: 'CIO',
            image: 'https://placehold.co/400x400?text=TI',
            bio: 'Ensuring data integrity and implementing robust information systems.',
            linkedin: '#'
        },
        {
            name: 'Sussane Büchner',
            position: 'Head of Communications',
            image: 'https://placehold.co/400x400?text=SH',
            bio: 'Crafting Kntrkt\'s narrative and building meaningful relationships with our community.',
            linkedin: '#'
        }
    ];

    return (
        <>
            <SEO 
                title="About Us - Our Mission & Vision"
                description="Learn about KNTRKT's mission to revolutionize contract management and payments for creative professionals. Meet our team of innovators."
                keywords="KNTRKT team, contract management platform, creative industry solutions, digital payment innovation, about us"
            />
            <div className="about-page">
                <section className="about-hero">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1>KNTRKT Mission Statement</h1>
                            <p className="lead">
                                KNTRKT simplifies contracts, payments, and workflows, freeing you to focus on growth and success.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="about-mission">
                    <div className="container">
                        <div className="row align-items-center">
                            <motion.div 
                                className="col-lg-6"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2>Our Mission</h2>
                                <p className="mission-text">
                                    At KNTRKT, our mission is to empower professionals across industries 
                                    to focus on their passion and creativity by eliminating the burdens 
                                    of administrative work. We provide intuitive tools that simplify 
                                    contract management, streamline payments, and optimize workflows—all 
                                    in one seamless platform.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="col-lg-6"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <img 
                                    src="https://placehold.co/600x400?text=Our+Mission" 
                                    alt="KNTRKT Mission"
                                    className="img-fluid rounded-4 shadow-lg"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="team-section">
                    <div className="container">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Meet Our Team
                        </motion.h2>
                        <div className="row g-4">
                            {team.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    className="col-md-6 col-lg-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="team-card">
                                        <div className="member-image">
                                            <img src={member.image} alt={member.name} />
                                        </div>
                                        <div className="member-info">
                                            <h3>{member.name}</h3>
                                            <span className="position">{member.position}</span>
                                            <p>{member.bio}</p>
                                            <a href={member.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="values-section">
                    <div className="container">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Our Values
                        </motion.h2>
                        <div className="row g-4">
                            <motion.div 
                                className="col-md-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="value-card">
                                    <i className="fas fa-shield-alt"></i>
                                    <h3>Trust & Security</h3>
                                    <p>We prioritize the security of your contracts and payments above all else.</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="col-md-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="value-card">
                                    <i className="fas fa-lightbulb"></i>
                                    <h3>Innovation</h3>
                                    <p>Continuously improving our platform to better serve creative professionals.</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="col-md-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="value-card">
                                    <i className="fas fa-users"></i>
                                    <h3>Community First</h3>
                                    <p>Building solutions that truly serve the needs of our creative community.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="about-cta">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Join Our Growing Community</h2>
                            <p>Be part of the future of contract management and secure payments.</p>
                            <div className="cta-buttons">
                                <Link to="/register" className="btn btn-light btn-lg">
                                    Join Early Access
                                </Link>
                                <Link to="/contact" className="btn btn-outline-light btn-lg">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="about-quote">
                    <div className="container">
                        <motion.div 
                            className="quote-container"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="quote-content">
                                <blockquote>
                                    "Our goal was to transform the way individuals and teams work, offering solutions that save time, reduce stress, and promote growth. We built KNTRKT to enable smarter, faster, and more efficient management of essential tasks, so our users can thrive in what they do best"
                                </blockquote>
                                <div className="quote-author">
                                    <h4>Teo Irrisari</h4>
                                    <span className="position">CIO</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default About; 