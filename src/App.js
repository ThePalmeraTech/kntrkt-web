import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './pages/About/About';
import Pricing from './pages/Pricing/Pricing';
// import Blog from './pages/Blog/Blog';
// import BlogPost from './pages/Blog/BlogPost';
import Calculator from './pages/Calculator/Calculator';
// import Community from './pages/Community/Community';
// import Documentation from './pages/Documentation/Documentation';
import Features from './pages/Features/Features';
import HelpCenter from './pages/Help/HelpCenter';
import Landing from './pages/Landing/Landing';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Toaster position="top-right" />
        <ToastContainer />
        <div className="content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/help" element={<HelpCenter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
