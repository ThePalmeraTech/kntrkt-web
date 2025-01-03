import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.scss';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Kntrkt made me feel like a financial wizard. Managing contracts has never been this seamless and professional.",
            author: "Rashida Thomas",
            position: "Freelance Designer",
            avatar: "https://placehold.co/96x96?text=RT"
        },
        {
            quote: "I used to dread contracts. Now I draft them while waiting for my coffee. It's revolutionized my workflow!",
            author: "Michael van Berger",
            position: "Copywriter Extraordinaire",
            avatar: "https://placehold.co/96x96?text=MB"
        },
        {
            quote: "Thanks to Kntrkt, I now have more time to perfect my craft. The automated systems are a game-changer.",
            author: "Paulina Velez",
            position: "Multimedia Artist",
            avatar: "https://placehold.co/96x96?text=PV"
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    What Our Users Say
                </motion.h2>
                <div className="testimonials-container">
                    <div className="row">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                className="col-md-4"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="testimonial-card">
                                    <p className="quote">{testimonial.quote}</p>
                                    <div className="author-info">
                                        <div className="author-avatar">
                                            <img src={testimonial.avatar} alt={testimonial.author} />
                                        </div>
                                        <div className="author-details">
                                            <div className="author">{testimonial.author}</div>
                                            <div className="position">{testimonial.position}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
