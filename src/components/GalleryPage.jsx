import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/gallery.css';

// Import images
import logo from "../../public/thirty.jpg";
import galleryHero from "../../public/twentyeight.jpg";

// Food Images
import food1 from "../../public/one.jpg";
import food2 from "../../public/two.jpg";
import food3 from "../../public/three.jpg";
import food4 from "../../public/four.jpg";
import food5 from "../../public/five.jpg";
import food6 from "../../public/six.jpg";
import food7 from "../../public/seven.jpg";
import food8 from "../../public/eight.jpg";
import food9 from "../../public/nine.jpg";
import food10 from "../../public/ten.jpg";

// Kitchen & Interior Images
import interior1 from "../../public/eleven.jpg";
import interior2 from "../../public/twelve.jpg";
import interior3 from "../../public/thirteen.jpg";
import interior4 from "../../public/fourteen.jpg";

// Event Images
import event1 from "../../public/fifteen.jpg";
import event2 from "../../public/sixteen.jpg";
import event3 from "../../public/seventeen.jpg";
import event4 from "../../public/eighteen.jpg";

// Team Images
import team1 from "../../public/layla2.png";

// Instagram Feed Images
import insta1 from "../../public/twentythree.jpg";
import insta2 from "../../public/twentyfour.jpg";
import insta3 from "../../public/twentyfive.jpg";
import insta4 from "../../public/twentysix.jpg";
import insta5 from "../../public/twentyseven.jpg";
import insta6 from "../../public/twentyeight.jpg";

const GalleryPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen]);

  const galleryItems = [
    // Food Items
    { id: 1, image: food1, title: 'Grilled Jollof Rice', category: 'food', description: 'Smoky grilled rice with spicy tomato sauce' },
    { id: 2, image: food2, title: 'Suya Supreme', category: 'food', description: 'Spicy grilled beef skewers with yaji spice' },
    { id: 3, image: food3, title: 'Egusi Elegance', category: 'food', description: 'Rich melon seed soup with assorted meat' },
    { id: 4, image: food4, title: 'Seafood Okra', category: 'food', description: 'Fresh okra soup with prawns and fish' },
    { id: 5, image: food5, title: 'Pepper Soup', category: 'food', description: 'Spicy broth with catfish and herbs' },
    { id: 6, image: food6, title: 'Pounded Yam & Egusi', category: 'food', description: 'Smooth pounded yam with egusi soup' },
    { id: 7, image: food7, title: 'Fried Rice Special', category: 'food', description: 'Nigerian fried rice with chicken' },
    { id: 8, image: food8, title: 'Grilled Fish', category: 'food', description: 'Fresh tilapia with spices' },
    { id: 9, image: food9, title: 'Moi Moi Deluxe', category: 'food', description: 'Steamed bean pudding with fish and eggs' },
    { id: 10, image: food10, title: 'Chicken Shawarma', category: 'food', description: 'Loaded shawarma with chicken and veggies' },
    
    // Interior Items
    { id: 11, image: interior1, title: 'Dining Area', category: 'interior', description: 'Cozy and welcoming atmosphere' },
    { id: 12, image: interior2, title: 'Our Kitchen', category: 'interior', description: 'Clean and modern cooking space' },
    { id: 13, image: interior3, title: 'Private Dining', category: 'interior', description: 'Perfect for special occasions' },
    { id: 14, image: interior4, title: 'Outdoor Seating', category: 'interior', description: 'Enjoy your meal al fresco' },
    
    // Event Items
    { id: 15, image: event1, title: 'Birthday Celebration', category: 'events', description: 'Making moments memorable' },
    { id: 16, image: event2, title: 'Corporate Catering', category: 'events', description: 'Professional event services' },
    { id: 17, image: event3, title: 'Wedding Reception', category: 'events', description: 'Elegant wedding catering' },
    { id: 18, image: event4, title: 'Family Gathering', category: 'events', description: 'Bringing families together' },
    
    // Team Items
    { id: 19, image: team1, title: 'Chef Layla', category: 'team', description: 'Founder & Head Chef' },
  ];

  const instagramFeed = [
    { id: 1, image: insta1, likes: 234, comments: 45 },
    { id: 2, image: insta2, likes: 567, comments: 89 },
    { id: 3, image: insta3, likes: 432, comments: 67 },
    { id: 4, image: insta4, likes: 789, comments: 123 },
    { id: 5, image: insta5, likes: 345, comments: 56 },
    { id: 6, image: insta6, likes: 654, comments: 98 },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setCurrentImage(filteredItems[index]);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(newIndex);
    setCurrentImage(filteredItems[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIndex);
    setCurrentImage(filteredItems[newIndex]);
  };

  return (
    <div className="gallery-wrapper">
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
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/gallery" className="active-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/products" className="reserve-btn" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header 
        className="page-header"
        style={{
          background: `linear-gradient(rgba(44,24,16,0.85), rgba(44,24,16,0.85)), url(${galleryHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="page-title">
          Our <span>Gallery</span>
        </h1>
        <div className="page-breadcrumb">
          <Link to="/">Home</Link> / <span>Gallery</span>
        </div>
      </header>

      {/* Filter Section */}
      <section className="gallery-filter-section">
        <div className="filter-container">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Photos
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'food' ? 'active' : ''}`}
            onClick={() => setActiveFilter('food')}
          >
            Food
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'interior' ? 'active' : ''}`}
            onClick={() => setActiveFilter('interior')}
          >
            Interior
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'events' ? 'active' : ''}`}
            onClick={() => setActiveFilter('events')}
          >
            Events
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'team' ? 'active' : ''}`}
            onClick={() => setActiveFilter('team')}
          >
            Team
          </button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-item ${index === 0 && activeFilter === 'all' ? 'featured' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <div className="gallery-icon">📷</div>
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-category">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="gallery-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Meals Served Daily</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Dishes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Photos Taken</div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">BEHIND THE SCENES</span>
          <h2 className="section-title">Watch Us in <span>Action</span></h2>
          <p className="section-description">
            Get a glimpse of what happens in our kitchen
          </p>
        </div>

        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Layla's Kitchen Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video-overlay">
            <button className="play-btn">▶</button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="instagram-section">
        <div className="instagram-header">
          <span className="section-tag">FOLLOW US</span>
          <h2 className="section-title">Instagram <span>Feed</span></h2>
          <p className="section-description">
            @laylaskitchen • Tag us in your photos
          </p>
        </div>

        <div className="instagram-feed">
          {instagramFeed.map((item) => (
            <div key={item.id} className="instagram-item">
              <img src={item.image} alt="Instagram post" />
              <div className="instagram-overlay">
                <span className="instagram-icon">❤️ {item.likes}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a 
            href="https://instagram.com/laylaskitchen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="follow-btn"
          >
            Follow Us on Instagram
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-nav prev" onClick={prevImage}>‹</button>
            <img src={currentImage.image} alt={currentImage.title} className="lightbox-image" />
            <button className="lightbox-nav next" onClick={nextImage}>›</button>
            <div className="lightbox-info">
              <h3>{currentImage.title}</h3>
              <p>{currentImage.description}</p>
            </div>
          </div>
        </div>
      )}

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

export default GalleryPage;