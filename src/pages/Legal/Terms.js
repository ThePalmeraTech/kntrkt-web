import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Landing/Footer/Footer';
import './Legal.scss';

const Terms = () => {
    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Terms and Conditions</h1>
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
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            By accessing and using Kntrkt's services, you agree to be bound by these Terms and Conditions. 
                            If you disagree with any part of these terms, you may not access our services.
                        </p>

                        <h2>2. Use of Service</h2>
                        <p>
                            Our platform provides contract management and payment processing services. Users must:
                        </p>
                        <ul>
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the security of their account</li>
                            <li>Comply with all applicable laws and regulations</li>
                            <li>Use the service for legitimate business purposes only</li>
                        </ul>

                        <h2>3. User Accounts</h2>
                        <p>
                            You are responsible for safeguarding your account credentials and for any activities 
                            or actions under your account.
                        </p>

                        <h2>4. Payments and Fees</h2>
                        <p>
                            Users agree to pay all fees associated with their chosen service plan. 
                            Payment processing is handled securely through our payment partners.
                        </p>

                        <h2>5. Intellectual Property</h2>
                        <p>
                            The service and its original content, features, and functionality are owned by 
                            Kntrkt and are protected by international copyright, trademark, and other laws.
                        </p>

                        <h2>6. Limitation of Liability</h2>
                        <p>
                            Kntrkt shall not be liable for any indirect, incidental, special, consequential, 
                            or punitive damages resulting from your use of our services.
                        </p>

                        <h2>7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will notify users 
                            of any material changes via email or through our platform.
                        </p>

                        <h2>8. Contact Information</h2>
                        <p>
                            For any questions about these Terms and Conditions, please contact us at:
                            <br />
                            <a href="mailto:legal@kntrkt.com">legal@kntrkt.com</a>
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms; 