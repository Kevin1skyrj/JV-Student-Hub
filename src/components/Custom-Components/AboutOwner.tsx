'use client';
import React from 'react';
import Image from 'next/image';

const AboutOwner = () => {
  const milestones = [
    { year: '2020', title: 'Journey Begins', location: 'Bangalore', desc: 'Started with a vision to transform student support' },
    { year: '2021', title: 'First Expansion', location: 'Kota', desc: 'Established presence in India\'s coaching capital' },
    { year: '2022', title: 'Growing Impact', location: 'Bhopal & Jabalpur', desc: 'Extended reach to more educational hubs' },
    { year: '2023', title: 'Going National', location: 'Pan India', desc: 'Expanding services across the country' }
  ];

  return (
    <section className="about-owner-section py-5">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-11">
            {/* Header */}
            <div className="text-center mb-5">
              {/* <div className="badge-wrapper mb-3">
                <span className="badge custom-badge">
                  👨‍💼 Meet Our Founder
                </span>
              </div> */}
              <h2 className="section-title mb-4">
                About the <span className="down-mark-line">Founder</span>
              </h2>
            </div>

            {/* Founder Profile */}
            <div className="founder-profile mb-5">
              <div className="row align-items-center">
                <div className="col-lg-4 text-center mb-4 mb-lg-0">
                  <div className="founder-image-wrapper">
                    <div className="founder-image">
                      {/* Replace with actual image path */}
                      <Image 
                        src="/assets/images/founders/1.png" 
                        alt="Vikas Patel - Founder of JV Student Hub"
                        width={300}
                        height={300}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="founder-designation">
                      <h3 className="founder-name">Vikas Patel</h3>
                      <p className="founder-title">Founder & CEO, Jeevijay Technologies</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="founder-story">
                    <p className="story-text">
                      A visionary entrepreneur from Satna, Madhya Pradesh, who believes that every student 
                      deserves access, opportunity, and support to build a bright future.
                    </p>
                    <p className="story-text">
                      Vikas started his journey in Bangalore in 2020 with a vision to bridge the gap between 
                      students and the support systems they need — coaching, mentorship, career guidance, 
                      branding, and more. He has built Jeevijay Technologies into a trusted multi-city brand with a 
                      strong presence in Kota, Bhopal, Jabalpur, and now expanding nationwide.
                    </p>
                    <p className="story-highlight">
                      His mission with JV Student Hub is to make it India's most student-friendly, accessible, 
                      and impactful platform — completely free of cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="journey-timeline">
              <h3 className="timeline-title text-center mb-5">Our Growth Journey</h3>
              <div className="timeline-grid">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-card">
                    <div className="year-badge">{milestone.year}</div>
                    <h4 className="milestone-title">{milestone.title}</h4>
                    <div className="location-badge">
                      📍 {milestone.location}
                    </div>
                    <p className="milestone-desc">{milestone.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-owner-section {
          background: white;
          position: relative;
          overflow: hidden;
        }

        .about-owner-section::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .about-owner-section::after {
          content: '';
          position: absolute;
          bottom: -40%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.04) 0%, transparent 70%);
          border-radius: 50%;
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
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          line-height: 1.2;
        }

        .highlight-text {
          color: #07A169;
        }

        .founder-image-wrapper {
          position: relative;
          margin-bottom: 2rem;
        }

        .founder-image {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
          border: 4px solid #07A169;
          border-radius: 50%;
          padding: 8px;
          background: white;
          box-shadow: 0 10px 30px rgba(7, 161, 105, 0.2);
        }

        .founder-designation {
          margin-top: 1.5rem;
          text-align: center;
        }

        .founder-name {
          font-size: 3rem;
          font-weight: 700;
          color: #07A169;
          margin-bottom: 0.5rem;
        }

        .founder-title {
          font-size: 1.5rem;
          color: #666;
          font-weight: 500;
        }

        .story-text {
          font-size: 1.6rem;
          color: #444;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .story-highlight {
          font-size: 1.8rem;
          color: #07A169;
          line-height: 1.6;
          font-weight: 600;
          padding: 1.5rem;
          border-left: 4px solid #07A169;
          background: rgba(7, 161, 105, 0.05);
          border-radius: 0 15px 15px 0;
        }

        .timeline-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: rgb(19, 19, 19);
          margin: 4rem 0 2rem;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }

        .timeline-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 6px 25px rgba(7, 161, 105, 0.12);
          border: 2px solid transparent;
          transition: all 0.3s ease;
          text-align: center;
        }

        .timeline-card:hover {
          transform: translateY(-8px);
          border-color: #07A169;
          box-shadow: 0 12px 35px rgba(7, 161, 105, 0.2);
        }

        .year-badge {
          background: #07A169;
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          padding: 8px 20px;
          border-radius: 25px;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .milestone-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1rem;
        }

        .location-badge {
          background: rgba(7, 161, 105, 0.1);
          color: #07A169;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .milestone-desc {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.8rem;
          }

          .founder-image {
            width: 250px;
            height: 250px;
          }

          .story-text {
            font-size: 1.2rem;
          }

          .story-highlight {
            font-size: 1.4rem;
          }

          .timeline-title {
            font-size: 2rem;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
          }

          .timeline-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 2.2rem;
          }

          .founder-image {
            width: 200px;
            height: 200px;
          }

          .founder-name {
            font-size: 2rem;
          }

          .story-text {
            font-size: 1.1rem;
          }

          .story-highlight {
            font-size: 1.2rem;
            padding: 1rem;
          }

          .timeline-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutOwner;