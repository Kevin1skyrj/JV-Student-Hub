'use client';
import React, { useState, useEffect } from 'react';

const PartnerWithUs = () => {
  const [animatedFeatures, setAnimatedFeatures] = useState<number[]>([]);

  const partnershipTypes = [
    { 
      icon: '🤝', 
      title: 'Brand Collaborations', 
      desc: 'Partner with us to expand your reach and impact in the education sector' 
    },
    { 
      icon: '👨‍🏫', 
      title: 'Faculty Tie-ups', 
      desc: 'Join our network of expert educators and mentors' 
    },
    { 
      icon: '🔗', 
      title: 'Affiliate Programs', 
      desc: 'Grow together through our affiliate partnership opportunities' 
    },
    { 
      icon: '🏫', 
      title: 'Institute Partnerships', 
      desc: 'Connect your institute with students across India' 
    },
    { 
      icon: '📱', 
      title: 'Digital Integration', 
      desc: 'Integrate your services with our platform' 
    },
    { 
      icon: '🎯', 
      title: 'Strategic Alliances', 
      desc: 'Form long-term strategic partnerships for mutual growth' 
    }
  ];

  useEffect(() => {
    partnershipTypes.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedFeatures(prev => [...prev, index]);
      }, index * 150);
    });
  }, []);

  return (
    <section className="partner-section py-5">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-11">
            {/* Header */}
            <div className="text-center mb-5">
              <div className="badge-wrapper mb-3">
                <span className="badge custom-badge">
                  🚀 Growth Together
                </span>
              </div>
              <h2 className="section-title mb-4">
                Partner With <span className="down-mark-line">JV Student Hub</span>
              </h2>
              <p className="section-subtitle mb-4">
                Join hands with India's growing student support platform. 
                Let's work together to empower students and transform education.
              </p>
            </div>

            {/* Partnership Types Grid */}
            <div className="features-section mb-5">
              <h3 className="features-title text-center mb-5">
                Partnership Opportunities
              </h3>
              <div className="features-grid">
                {partnershipTypes.map((type, index) => (
                  <div 
                    key={index}
                    className={`feature-card ${animatedFeatures.includes(index) ? 'animate-in' : ''}`}
                  >
                    <div className="feature-icon">{type.icon}</div>
                    <h5 className="feature-title">{type.title}</h5>
                    <p className="feature-desc">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="contact-section">
              <div className="contact-card">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h4 className="contact-title">
                      Let's Discuss Your Partnership
                    </h4>
                    <p className="contact-text">
                      Ready to explore partnership opportunities? Our team is here to discuss 
                      how we can create value together and make education more accessible.
                    </p>
                    <div className="contact-benefits">
                      <span className="benefit-tag">📈 Expand Your Reach</span>
                      <span className="benefit-tag">🎯 Target Right Audience</span>
                      <span className="benefit-tag">💡 Innovative Solutions</span>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center">
                    <button className="btn btn-contact" onClick={() => window.location.href = '/contact'}>
                      <span className="btn-text">Contact Us Today</span>
                      <span className="btn-icon">📧</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partner-section {
          background: linear-gradient(135deg, #f8fffe 0%, #e8f7f2 100%);
          position: relative;
          overflow: hidden;
        }

        .btn-text{
            font-size: 18px;
        }

        .partner-section::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .partner-section::after {
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

        .features-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: rgb(19, 19, 19);
          margin-bottom: 2rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
          font-size: 1.5rem;
          color: #666;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        .contact-section {
          margin-top: 4rem;
        }

        .contact-card {
          background: white;
          padding: 3rem 2.5rem;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(7, 161, 105, 0.15);
          border: 1px solid rgba(7, 161, 105, 0.1);
        }

        .contact-title {
          font-size: 3rem;
          font-weight: 800;
          color: #07A169;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .contact-text {
          font-size: 1.65rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .contact-benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .benefit-tag {
          background: rgba(7, 161, 105, 0.1);
          color: rgb(19, 19, 19);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .btn-contact {
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

        .btn-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(7, 161, 105, 0.4);
          background: linear-gradient(135deg, #059862 0%, #047d56 100%);
        }

        .btn-contact:active {
          transform: translateY(0);
        }

        .btn-icon {
          font-size: 2rem;
        //   animation: float 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.8rem;
          }
          
          .section-subtitle {
            font-size: 1.2rem;
          }
          
          .features-title {
            font-size: 1.9rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          
          .feature-card {
            padding: 1.8rem 1.5rem;
          }
          
          .feature-title {
            font-size: 1.3rem;
          }
          
          .feature-desc {
            font-size: 1rem;
          }
          
          .contact-card {
            padding: 2.5rem 2rem;
          }
          
          .contact-title {
            font-size: 1.7rem;
          }
          
          .contact-text {
            font-size: 1.1rem;
          }
          
          .contact-benefits {
            justify-content: center;
          }
          
          .btn-contact {
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
          
          .features-title {
            font-size: 1.7rem;
          }
          
          .feature-card {
            padding: 1.5rem 1.2rem;
          }
          
          .feature-icon {
            font-size: 2.5rem;
          }
          
          .feature-title {
            font-size: 1.2rem;
          }
          
          .contact-card {
            padding: 2rem 1.5rem;
          }
          
          .contact-title {
            font-size: 1.5rem;
          }
          
          .contact-text {
            font-size: 1rem;
          }
          
          .contact-benefits {
            flex-direction: column;
            align-items: center;
          }

          .benefit-tag {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnerWithUs;