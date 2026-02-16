import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/product.css';
import one from "../../public/one.jpg";
import two from "../../public/two.jpg";
import three from "../../public/three.jpg";
import four from "../../public/four.jpg";
import five from "../../public/five.jpg";
import layla from "../../public/layla2.png";
import seven from "../../public/seven.jpg";
import eight from "../../public/eight.jpg";
import twelve from "../../public/twelve.jpg";
import thirteen from "../../public/thirteen.jpg";
import fourteen from "../../public/fourteen.jpg";
import fifteen from "../../public/fifteen.jpg";
import sixteen from "../../public/sixteen.jpg";
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
import twentyseven from "../../public/twentyseven.jpg";
import twentyeight from "../../public/twentyeight.jpg";
import twentynine from "../../public/twentynine.jpg";
import thirty from "../../public/thirty.jpg";
import thirtyone from "../../public/thirtyone.jpg";
import thirtytwo from "../../public/thirtytwo.jpg";
import thirtythree from "../../public/thirtythree.jpg";
import thirtyfour from "../../public/thirtyfour.jpg";

const ProductsPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChef, setSelectedChef] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, []); // Removed location dependency

  // Prevent body scroll when mobile menu or modal is open
  useEffect(() => {
    if (mobileMenuOpen || selectedChef) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen, selectedChef]);

