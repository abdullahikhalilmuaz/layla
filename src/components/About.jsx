import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/about.css';

// Import images
import logo from "../../public/thirty.jpg";
import aboutHero from "../../public/twentyeight.jpg";
import storyImage from "../../public/twentyseven.jpg";
import chefLayla from "../../public/layla2.png";
import team1 from "../../public/twentythree.jpg";
import team2 from "../../public/twentyfour.jpg";
import team3 from "../../public/twentyfive.jpg";
import team4 from "../../public/twentysix.jpg";
import team5 from "../../public/twentyseven.jpg";
import team6 from "../../public/twentyeight.jpg";
import signature from "../../public/thirtyone.jpg";

const AboutPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const teamMembers = [
    {
      name: 'Chef Layla',
      role: 'Founder & Head Chef',
      experience: '20+ years',
      image: chefLayla,
      specialty: 'Traditional Nigerian Cuisine'
    }
  ];

  const values = [
    {
      icon: '🌿',
      title: 'Fresh Ingredients',
      description: 'We source only the freshest ingredients from local markets every morning.'
    },
    {
      icon: '❤️',
      title: 'Made with Love',
      description: 'Every dish is prepared with passion and care, just like home cooking.'
    },
    {
      icon: '🌟',
      title: 'Quality First',
      description: 'We never compromise on quality, from ingredients to presentation.'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'We believe in giving back to the community that supports us.'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Layla\'s Kitchen started as a small home kitchen in Katsina, serving the neighborhood.'
    },
    {
      year: '2017',
      title: 'First Restaurant',
      description: 'Opened our first physical location in KTIT, Katsina with just 10 seats.'
    },
    {
      year: '2019',
      title: 'Expansion',
      description: 'Expanded to accommodate 50 guests and introduced delivery services.'
    },
    {
      year: '2021',
      title: 'Online Presence',
      description: 'Launched our website and social media, reaching customers across Nigeria.'
    },
    {
      year: '2023',
      title: 'Catering Services',
      description: 'Started catering for events and corporate functions.'
    },
    {
      year: '2025',
      title: 'Today',
      description: 'Serving hundreds of happy customers daily with our authentic Nigerian cuisine.'
    }
  ];

  return (
    <div className="about-wrapper">
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
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
            <Link to="/about" className="active-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link className="reserve-btn" onClick={() => setMobileMenuOpen(false)}>Reserve Table</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header 
        className="page-header"
        style={{
          background: `linear-gradient(rgba(44,24,16,0.85), rgba(44,24,16,0.85)), url(${aboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="page-title">
          About <span>Us</span>
        </h1>
        <div className="page-breadcrumb">
          <Link to="/">Home</Link> / <span>About</span>
        </div>
      </header>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-image">
            <img src={storyImage} alt="Layla's Kitchen Story" />
          </div>
          <div className="story-content">
            <span className="section-tag">OUR STORY</span>
            <h2 className="story-title">
              From Our Kitchen to <span>Your Heart</span>
            </h2>
            <div className="story-text">
              <p>
                Layla's Kitchen began in 2015 with a simple dream: to share the rich, 
                vibrant flavors of Nigerian cuisine with the world. What started as a 
                small home kitchen in Katsina has grown into a beloved restaurant where 
                tradition meets innovation.
              </p>
              <p>
                Our founder, Chef Layla, learned the art of cooking from her grandmother, 
                watching her prepare traditional dishes with love and precision. Today, 
                we honor that legacy by serving authentic Nigerian food made with the 
                same care and attention to detail.
              </p>
              <p>
                Every dish we serve tells a story — of our heritage, our culture, and 
                our passion for good food. We believe that food is more than just 
                sustenance; it's a way to connect, to celebrate, and to create memories.
              </p>
            </div>
            
            <div className="story-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years of Service</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Dishes</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To bring the authentic taste of Nigerian cuisine to every table, 
              creating memorable dining experiences that celebrate our rich culinary 
              heritage while embracing innovation and excellence.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="mission-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To become Nigeria's most beloved restaurant brand, recognized for 
              exceptional quality, warm hospitality, and unwavering commitment to 
              preserving and promoting traditional Nigerian cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <span className="section-tag">WHAT WE STAND FOR</span>
          <h2 className="section-title">Our Core <span>Values</span></h2>
          <p className="section-description">
            These principles guide everything we do, from sourcing ingredients to serving our customers.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chef Feature */}
      <section className="chef-feature">
        <div className="chef-feature-container">
          <div className="chef-feature-image">
            <img src={chefLayla} alt="Chef Layla" />
          </div>
          <div className="chef-feature-content">
            <span className="section-tag">MEET THE CHEF</span>
            <h2>Chef <span>Layla</span></h2>
            <p>
              Chef Layla is the heart and soul of Layla's Kitchen. With over 20 years 
              of culinary experience, she brings authentic Nigerian flavors to life 
              in every dish. Trained in traditional cooking methods by her grandmother, 
              Chef Layla combines time-honored techniques with modern presentation.
            </p>
            <p>
              Her philosophy is simple: cook with love, use the freshest ingredients, 
              and never compromise on taste. Under her guidance, our kitchen creates 
              dishes that not only satisfy hunger but also nourish the soul.
            </p>
            <div className="chef-signature">
              {signature ? (
                <img src={signature} alt="Chef Layla's Signature" style={{ maxWidth: '200px' }} />
              ) : (
                "Chef Layla"
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <span className="section-tag">OUR TEAM</span>
          <h2 className="section-title">The People Behind <span>the Magic</span></h2>
          <p className="section-description">
            Meet the talented individuals who make Layla's Kitchen special.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href="#"><span>f</span></a>
                    <a href="#"><span>ig</span></a>
                    <a href="#"><span>in</span></a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <div className="team-experience">{member.experience} • {member.specialty}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="milestone-section">
        <div className="section-header">
          <span className="section-tag">OUR JOURNEY</span>
          <h2 className="section-title">Key <span>Milestones</span></h2>
          <p className="section-description">
            The story of Layla's Kitchen, told through the years.
          </p>
        </div>

        <div className="milestone-container">
          <div className="milestone-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="testimonial-highlight">
        <div className="highlight-card">
          <div className="highlight-quote">
            "Layla's Kitchen isn't just a restaurant — it's a celebration of Nigerian culture and cuisine. 
            Every bite takes me back to my grandmother's kitchen. This is food with soul."
          </div>
          <div className="highlight-author">— Amina Abubakar</div>
          <div className="highlight-role">Loyal Customer Since 2016</div>
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

export default AboutPage;