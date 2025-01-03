import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Landing/Footer/Footer';
import './Legal.scss';

const Privacy = () => {
    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Privacy Policy</h1>
                        <p className="lead">Last updated: March 2024</p>
                    </motion.div>
                </div>
            </section>

            <section className="legal-content">
                <div className="container">
                    <motion.div
                        className="content-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>1. Information We Collect</h2>
                        <p>
                            We collect information that you provide directly to us, including:
                        </p>
                        <ul>
                            <li>Personal identification information</li>
                            <li>Contact information</li>
                            <li>Payment details</li>
                            <li>Usage data and preferences</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>
                            We use the collected information for:
                        </p>
                        <ul>
                            <li>Providing and maintaining our services</li>
                            <li>Processing payments</li>
                            <li>Communicating with you</li>
                            <li>Improving our services</li>
                            <li>Complying with legal obligations</li>
                        </ul>

                        <h2>3. Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information. 
                            However, no method of transmission over the internet is 100% secure.
                        </p>

                        <h2>4. Data Sharing</h2>
                        <p>
                            We may share your information with:
                        </p>
                        <ul>
                            <li>Service providers and business partners</li>
                            <li>Legal authorities when required by law</li>
                            <li>Other parties with your consent</li>
                        </ul>

                        <h2>5. Your Rights</h2>
                        <p>
                            You have the right to:
                        </p>
                        <ul>
                            <li>Access your personal data</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to data processing</li>
                        </ul>

                        <h2>6. Cookies Policy</h2>
                        <p>
                            We use cookies and similar tracking technologies to improve user experience 
                            and collect usage data.
                        </p>

                        <h2>7. Changes to Privacy Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. We will notify you of any 
                            changes by posting the new policy on this page.
                        </p>

                        <h2>8. Contact Us</h2>
                        <p>
                            For any questions about this Privacy Policy, please contact us at:
                            <br />
                            <a href="mailto:privacy@kntrkt.com">privacy@kntrkt.com</a>
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Privacy; 