const products = [
  {
    id: 10,
    name: 'Samosa',
    description: 'Loaded Samosa with chicken, veggies, and creamy sauce',
    price: '₦300 each',
    category: 'Sides',
    tags: ['Popular', 'Chicken', 'Snack'],
    rating: 4.8,
    reviews: 120,
    image: one,
    chef: {
      name: 'Chef Layla',
      role: 'Snack Specialist',
      specialty: 'Shawarma & Wraps',
      experience: '6 years',
      image: one,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Zainab, I would like to order the Chicken Shawarma'
    },
    badge: 'popular'
  },
  {
     id: 10,
    name: 'Samosa',
    description: 'Loaded Samosa with chicken, veggies, and creamy sauce',
    price: '₦300 each',
    category: 'Sides',
    tags: ['Popular', 'Chicken', 'Snack'],
    rating: 4.8,
    reviews: 120,
    image: one,
    chef: {
      name: 'Chef Layla',
      role: 'Snack Specialist',
      specialty: 'Shawarma & Wraps',
      experience: '6 years',
      image: one,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Zainab, I would like to order the Chicken Shawarma'
    },
    badge: 'popular'
  },
  {
    id: 12,
    name: 'Coconut milk',
    description: 'Rich Coconut milk',
    price: '₦1,000',
    category: 'Soups',
    tags: ['Traditional'],
    rating: 4.8,
    reviews: 94,
    image: twelve,
    chef: {
      name: 'Chef Layla',
      role: 'milk',
      specialty: 'Yoruba Soups',
      experience: '9 years',
      image: twelve,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order the Coconut milk'
    },
    badge: 'traditional'
  },
  {
    id: 13,
    name: 'Siro',
    description: 'Siro',
    price: '₦300',
    category: 'Soups',
    tags: ['Traditional', 'Soup', 'Fish'],
    rating: 4.9,
    reviews: 102,
    image: thirteen,
    chef: {
      name: 'Chef Layla',
      role: 'Drink Specialist',
      specialty: 'Katsina Drink',
      experience: '12 years',
      image: thirteen,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order the Siro'
    },
    badge: 'traditional'
  },
  {
    id: 15,
    name: 'Doughnut',
    description: 'Tasty Soft Doughnut ',
    price: 'On Order!',
    category: 'Swallow',
    tags: ['Swallow', 'Soup', 'Classic'],
    rating: 4.7,
    reviews: 80,
    image: fifteen,
    chef: {
      name: 'Chef Layla',
      role: 'Swallow Expert',
      specialty: 'Snacks',
      experience: '10 years',
      image: fifteen,
      whatsapp: '++2347075607597',
      message: 'Hello Chef Layla, I would like to order the Doughnut'
    },
    badge: 'chef'
  },
  {
    id: 16,
    name: 'Super Package',
    description: 'Suprise Package',
    price: 'On Order',
    category: 'Sides',
    tags: ['Traditional', 'Yam', 'Fish'],
    rating: 4.6,
    reviews: 65,
    image: sixteen,
    chef: {
      name: 'Chef Layla',
      role: 'Native Meals Expert',
      specialty: '',
      experience: '9 years',
      image: sixteen,
      whatsapp: '2347075607597',
      message: 'Hello Chef Layla, I would like to order Super Package!'
    },
    badge: 'traditional'
  },
  {
    id: 17,
    name: 'Tuwon madara',
    description: 'Enriched Tuwon Madara!',
    price: '₦1,000 & ₦500',
    category: 'Sides',
    tags: ['Snack', '', ''],
    rating: 4.9,
    reviews: 110,
    image: seventeen,
    chef: {
      name: 'Chef Layla',
      role: 'Hausa Delicacies',
      specialty: '',
      experience: '14 years',
      image: seventeen,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order the Nkwobi'
    },
    badge: 'chef'
  },
  {
    id: 19,
    name: 'Chinchin',
    description: 'Flavoured Chinchin',
    price: '₦1500 each pack',
    category: 'Snack',
    tags: ['Snack', '', ''],
    rating: 4.7,
    reviews: 140,
    image: nineteen,
    chef: {
      name: 'Chef Layla',
      role: 'Snack Master',
      specialty: 'Snack',
      experience: '15 years',
      image: nineteen,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order Chinchin Package '
    },
    badge: 'chef'
  },
  {
    id: 21,
    name: 'Aya',
    description: 'Sugared Aya',
    price: '₦1,000',
    category: '',
    tags: ['Sugar', '', ''],
    rating: 4.7,
    reviews: 99,
    image: twentyone,
    chef: {
      name: 'Chef Layla',
      role: 'Grill Master',
      specialty: 'Sugar & Flavour',
      experience: '15 years',
      image: twentyone,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order the Flavoured Aya!'
    },
    badge: 'chef'
  },
  
   {
    id: 20,
    name: 'Cake',
    description: 'Hot catfish pepper soup with scent leaves and spices',
    price: '₦4,900',
    category: 'Soups',
    tags: ['Spicy', 'Fish', 'Soup'],
    rating: 4.8,
    reviews: 150,
    image: twenty,
    chef: {
      name: 'Chef Layla',
      role: 'Soup Specialist',
      specialty: 'Pepper Soup',
      experience: '9 years',
      image: twenty,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Nkechi, I would like to order the Catfish Pepper Soup'
    },
    badge: 'popular'
  },
  {
    id: 23,
    name: 'Waina da Miya',
    description: '',
    price: '₦',
    category: '',
    tags: ['Vegetarian', 'Beans', 'Classic'],
    rating: 4.6,
    reviews: 70,
    image: twentythree,
    chef: {
      name: 'Chef Layla',
      role: 'Side Dish Expert',
      specialty: '',
      experience: '13 years',
      image: twentythree,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order Waina da miya'
    },
    badge: 'traditional'
  },
  {
    id: 24,
    name: 'Peppered Chicked',
    description: 'Peppered Chicked',
    price: 'On Order',
    category: 'Barbeque',
    tags: ['Breakfast', 'Traditional', ''],
    rating: 4.7,
    reviews: 82,
    image: twentyfour,
    chef: {
      name: 'Chef Layla',
      role: 'Side Dish Expert',
      specialty: 'Chiken',
      experience: '13 years',
      image: twentyfour,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order the Pepered Chicken'
    },
    badge: 'traditional'
  },
  {
    id: 25,
    name: 'Awara & Stew',
    description: 'Awara & Stew',
    price: '₦1,100, ₦1,500, ₦2,000',
    category: 'Rice',
    tags: ['Rice', 'Chicken', 'Stew'],
    rating: 4.7,
    reviews: 96,
    image: twentyfive,
    chef: {
      name: 'Chef Layla',
      role: 'Rice Specialist',
      specialty: 'Sauce Meals',
      experience: '8 years',
      image: twentyfive,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order Awara & Stew'
    },
    badge: 'popular'
  },
  {
     id: 25,
    name: 'Awara & Stew (Packaged)',
    description: 'Awara & Stew',
    price: '₦1,100, ₦1,500, ₦2,000',
    category: 'Rice',
    tags: ['Rice', 'Chicken', 'Stew'],
    rating: 4.7,
    reviews: 96,
    image: twentysix,
     chef: {
      name: 'Chef Layla',
      role: 'Rice Specialist',
      specialty: 'Sauce Meals',
      experience: '8 years',
      image: twentyfive,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order Awara & Stew'
    },
    badge: 'popular'
  },
   {
    id: 29,
    name: 'Kosae',
    description: 'Hot goat meat stew cooked with peppers and herbs',
    price: '₦500',
    category: 'BreakFast',
    tags: ['Spicy', '', ''],
    rating: 4.8,
    reviews: 68,
    image: twentynine,
    chef: {
      name: 'Chef Layla',
      role: 'BeakFast Specialist',
      specialty: 'Traditional BreakFast',
      experience: '12 years',
      image: twentynine,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order the Kosae'
    },
    badge: 'chef'
  },
  {
    id: 28,
    name: 'Jollof Rice (Packaged)',
    description: 'Jollof Rice',
    price: 'On Order',
    category: 'Food',
    tags: ['Premium', '', ''],
    rating: 4.9,
    reviews: 41,
    image: twentyeight,
    chef: {
      name: 'Chef Layla',
      role: 'lunch Expert',
      specialty: 'Lunch Soups',
      experience: '8 years',
      image: twentyeight,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order Jollof Rice'
    },
    badge: 'premium'
  },
  {
    id: 15,
    name: 'Doughnut',
    description: 'Tasty Soft Doughnut ',
    price: 'On Order!',
    category: 'Swallow',
    tags: ['Swallow', 'Soup', 'Classic'],
    rating: 4.7,
    reviews: 80,
    image: fifteen,
    chef: {
      name: 'Chef Layla',
      role: 'Swallow Expert',
      specialty: 'Snacks',
      experience: '10 years',
      image: fifteen,
      whatsapp: '++2347075607597',
      message: 'Hello Chef Layla, I would like to order the Doughnut'
    },
    badge: 'chef'
  },
  {
    id: 33,
    name: 'Fried Yam & Sauce',
    description: '',
    price: '₦',
    category: 'Sides',
    tags: ['', '', ''],
    rating: 4.7,
    reviews: 112,
    image: thirtythree,
    chef: {
      name: 'Chef Layla',
      role: 'Snack Specialist',
      specialty: 'Shawarma & Wraps',
      experience: '6 years',
      image: thirtythree,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order'
    },
    badge: 'popular'
  },
  {
    id: 34,
    name: 'Samosa (Packaged)',
    description: '',
    price: '₦',
    category: 'Sides',
    tags: ['Traditional', '', 'Signature'],
    rating: 4.8,
    reviews: 58,
    image: thirtyfour,
    chef: {
      name: 'Chef Layla',
      role: 'Hausa Delicacies',
      specialty: '',
      experience: '14 years',
      image: thirtyfour,
      whatsapp: '+2347075607597',
      message: 'Hello Chef Layla, I would like to order!'
    },
    badge: 'traditional'
  }
];



  // Filter categories
  const categories = ['all', 'Rice', 'Soups', 'Grill', 'Swallow', 'Sides'];

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.chef.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Handle WhatsApp click
  const handleWhatsAppClick = (chef, productName) => {
    const message = encodeURIComponent(`Hello ${chef.name}, I'm interested in ordering the ${productName}. Can you provide more information?`);
    window.open(`https://wa.me/${chef.whatsapp}?text=${message}`, '_blank');
  };

  // Handle chef modal
  const openChefModal = (chef) => {
    setSelectedChef(chef);
    document.body.style.overflow = 'hidden';
  };

  const closeChefModal = () => {
    setSelectedChef(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="products-wrapper">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
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
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/products" className="reserve-btn" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header 
        className="page-header"
        style={{
          background: `linear-gradient(rgba(44,24,16,0.85), rgba(44,24,16,0.85)), url(${one})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="page-title">
          Our <span>Menu</span>
        </h1>
        <div className="page-breadcrumb">
          <Link to="/">Home</Link> / <span>Menu</span>
        </div>
      </header>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(category);
                  setCurrentPage(1);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        {paginatedProducts.length > 0 ? (
          <>
            <div className="products-grid">
              {paginatedProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className={`product-badge ${product.badge}`}>
                    {product.badge === 'chef' ? '👨‍🍳 Chef Special' : 
                     product.badge === 'popular' ? '🔥 Popular' : 
                     product.badge === 'premium' ? '⭐ Premium' : '🌿 Traditional'}
                  </div>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-chef-info">
                      <div className="chef-name">{product.chef.name}</div>
                      <div className="chef-title">{product.chef.role}</div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-meta">
                      <span className="product-price">{product.price}</span>
                      <div className="product-rating">
                        ⭐ {product.rating} <span>({product.reviews})</span>
                      </div>
                    </div>
                    <div className="product-tags">
                      {product.tags.map((tag, index) => (
                        <span key={index} className="product-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="product-footer">
                      <button className="btn-order" onClick={() => openChefModal(product.chef)}>
                        Order Now
                      </button>
                      <button 
                        className="btn-whatsapp"
                        onClick={() => handleWhatsAppClick(product.chef, product.name)}
                        title={`Contact ${product.chef.name} on WhatsApp`}
                      >
                        📱
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        )}
      </section>

      {/* Featured Chef Section */}
      <section className="chef-section">
        <div className="chef-container">
          <div className="chef-image">
            <img 
            style={{ boxSizing:"border-box", width: "100%", height:"800px"}}
              src={layla} 
              alt="Featured Chef"
            />
          </div>
          <div className="chef-details">
            <h2>Meet Our <span>Master Chef</span></h2>
            <p className="chef-bio">
              Chef Layla, the heart and soul of Layla's Kitchen, brings over 20 years 
              of culinary expertise to every dish. Trained in traditional Nigerian 
              cooking and modern techniques, she creates unforgettable dining experiences.
            </p>
            <div className="chef-specialties">
              <span className="specialty-tag">Jollof Rice</span>
              <span className="specialty-tag">Suya</span>
              <span className="specialty-tag">Traditional Soups</span>
              <span className="specialty-tag">Grill</span>
            </div>
            <div className="chef-contact">
              <a 
                href="https://wa.me/2347075607597?text=Hello%20Chef%20Layla%2C%20I'd%20like%20to%20know%20more%20about%20your%20specials"
                target="_blank"
                rel="noopener noreferrer"
                className="chef-whatsapp"
              >
                Chat with Chef Layla
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Modal */}
      {selectedChef && (
        <div className="modal-overlay" onClick={closeChefModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Contact Chef</h3>
              <button className="modal-close" onClick={closeChefModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="chef-avatar">
                <img src={selectedChef.image} alt={selectedChef.name} />
              </div>
              <div className="chef-info">
                <h4>{selectedChef.name}</h4>
                <p>{selectedChef.role} • {selectedChef.experience} experience</p>
                <p><strong>Specialty:</strong> {selectedChef.specialty}</p>
              </div>
              <div className="dish-details">
                <h5>Contact Information</h5>
                <p>📞 {selectedChef.whatsapp}</p>
                <p>⏰ Available: Mon-Sun, 10am - 9pm</p>
              </div>
              <div className="whatsapp-number">
                WhatsApp: {selectedChef.whatsapp}
              </div>
              <a 
                href={`https://wa.me/${selectedChef.whatsapp}?text=${encodeURIComponent(selectedChef.message || `Hello ${selectedChef.name}, I'd like to place an order`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-whatsapp-btn"
                onClick={closeChefModal}
              >
                📱 Send WhatsApp Message
              </a>
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
             <p>📍 Unwala <br/> II, Katsina, Nigeria</p>
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

export default ProductsPage;