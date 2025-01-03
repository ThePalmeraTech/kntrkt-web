import React from 'react';
import './Statistics.scss';

const Statistics = () => {
    return (
        <section className="statistics-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="stat-item">
                            <h3>10K+</h3>
                            <p>Contracts Created</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat-item">
                            <h3>$5M+</h3>
                            <p>Payments Processed</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat-item">
                            <h3>95%</h3>
                            <p>Customer Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
