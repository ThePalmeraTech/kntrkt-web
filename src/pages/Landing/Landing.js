import React from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Statistics from './Statistics/Statistics';
import LandingCalculator from './Calculator/LandingCalculator';
import Testimonials from './Testimonials/Testimonials';
import FAQ from './FAQ/FAQ';
import CallToAction from './CallToAction/CallToAction';
import Footer from './Footer/Footer';
import SEO from '../../components/SEO/SEO';
import './Landing.scss';

const Landing = () => {
  return (
    <>
      <SEO 
        title="Welcome to KNTRKT"
        description="Transform your contract management and payment processes with KNTRKT's innovative platform for creative professionals."
        keywords="contract management, payment automation, digital contracts, freelance tools, creative professionals"
      />
      <div className="landing-page">
        <Hero />
        <Features />
        <LandingCalculator />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
