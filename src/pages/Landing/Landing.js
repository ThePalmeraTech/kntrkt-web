import React from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Statistics from './Statistics/Statistics';
import LandingCalculator from './Calculator/LandingCalculator';
import Testimonials from './Testimonials/Testimonials';
import FAQ from './FAQ/FAQ';
import CallToAction from './CallToAction/CallToAction';
import Footer from './Footer/Footer';
import './Landing.scss';

function Landing() {
  return (
    <div className="landing">
      <Hero />
      <Features />
      <LandingCalculator />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Landing;
