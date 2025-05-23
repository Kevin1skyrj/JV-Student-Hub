'use client';
import React, { useState, useEffect } from 'react';

const WhatWeOffer = () => {
    const [animatedFeatures, setAnimatedFeatures] = useState<number[]>([]);

    const offerings = [
        {
            icon: '🎯',
            title: 'Coaching Consultancy',
            desc: 'We guide you to the best institute based on your goals, subject stream, budget, and learning style.'
        },
        {
            icon: '💰',
            title: 'Scholarships & Special Discounts',
            desc: 'We help you apply for scholarships at top institutes with special concessions through our partner network.'
        },
        {
            icon: '👥',
            title: 'Community Access',
            desc: 'City-wise and batch-wise student communities for shared learning, resources, peer Q&A, and motivation.'
        },
        {
            icon: '📚',
            title: 'Book & Module Support',
            desc: 'We provide trusted access to coaching modules, books, and recommended study materials for JEE/NEET/UPSC.'
        },
        {
            icon: '🏠',
            title: 'Hostel & Mess Support',
            desc: 'Get help choosing safe, affordable, and verified hostels and mess services near top coaching zones.'
        },
        {
            icon: '👨‍🏫',
            title: 'Mentorship from Experts',
            desc: 'Connect with ex-IITians, doctors, civil servants, and renowned educators for deep mentorship.'
        },
        {
            icon: '📢',
            title: 'Batch Announcements',
            desc: 'We update you about new batches at major coaching brands so you never miss an opportunity.'
        }
    ];

    useEffect(() => {
        offerings.forEach((_, index) => {
            setTimeout(() => {
                setAnimatedFeatures(prev => [...prev, index]);
            }, index * 150);
        });
    }, []);

    return (
        <section className="offerings-section py-5">
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-lg-11">
                        {/* Header */}
                        <div className="text-center mb-5">
                            {/* <div className="badge-wrapper mb-3">
                <span className="badge custom-badge">
                  🌟 Complete Student Support
                </span>
              </div> */}
                            <h2 className="section-title mb-4">
                                What We <span className="highlight-text">Offer</span>
                            </h2>
                            <p className="section-subtitle mb-4">
                                Comprehensive support services designed to help students achieve their academic goals
                                and make their educational journey smoother.
                            </p>
                        </div>

                        {/* Offerings Grid */}
                        <div className="features-section mb-5">
                            <div className="features-grid">
                                {offerings.map((offer, index) => (
                                    <div
                                        key={index}
                                        className={`feature-card ${animatedFeatures.includes(index) ? 'animate-in' : ''}`}
                                    >
                                        <div className="feature-icon">{offer.icon}</div>
                                        <h5 className="feature-title">{offer.title}</h5>
                                        <p className="feature-desc">{offer.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="cta-section text-center">
                            <div className="cta-card">
                                <h4 className="cta-title">Ready to Get Started?</h4>
                                <p className="cta-text">
                                    Take the first step towards your academic success.
                                    Let us help you find the perfect coaching and support system.
                                </p>
                                <button className="btn btn-cta" onClick={() => window.location.href = '/contact'}>
                                    <span className="btn-text">Schedule Free Consultation</span>
                                    <span className="btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .offerings-section {
          background: linear-gradient(135deg, #f8fffe 0%, #e8f7f2 100%);
          position: relative;
          overflow: hidden;
        }

        .offerings-section::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .offerings-section::after {
          content: '';
          position: absolute;
          bottom: -40%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.04) 0%, transparent 70%);
          border-radius: 50%;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .custom-badge {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 18px;
          box-shadow: 0 4px 15px rgba(7, 161, 105, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          color: rgb(19, 19, 19);
          margin: 2.5rem 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          line-height: 1.2;
        }

        .highlight-text {
          color: #07A169;
        }

        .section-subtitle {
          font-size: 1.5rem;
          color: #666;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 500;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .feature-card {
          background: white;
          padding: 2rem 1.8rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 6px 25px rgba(7, 161, 105, 0.12);
          border: 2px solid transparent;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .feature-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(7, 161, 105, 0.2);
          border-color: #07A169;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 2rem;
          font-weight: 700;
          color: #07A169;
          margin-bottom: 0.8rem;
          line-height: 1.3;
        }

        .feature-desc {
          font-size: 1.4rem;
          color: #666;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        .cta-section {
          margin-top: 4rem;
        }

        .cta-card {
          background: white;
          padding: 3rem 2.5rem;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(7, 161, 105, 0.15);
          border: 1px solid rgba(7, 161, 105, 0.1);
          max-width: 850px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #07A169;
          margin-bottom: 1rem;
        }

        .cta-text {
          font-size: 1.5rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .btn-cta {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          border: none;
          color: white;
          padding: 18px 50px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.3rem;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(7, 161, 105, 0.3);
        }

        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(7, 161, 105, 0.4);
          background: linear-gradient(135deg, #059862 0%, #047d56 100%);
        }

        .btn-text {
          font-size: 18px;
        }

        .btn-icon {
          font-size: 1.4rem;
          animation: shake 2s ease-in-out infinite;
        }

        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-15deg); }
          40% { transform: rotate(15deg); }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.8rem;
          }
          
          .section-subtitle {
            font-size: 1.2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .feature-card {
            padding: 1.8rem 1.5rem;
          }
          
          .feature-title {
            font-size: 1.5rem;
          }
          
          .feature-desc {
            font-size: 1.1rem;
          }
          
          .cta-card {
            padding: 2.5rem 2rem;
          }
          
          .cta-title {
            font-size: 2rem;
          }
          
          .cta-text {
            font-size: 1.1rem;
          }
          
          .btn-cta {
            padding: 15px 40px;
            font-size: 1.2rem;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 2.2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .feature-card {
            padding: 1.5rem 1.2rem;
          }
          
          .feature-icon {
            font-size: 2.5rem;
          }
          
          .feature-title {
            font-size: 1.3rem;
          }
          
          .feature-desc {
            font-size: 1rem;
          }
          
          .cta-card {
            padding: 2rem 1.5rem;
          }
          
          .cta-title {
            font-size: 1.7rem;
          }
          
          .cta-text {
            font-size: 1rem;
          }
        }
      `}</style>
        </section>
    );
};

export default WhatWeOffer;