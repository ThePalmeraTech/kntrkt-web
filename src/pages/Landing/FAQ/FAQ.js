import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.scss';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const faqs = [
        {
            question: "Is Kntrkt really as cool as it sounds?",
            answer: "No, it's cooler. We're like the James Dean of contract management, bringing style to the business side of creativity."
        },
        {
            question: "How secure are my contracts and payments?",
            answer: "Bank-level encryption and security protocols protect your data. We take security seriously, so you can focus on being creative."
        },
        {
            question: "Can I customize my contracts?",
            answer: "Absolutely! Our smart templates are fully customizable. Add your brand, adjust terms, and make them uniquely yours."
        },
        {
            question: "What payment methods do you support?",
            answer: "We support all major credit cards, bank transfers, and popular digital payment methods. International payments? No problem!"
        },
        {
            question: "Do you offer a free trial?",
            answer: "Yes! Start with our 14-day free trial. No credit card required. Experience the full power of Kntrkt risk-free."
        },
        {
            question: "Can I integrate Kntrkt with my existing tools?",
            answer: "We play nice with others! Integrate with popular accounting, project management, and CRM tools."
        },
        {
            question: "What makes Kntrkt different?",
            answer: "We're built specifically for creatives, combining beautiful design with powerful features. Plus, our support team actually gets what you do."
        },
        {
            question: "Is there a limit to how many contracts I can create?",
            answer: "Depends on your plan! Our Pro and Enterprise plans offer unlimited contracts, while our Starter plan includes 10 contracts per month."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <motion.div 
                    className="faq-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know about Kntrkt</p>
                </motion.div>
                
                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <motion.div
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
