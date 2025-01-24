import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import EarlyAccess from './pages/Landing/EarlyAccess/EarlyAccess';
import Terms from './pages/Legal/Terms';
import Privacy from './pages/Legal/Privacy';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SEO from './components/SEO/SEO';

// Componente wrapper para actualizar el scroll y el título
const ScrollToTop = ({ children }) => {
    const location = useLocation();
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return children;
};

function AppContent() {
    return (
        <div className="app">
            <SEO 
                title="Smart Contract Management & Payments Platform"
                description="Streamline your contract management and payments with KNTRKT. The all-in-one platform for creative professionals and agencies."
                keywords="contract management, digital payments, freelance contracts, creative professionals, agency management, smart contracts"
            />
            <ScrollToTop>
                <Navbar />
                <Toaster position="top-right" />
                <ToastContainer />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/calculator" element={<Calculator />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/help" element={<HelpCenter />} />
                        <Route path="/early-access" element={<EarlyAccess />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/privacy" element={<Privacy />} />
                    </Routes>
                </div>
            </ScrollToTop>
        </div>
    );
}

function App() {
    return (
        <Router basename="/">
            <AppContent />
        </Router>
    );
}

export default App;
