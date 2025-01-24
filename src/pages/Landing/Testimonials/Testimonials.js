import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.scss';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

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

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const cardWidth = scrollWidth / testimonials.length;
                const index = Math.round(scrollLeft / cardWidth);
                setActiveIndex(index);
            }
        };

        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            return () => scrollContainer.removeEventListener('scroll', handleScroll);
        }
    }, [testimonials.length]);

    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.scrollWidth / testimonials.length;
            scrollRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    return (
        <section className="testimonials-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                What Our Users Say
            </motion.h2>
            
            <div className="testimonials-container" ref={scrollRef}>
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        className="testimonial-card"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
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
                    </motion.div>
                ))}
            </div>

            <div className="scroll-indicator">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`scroll-dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
