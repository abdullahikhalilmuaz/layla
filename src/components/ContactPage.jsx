import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/contact.css';

// Import images
import logo from "../../public/thirty.jpg";
import contactHero from "../../public/twentyeight.jpg";
import contactImage from "../../public/twentyseven.jpg";
import hoursImage from "../../public/twentythree.jpg";
import mapImage from "../../public/twentyfour.jpg";
import location from "../../public/location.png"

const ContactPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are your delivery hours?",
      answer: "We deliver from 11:00 AM to 10:00 PM, Monday through Sunday. Last orders are taken at 9:30 PM."
    },
    {
      question: "Do you cater for events?",
      answer: "No! But we Deliver all Event Food Supplies in time."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash on delivery, bank transfers, and all major payment apps including OPay and Moniepoint."
    },
  ];

  return (
    <div className="contact-wrapper">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Layla's Kitchen" />
            LAYLA'S<span>KITCHEN</span>
          </Link>

          <div className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" className="active-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/products" className="reserve-btn" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header 
        className="page-header"
        style={{
          background: `linear-gradient(rgba(44,24,16,0.85), rgba(44,24,16,0.85)), url(${contactHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="page-title">
          Contact <span>Us</span>
        </h1>
        <div className="page-breadcrumb">
          <Link to="/">Home</Link> / <span>Contact</span>
        </div>
      </header>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-header">
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="section-title">We'd Love to <span>Hear From You</span></h2>
          <p className="section-description">
            Have a question, feedback, or just want to say hello? Reach out to us through any of these channels.
          </p>
        </div>

        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Unwala<br />KTIT, Katsina, Nigeria</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <a href="tel:+2347075607597">+234 707 560 7597</a>
            <p style={{ marginTop: '0.5rem', color: 'var(--primary)' }}>Available 11am - 10pm</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email Us</h3>
            <a href="mailto:zainababubakar021@gmail.com">zainababubakar021@gmail.com</a>
            <p style={{ marginTop: '0.5rem', color: 'var(--primary)' }}>24/7 Support</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>WhatsApp</h3>
            <a 
              href="https://wa.me/2347075607597?text=Hello%20Layla's%20Kitchen%2C%20I'd%20like%20to%20make%20an%20inquiry" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              +234 707 560 7597
            </a>
            <p style={{ marginTop: '0.5rem', color: 'var(--primary)' }}>Quickest Response</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-image">
            <img src={contactImage} alt="Contact Layla's Kitchen" />
            <div className="form-image-content">
              <h3>We're Here to Help</h3>
              <p>
                Whether you have a question about our menu, want to place a large order, 
                or just want to share your dining experience, we're all ears!
              </p>
            </div>
          </div>
          
          <div className="form-content">
            <h2>Send Us a <span>Message</span></h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            
            {submitSuccess && (
              <div className="success-message">
                Thank you for reaching out! We'll respond to your message shortly.
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label>Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Reservation">Reservation</option>
                  <option value="Catering">Catering</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group full-width">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && ' →'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">FIND US</span>
          <h2 className="section-title">Our <span>Location</span></h2>
        </div>
        
        <div className="map-container">
          <img
            src={location}
            allowFullScreen=""
            style={{width:"100%", alignSelf:"center"}}
          />
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="hours-section">
        <div className="hours-container">
          <div className="hours-content">
            <span className="section-tag">WHEN TO VISIT</span>
            <h2>Opening <span>Hours</span></h2>
            <p>
              We're open 7 days a week to serve you the best Nigerian cuisine. 
              Come join us for breakfast, lunch, or dinner!
            </p>
            
            <div className="hours-grid">
              <div className="hours-item">
                <span className="hours-day">Monday - Friday</span>
                <span className="hours-time">11:00 AM - 10:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Saturday</span>
                <span className="hours-time">12:00 PM - 11:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Sunday</span>
                <span className="hours-time">12:00 PM - 9:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Public Holidays</span>
                <span className="hours-time">12:00 PM - 8:00 PM</span>
              </div>
              <div className="hours-item" style={{ background: 'var(--primary-light)' }}>
                <span className="hours-day">Kitchen Closes</span>
                <span className="hours-time">30 mins before closing</span>
              </div>
            </div>
          </div>
          
          <div className="hours-image">
            <img src={hoursImage} alt="Layla's Kitchen Interior" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          <p className="section-description">
            Got questions? We've got answers! Here are some of the most common inquiries.
          </p>
        </div>

        <div className="faq-grid">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h4>{faq.question}</h4>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="section-header">
          <span className="section-tag">CONNECT WITH US</span>
          <h2 className="section-title">Follow Us on <span>Social Media</span></h2>
          <p className="section-description">
            Stay updated with our latest dishes, promotions, and events!
          </p>
        </div>

        <div className="social-grid">
          <a href="#" className="social-item">📘</a>
          <a href="#" className="social-item">📷</a>
          <a href="#" className="social-item">🐦</a>
          <a href="#" className="social-item">🎥</a>
          <a href="#" className="social-item">💬</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              LAYLA'S<span>KITCHEN</span>
            </div>
            <p className="footer-description">
              Bringing the authentic taste of Nigeria to your table. 
              Experience food that tells a story.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">ig</a>
              <a href="#" className="social-link">tw</a>
              <a href="#" className="social-link">yt</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Opening Hours</h4>
            <ul>
              <li>Monday - Friday: 11am - 10pm</li>
              <li>Saturday: 12pm - 11pm</li>
              <li>Sunday: 12pm - 9pm</li>
              <li>Public Holidays: 12pm - 8pm</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 Unwala <br/>KTIT, Katsina, Nigeria</p>
              <p>📞 +234 707 560 7597</p>
              <p>✉️ zainababubakar021@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 LAYLA'S KITCHEN. All rights reserved. Designed with ❤️ in Nigeria</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;