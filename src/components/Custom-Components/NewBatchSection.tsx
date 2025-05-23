'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const NewBatchesSection = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  const coachingInstitutes = [
    'Allen', 'Bansal', 'Motion', 'Physics Wallah', 'Learn N Prep', 'E-Saral'
  ];

  useEffect(() => {
    // Animate items one by one
    coachingInstitutes.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="new-batches-section py-5">
      <div className="container">
        <div className="row justify-content-center mt-lg-5">
          <div className="col-lg-10 ">
            {/* Header */}
            <div className="text-center mb-5">
              <div className="badge-wrapper mb-3">
                <span className="badge custom-badge">
                  🚀 Limited Seats Available
                </span>
              </div>
              <h2 className="section-title my-5">
                New Batches <span className="down-mark-line"> Starting Soon!</span>
              </h2>
              <p className="section-subtitle">
                Get ready for fresh batch intakes at top coaching institutes! 
                We are helping students connect with upcoming batches.
              </p>
            </div>

            {/* Coaching Institutes Grid */}
            <div className="institutes-grid mb-5">
              {coachingInstitutes.map((institute, index) => (
                <div 
                  key={institute}
                  className={`institute-card ${animatedItems.includes(index) ? 'animate-in' : ''}`}
                >
                  <div className="check-icon">✅</div>
                  <span className="institute-name">{institute}</span>
                </div>
              ))}
              <div className="institute-card more-card">
                <div className="check-icon">✅</div>
                <span className="institute-name">& more!</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section text-center">
              <div className="cta-card">
                <h4 className="cta-title mb-3">
                  Find Your Perfect Coaching & Batch!
                </h4>
                <p className="cta-text mb-4">
                  Book your free counselling session now and get personalized guidance 
                  to choose the right coaching institute and batch timing for your success.
                </p>
                <button className="btn btn-cta btn-lg">
                  <span className="btn-text ">Book Free Counselling</span>
                  <span className="btn-icon">📞</span>
                </button>
                <div className="mt-3">
                  <small className="text-muted">
                    💯 100% Free • No Hidden Charges • Expert Guidance
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .new-batches-section {
          background: white;
          position: relative;
          overflow: hidden;
        }

        .new-batches-section::before {
          content: '';
          position: absolute;
          top: -60%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.05) 0%, transparent 70%);
          border-radius: 50%;
        }
        .btn-text{
            font-size: 16px;
        }
        .new-batches-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.08) 0%, transparent 70%);
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
          font-size: 16px;
          box-shadow: 0 4px 15px rgba(7, 161, 105, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .section-title {
          font-size: 3.5rem;
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
          max-width: 700px;
          margin: 0 auto;
          font-weight: 500;
        }

        .institutes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          max-width: 120rem;
          margin: 0 auto;
        }

        .institute-card {
          background: white;
          padding: 1.8rem 2rem;
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 20px rgba(7, 161, 105, 0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }

        .institute-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .institute-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(7, 161, 105, 0.2);
          border-color: #07A169;
        }

        .check-icon {
          font-size: 1.6rem;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
        }

        .institute-name {
          font-weight: 700;
          color: #333;
          font-size: 1.75rem;
        }

        .more-card {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          color: white;
          opacity: 1 !important;
          transform: none !important;
        }

        .more-card .institute-name {
          color: white;
        }

        .cta-section {
          margin-top: 3rem;
        }

        .cta-card {
          background: white;
          padding: 3rem 2.5rem;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(7, 161, 105, 0.15);
          border: 1px solid rgba(7, 161, 105, 0.1);
          max-width: 1000px;
          margin: 0 auto;
        }

        .cta-title {
          color: #07A169;
          font-weight: 800;
          font-size: 3rem;
          line-height: 1.3;
        }

        .cta-text {
          color: #666;
          line-height: 1.6;
          font-size: 1.5rem;
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

        .btn-cta:active {
          transform: translateY(0);
        }

        .btn-icon {
          font-size: 1.2rem;
          animation: ring 3s infinite;
        }

        @keyframes ring {
          0%, 90%, 100% { transform: rotate(0deg); }
          5%, 15% { transform: rotate(-15deg); }
          10% { transform: rotate(15deg); }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.8rem;
          }
          
          .section-subtitle {
            font-size: 1.2rem;
          }
          
          .institutes-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .institute-card {
            padding: 1.5rem 1.8rem;
          }
          
          .institute-name {
            font-size: 1.2rem;
          }
          
          .cta-card {
            padding: 2.5rem 2rem;
          }
          
          .cta-title {
            font-size: 1.7rem;
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
          
          .cta-card {
            padding: 2rem 1.5rem;
          }
          
          .cta-title {
            font-size: 1.5rem;
          }
          
          .cta-text {
            font-size: 1rem;
          }
          
          .institute-card {
            padding: 1.3rem 1.5rem;
          }
          
          .institute-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default NewBatchesSection;