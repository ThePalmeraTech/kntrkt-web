import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
    const siteName = "KNTRKT";
    const location = useLocation();
    
    useEffect(() => {
        // Forzar actualización del título cuando cambia la ruta
        document.title = title ? `${title} | ${siteName}` : siteName;
    }, [title, location.pathname]);

    return (
        <Helmet>
            <title>{title ? `${title} | ${siteName}` : siteName}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={window.location.href} />
            <link rel="canonical" href={window.location.href} />
            {/* Forzar actualización */}
            <meta key="timestamp" name="timestamp" content={new Date().getTime()} />
        </Helmet>
    );
};

export default SEO; 