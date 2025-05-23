'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '0f8026c3-4107-4df0-ba10-ffd2c4b37a15',
          ...formData
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-us-section py-5">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-11">
            {/* Header */}
            <div className="text-center mb-5">
              <h2 className="section-title mb-4">
                Get in <span className="down-mark-line">Touch</span>
              </h2>
              <p className="section-subtitle">
                Have questions? We&apos;d love to hear from you. Send us a message
                and we&apos;ll respond as soon as possible.
              </p>
            </div>

            <div className="row">
              {/* Contact Information */}
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="contact-info">
                  <div className="info-card mb-4">
                    <div className="icon">📍</div>
                    <h3>Our Location</h3>
                    <p>123 Education Street, Satna, Madhya Pradesh, India</p>
                  </div>
                  <div className="info-card mb-4">
                    <div className="icon">📧</div>
                    <h3>Email Us</h3>
                    <p>support@jvstudenthub.com</p>
                  </div>
                  <div className="info-card mb-4">
                    <div className="icon">📞</div>
                    <h3>Call Us</h3>
                    <p>+91 1234567890</p>
                  </div>
                  <div className="info-card">
                    <div className="icon">⏰</div>
                    <h3>Working Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-7">
                <div className="contact-form-wrapper">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        rows={5}
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    {submitStatus.type && (
                      <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} mb-4`}>
                        {submitStatus.message}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-us-section {
          background: white;
          position: relative;
          overflow: hidden;
        }

        .contact-us-section::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .contact-us-section::after {
          content: '';
          position: absolute;
          bottom: -40%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.04) 0%, transparent 70%);
          border-radius: 50%;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          color: rgb(19, 19, 19);
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.8rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-info {
          padding: 2rem;
        }

        .info-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 6px 25px rgba(7, 161, 105, 0.12);
          border: 2px solid transparent;
          transition: all 0.3s ease;
          margin-bottom: 2rem;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: #07A169;
          box-shadow: 0 12px 35px rgba(7, 161, 105, 0.2);
        }

        .info-card .icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .info-card p {
          font-size: 1.4rem;
          color: #666;
          margin: 0;
        }

        .contact-form-wrapper {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 6px 25px rgba(7, 161, 105, 0.12);
        }

        .form-control {
          height: 55px;
          padding: 0.75rem 1.5rem;
          font-size: 1.4rem;
          border: 2px solid #eee;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          border-color: #07A169;
          box-shadow: 0 0 0 0.2rem rgba(7, 161, 105, 0.25);
        }

        textarea.form-control {
          height: auto;
          min-height: 150px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          color: white;
          padding: 15px 40px;
          font-size: 1.6rem;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(7, 161, 105, 0.3);
        }

        .submit-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.8rem;
          }

          .section-subtitle {
            font-size: 1.4rem;
          }

          .contact-form-wrapper {
            padding: 2rem;
          }

          .info-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 2.2rem;
          }

          .section-subtitle {
            font-size: 1.2rem;
          }

          .contact-form-wrapper {
            padding: 1.5rem;
          }

          .form-control {
            height: 45px;
            font-size: 1.2rem;
          }

          .submit-btn {
            padding: 12px 30px;
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;