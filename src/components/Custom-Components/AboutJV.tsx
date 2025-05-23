'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const AboutJVSection = () => {
  const [animatedFeatures, setAnimatedFeatures] = useState<number[]>([]);

  const supportFeatures = [
    { icon: '🎯', title: 'Coaching Selection', desc: 'Find the perfect coaching institute for your goals' },
    { icon: '💰', title: 'Exclusive Scholarships', desc: 'Access special scholarship opportunities' },
    { icon: '🏠', title: 'Hostel & Mess', desc: 'Comfortable accommodation solutions' },
    { icon: '👨‍🏫', title: 'Topper Mentorship', desc: 'Learn from successful achievers' },
    { icon: '🤝', title: 'Motivated Community', desc: 'Connect with like-minded aspirants' },
    { icon: '🏆', title: 'Reputed Partnerships', desc: 'Trusted by top institutes & educators' }
  ];

  const examCategories = ['JEE', 'NEET', 'UPSC', 'RAS'];

  useEffect(() => {
    // Animate features one by one
    supportFeatures.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedFeatures(prev => [...prev, index]);
      }, index * 150);
    });
  }, []);

  return (
    <section className="about-jv-section py-5">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-11">
            {/* Header */}
            <div className="text-center mb-5">
              <div className="badge-wrapper mb-3">
                <span className="badge custom-badge">
                  🚀 Mission-Driven Platform
                </span>
              </div>
              <h2 className="section-title mb-4">
                About <span className="down-mark-line">JV Student Hub</span>
              </h2>
              <p className="section-subtitle mb-4">
                A comprehensive student support and empowerment platform by <strong>Jeevijay Technologies</strong>, 
                designed especially for competitive exam aspirants across India.
              </p>
              
              {/* Exam Categories */}
              <div className="exam-badges mb-4">
                {examCategories.map((exam, index) => (
                  <span key={exam} className="exam-badge">
                    {exam}
                  </span>
                ))}
                <span className="exam-badge more-exams">& more!</span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="features-section mb-5">
              <h3 className="features-title text-center mb-5">
                How We Help You Succeed
              </h3>
              <div className="features-grid">
                {supportFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className={`feature-card ${animatedFeatures.includes(index) ? 'animate-in' : ''}`}
                  >
                    <div className="feature-icon">{feature.icon}</div>
                    <h5 className="feature-title">{feature.title}</h5>
                    <p className="feature-desc">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Section */}
            <div className="partnership-section">
              <div className="partnership-card">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h4 className="partnership-title">
                      Open for Collaborations
                    </h4>
                    <p className="partnership-text">
                      We are proud to be connected with India's most reputed institutes and educators. 
                      Join our network through brand collaborations, faculty tie-ups, and affiliate partnerships.
                    </p>
                    <div className="partnership-types">
                      <span className="partnership-type">🤝 Brand Collaborations</span>
                      <span className="partnership-type">👨‍🏫 Faculty Tie-ups</span>
                      <span className="partnership-type">🔗 Affiliate Partnerships</span>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center">
                    <button className="btn btn-partnership" onClick={() => {window.location.href = '/partner-with-us';}}>
                      <span className="btn-text">Partner With Us</span>
                      <span className="btn-icon">🚀</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-jv-section {
          background: linear-gradient(135deg, #f8fffe 0%, #e8f7f2 100%);
          position: relative;
          overflow: hidden;
        }

        .about-jv-section::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }
        .btn-text{
            font-size: 18px;
        }
        .about-jv-section::after {
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
          margin-bottom: 15px;
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
          color:rgb(19, 19, 19);
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.5rem;
          color: #666;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 500;
        }

        .exam-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin: 3rem 0px;
        }

        .exam-label {
          font-size: 1.5rem;
          color: #666;
          font-weight: 600;
          margin-right: 8px;
        }

        .exam-badge {
          background: white;
          color: #07A169;
          padding: 8px 20px;
          border-radius: 25px;
          font-weight: 700;
          font-size: 1.5rem;
          border: 2px solid #07A169;
          transition: all 0.3s ease;
        }

        .exam-badge:hover {
          background: #07A169;
          color: white;
          transform: translateY(-2px);
        }

        .more-exams {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          color: white;
          border-color: #07A169;
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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
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

        .partnership-section {
          margin-top: 4rem;
        }

        .partnership-card {
          background: white;
          padding: 3rem 2.5rem;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(7, 161, 105, 0.15);
          border: 1px solid rgba(7, 161, 105, 0.1);
        }

        .partnership-title {
          font-size: 3rem;
          font-weight: 800;
          color: #07A169;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .partnership-text {
          font-size: 1.65rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .partnership-types {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .partnership-type {
          background: rgba(7, 161, 105, 0.1);
          color:rgb(19, 19, 19);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .btn-partnership {
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

        .btn-partnership:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(7, 161, 105, 0.4);
          background: linear-gradient(135deg, #059862 0%, #047d56 100%);
        }

        .btn-partnership:active {
          transform: translateY(0);
        }

        .btn-icon {
          font-size: 1.4rem;
        }

        @keyframes rocket {
          0%, 90%, 100% { transform: translateY(0) rotate(0deg); }
          10% { transform: translateY(-3px) rotate(10deg); }
          20% { transform: translateY(-2px) rotate(-5deg); }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.8rem;
          }
          
          .section-subtitle {
            font-size: 1.2rem;
          }

          .exam-badges {
            flex-direction: column;
            align-items: center;
          }
          
          .exam-label {
            margin-bottom: 0.5rem;
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
          
          .partnership-card {
            padding: 2.5rem 2rem;
          }
          
          .partnership-title {
            font-size: 1.7rem;
          }
          
          .partnership-text {
            font-size: 1.1rem;
          }
          
          .partnership-types {
            justify-content: center;
          }
          
          .btn-partnership {
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
          
          .partnership-card {
            padding: 2rem 1.5rem;
          }
          
          .partnership-title {
            font-size: 1.5rem;
          }
          
          .partnership-text {
            font-size: 1rem;
          }
          
          .partnership-types {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutJVSection;