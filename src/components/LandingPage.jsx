import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../style/landing.css";
import seventeen from "../../public/seventeen.jpg";
import eighteen from "../../public/eighteen.jpg";
import nineteen from "../../public/nineteen.jpg";
import twenty from "../../public/twenty.jpg";
import twentyone from "../../public/twentyone.jpg";
import twentytwo from "../../public/twentytwo.jpg";
import twentythree from "../../public/twentythree.jpg";
import twentyfour from "../../public/twentyfour.jpg";
import twentyfive from "../../public/twentyfive.jpg";
import twentysix from "../../public/twentysix.jpg";
import thirty from "../../public/thirty.jpg";
import fifteen from "../../public/fifteen.jpg";
import twentyseven from "../../public/twentyseven.jpg";
import twentyeight from "../../public/twentyeight.jpg";
import twentynine from "../../public/twentynine.jpg";
import sixteen from "../../public/sixteen.jpg";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('popular');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredDishes = [
    {
      name: 'Chinchin',
      description: 'Flavoured Chinchin',
      price: '₦1,500',
      tag: 'Popular',
      image: nineteen
    },
    {
        name: 'Tuwon Madara',
        description: 'Flavoured Tuwon Madara',
        price: '₦1,000 & 500',
        tag: 'Snack',
        image: seventeen
    },
    {
        name: 'Egusi Elegance',
        description: 'Rich melon seed soup with assorted meat and veggies',
        price: '₦5,800',
        tag: 'Chef Special',
        image: eighteen
    },
    {
        name: 'Seafood Okra',
        description: 'Fresh okra soup with prawns, fish, and crab',
        price: '₦7,500',
        tag: 'Premium',
        image: twentyone
    },
    {
        name: 'Pepper Soup',
        description: 'Spicy broth with catfish, herbs, and traditional spices',
        price: '₦4,200',
        tag: 'Traditional',
        image: twentytwo
    },
    {
        name: 'Pounded Yam & Egusi',
        description: 'Smooth pounded yam with egusi soup and assorted meat',
        price: '₦5,500',
        tag: 'Classic',
        image: twentythree
    }
  ];

  const menuItems = {
    popular: [
      { name: 'Kosae', description: 'Classic Nigerian Kosar for breakfast', price: 'On Order', image: twentynine, tags: ['Popular', 'Rice'] },
      { name: 'Aya', description: 'Flavoured Aya', price: '₦1,000', image: twentyone, tags: ['Grill', 'Beef'] },
      { name: 'Doughnut', description: 'Soft Doughnut', price: 'On Order', image: fifteen , tags: ['Snack', 'Vegetarian'] },
      { name: 'Super Package', description: '', price: '₦1,200', image: sixteen, tags: ['Snack', 'Vegan'] }
    ],
    traditional: [
        { name: 'Doughnut', description: 'Soft Doughnut', price: 'On Order', image: fifteen , tags: ['Snack', 'Vegetarian'] },
        { name: 'Super Package', description: '', price: '₦1,200', image: sixteen, tags: ['Snack', 'Vegan'] },
        { name: 'Aya', description: 'Flavoured Aya', price: '₦1,000', image: twentyone, tags: ['Grill', 'Beef'] },
    ],
    grill: [
        { name: 'Doughnut', description: 'Soft Doughnut', price: 'On Order', image: fifteen , tags: ['Snack', 'Vegetarian'] },
        { name: 'Aya', description: 'Flavoured Aya', price: '₦1,000', image: twentyone, tags: ['Grill', 'Beef'] },
        { name: 'Kosae', description: 'Classic Nigerian Kosar for breakfast', price: 'On Order', image: twentynine, tags: ['Popular', 'Rice'] },
    ]
  };

  const galleryImages = [
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyone,
    twentytwo,
    twentythree,
    twentyfour,
  ];

  const testimonials = [
    {
      text: "Layla's Kitchen is absolutely amazing! The flavors take me back to my grandmother's cooking. Best Nigerian food in Abuja!",
      author: "Amara Okafor",
      role: "Food Blogger"
    },
    {
      text: "The suya here is legendary! Perfectly spiced and grilled to perfection. My go-to spot for authentic Nigerian cuisine.",
      author: "Chidi Okonkwo",
      role: "Regular Customer"
    },
    {
      text: "Incredible atmosphere, even better food. The jollof rice is the best I've ever tasted. Highly recommended!",
      author: "Sarah Adebayo",
      role: "Food Critic"
    }
  ];

  return (
    <div className="landing-wrapper">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo" style={{display:"flex", flexDirection:"row"}}>
            <img 
            src={thirty}
            style={{width:"60px", height:"40px"}}
            />
            LAYLA'S<span>KITCHEN</span>
          </Link>

          <div className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link onClick={() => setMobileMenuOpen(false)}>Menu</Link>
            <Link onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link className="reserve-btn" onClick={() => setMobileMenuOpen(false)}>Reserve Table</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO LAYLA'S KITCHEN</p>
          <h1 className="hero-title">
            Where Tradition<br/>
            <span>Meets Taste</span>
          </h1>
          <p className="hero-description">
            Experience the authentic flavors of Nigeria <br /> with a modern twist. <br /> 
            From our kitchen to your table, every dish tells a story.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">Explore Products</Link>
            <Link className="btn-secondary">Reserve Table</Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured">
        <div className="section-header">
          <span className="section-tag">OUR SPECIALTIES</span>
          <h2 className="section-title">Featured <span>Dishes</span></h2>
          <p className="section-description">
            Hand-picked favorites that our customers keep coming back for
          </p>
        </div>

        <div className="featured-grid">
          {featuredDishes.slice(0, 3).map((dish, index) => (
            <div key={index} className="featured-card">
              <div className="card-image">
                <img src={dish.image} alt={dish.name} />
                <div className="card-overlay">{dish.tag}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{dish.name}</h3>
                <p className="card-description">{dish.description}</p>
                <div className="card-footer">
                  <span className="card-price">{dish.price}</span>
                  <button className="card-btn">Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-container">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Layla's Kitchen Interior"
            />
          </div>
          <div className="about-content">
            <span className="section-tag">OUR STORY</span>
            <h2 className="about-title">
              Cooking With<br/>
              <span>Love Since 2015</span>
            </h2>
            <p className="about-text">
              Layla's Kitchen started from a simple dream - to share the rich, 
              vibrant flavors of Nigerian cuisine with the world. What began as 
              a small kitchen in Abuja has grown into a beloved restaurant where 
              tradition meets innovation.
            </p>
            <p className="about-text">
              Every dish we serve is a celebration of our heritage, made with 
              fresh ingredients, authentic spices, and a whole lot of love.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🌿</div>
                <h4>Fresh Ingredients</h4>
                <p>Sourced daily from local markets</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👩‍🍳</div>
                <h4>Expert Chefs</h4>
                <p>Traditional techniques, modern flair</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⭐</div>
                <h4>5-Star Service</h4>
                <p>Your satisfaction is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="menu-preview">
        <div className="section-header">
          <span className="section-tag">FLAVORS OF NIGERIA</span>
          <h2 className="section-title">Our <span>Menu</span></h2>
          <p className="section-description">
            Explore our diverse range of authentic Nigerian dishes
          </p>
        </div>

        <div className="menu-tabs">
          <button 
            className={`menu-tab ${activeTab === 'popular' ? 'active' : ''}`}
            onClick={() => setActiveTab('popular')}
          >
            Popular
          </button>
          <button 
            className={`menu-tab ${activeTab === 'traditional' ? 'active' : ''}`}
            onClick={() => setActiveTab('traditional')}
          >
            Traditional
          </button>
          <button 
            className={`menu-tab ${activeTab === 'grill' ? 'active' : ''}`}
            onClick={() => setActiveTab('grill')}
          >
            Grill
          </button>
        </div>

        <div className="menu-grid">
          {menuItems[activeTab].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h4>{item.name}</h4>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="menu-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="section-title">What Our <span>Customers Say</span></h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">{testimonial.author}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <div className="section-header">
          <span className="section-tag">INSTAGRAM</span>
          <h2 className="section-title">Our <span>Gallery</span></h2>
          <p className="section-description">
            Follow us @laylaskitchen for more delicious content
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.slice(0, 8).map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
              <div className="gallery-overlay">
                <span className="gallery-icon">📷</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="reservation">
        <div className="reservation-content">
          <h2 className="reservation-title">
            Ready to <span>Dine</span> With Us?
          </h2>
          <p className="reservation-text">
            Book your table now and experience the best of Nigerian cuisine.
            Special discounts for groups and special occasions.
          </p>
          <form className="reservation-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Number of Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
              </select>
            </div>
            <div className="form-group full-width">
              <input type="date" placeholder="Select Date" required />
            </div>
            <div className="form-group full-width">
              <input type="time" placeholder="Select Time" required />
            </div>
            <button type="submit" className="btn-reserve">Reserve Now</button>
          </form>
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
              <li><Link to="/menu">Menu</Link></li>
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
              <p>📍 Unwala <br/> KTIT, Katsina, Nigeria</p>
              <p>📞 +234 707 (560) 75 97 </p>
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

export default LandingPage;