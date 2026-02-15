import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/product.css';
import one from "../../public/one.jpg";
import two from "../../public/two.jpg";
import three from "../../public/three.jpg";
import four from "../../public/four.jpg";
import five from "../../public/five.jpg";
import layla from "../../public/layla.jpg";
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

  // Product data with local image imports
 const products = [
  {
    id: 10,
    name: 'Chicken Shawarma',
    description: 'Loaded shawarma with chicken, veggies, and creamy sauce',
    price: '₦3,500',
    category: 'Sides',
    tags: ['Popular', 'Chicken', 'Snack'],
    rating: 4.8,
    reviews: 120,
    image: one,
    chef: {
      name: 'Chef Zainab',
      role: 'Snack Specialist',
      specialty: 'Shawarma & Wraps',
      experience: '6 years',
      image: one,
      whatsapp: '+2348101234567',
      message: 'Hello Chef Zainab, I would like to order the Chicken Shawarma'
    },
    badge: 'popular'
  },
  {
    id: 11,
    name: 'Ofada Rice & Sauce',
    description: 'Local ofada rice with spicy ayamase sauce and assorted meat',
    price: '₦5,200',
    category: 'Rice',
    tags: ['Traditional', 'Spicy', 'Rice'],
    rating: 4.7,
    reviews: 88,
    image: one,
    chef: {
      name: 'Chef Bola',
      role: 'Rice Specialist',
      specialty: 'Ofada & Native Meals',
      experience: '11 years',
      image: one,
      whatsapp: '+2348112345678',
      message: 'Hello Chef Bola, I would like to order the Ofada Rice & Sauce'
    },
    badge: 'traditional'
  },
  {
    id: 12,
    name: 'Efo Riro',
    description: 'Rich spinach stew with assorted meat and peppers',
    price: '₦5,000',
    category: 'Soups',
    tags: ['Traditional', 'Stew', 'Meat'],
    rating: 4.8,
    reviews: 94,
    image: twelve,
    chef: {
      name: 'Chef Tolu',
      role: 'Soup Specialist',
      specialty: 'Yoruba Soups',
      experience: '9 years',
      image: twelve,
      whatsapp: '+2348123456789',
      message: 'Hello Chef Tolu, I would like to order the Efo Riro'
    },
    badge: 'traditional'
  },
  {
    id: 13,
    name: 'Banga Soup',
    description: 'Palm nut soup with fish, meat, and traditional spices',
    price: '₦6,000',
    category: 'Soups',
    tags: ['Traditional', 'Soup', 'Fish'],
    rating: 4.9,
    reviews: 102,
    image: thirteen,
    chef: {
      name: 'Chef Ejiro',
      role: 'Soup Specialist',
      specialty: 'Delta Soups',
      experience: '12 years',
      image: thirteen,
      whatsapp: '+2348134567890',
      message: 'Hello Chef Ejiro, I would like to order the Banga Soup'
    },
    badge: 'traditional'
  },
  {
    id: 14,
    name: 'Chicken Curry Rice',
    description: 'Fluffy rice served with rich chicken curry sauce',
    price: '₦4,700',
    category: 'Rice',
    tags: ['Rice', 'Chicken', 'Sauce'],
    rating: 4.6,
    reviews: 76,
    image: fourteen,
    chef: {
      name: 'Chef Ada',
      role: 'Rice Specialist',
      specialty: 'Sauce Meals',
      experience: '8 years',
      image: fourteen,
      whatsapp: '+2348145678901',
      message: 'Hello Chef Ada, I would like to order the Chicken Curry Rice'
    },
    badge: 'popular'
  },
  {
    id: 15,
    name: 'Semo & Okro Soup',
    description: 'Soft semovita with tasty okro soup and assorted meat',
    price: '₦4,900',
    category: 'Swallow',
    tags: ['Swallow', 'Soup', 'Classic'],
    rating: 4.7,
    reviews: 80,
    image: fifteen,
    chef: {
      name: 'Chef Hassan',
      role: 'Swallow Expert',
      specialty: 'Semo & Soups',
      experience: '10 years',
      image: fifteen,
      whatsapp: '+2348156789012',
      message: 'Hello Chef Hassan, I would like to order the Semo & Okro Soup'
    },
    badge: 'chef'
  },

  {
    id: 16,
    name: 'Yam Poridge (Asaro)',
    description: 'Nigerian yam porridge cooked with palm oil and fish',
    price: '₦3,800',
    category: 'Sides',
    tags: ['Traditional', 'Yam', 'Fish'],
    rating: 4.6,
    reviews: 65,
    image: sixteen,
    chef: {
      name: 'Chef Ifeoma',
      role: 'Native Meals Expert',
      specialty: 'Asaro & Yam Dishes',
      experience: '9 years',
      image: sixteen,
      whatsapp: '+2348167890123',
      message: 'Hello Chef Ifeoma, I would like to order the Yam Poridge (Asaro)'
    },
    badge: 'traditional'
  },
  {
    id: 17,
    name: 'Nkwobi',
    description: 'Spicy cow foot delicacy with utazi and palm oil sauce',
    price: '₦6,500',
    category: 'Sides',
    tags: ['Spicy', 'Meat', 'Signature'],
    rating: 4.9,
    reviews: 110,
    image: seventeen,
    chef: {
      name: 'Chef Obinna',
      role: 'Igbo Delicacies',
      specialty: 'Nkwobi & Isi Ewu',
      experience: '14 years',
      image: seventeen,
      whatsapp: '+2348178901234',
      message: 'Hello Chef Obinna, I would like to order the Nkwobi'
    },
    badge: 'chef'
  },
  {
    id: 18,
    name: 'Isi Ewu',
    description: 'Goat head cooked in spicy palm oil sauce with herbs',
    price: '₦7,000',
    category: 'Sides',
    tags: ['Spicy', 'Meat', 'Premium'],
    rating: 4.8,
    reviews: 92,
    image: eighteen,
    chef: {
      name: 'Chef Obinna',
      role: 'Igbo Delicacies',
      specialty: 'Nkwobi & Isi Ewu',
      experience: '14 years',
      image: eighteen,
      whatsapp: '+2348178901234',
      message: 'Hello Chef Obinna, I would like to order the Isi Ewu'
    },
    badge: 'premium'
  },
  {
    id: 19,
    name: 'BBQ Chicken Wings',
    description: 'Sticky grilled wings with sweet spicy barbecue glaze',
    price: '₦5,600',
    category: 'Grill',
    tags: ['Grill', 'Chicken', 'Signature'],
    rating: 4.7,
    reviews: 140,
    image: nineteen,
    chef: {
      name: 'Chef Musa',
      role: 'Grill Master',
      specialty: 'Suya & Barbecue',
      experience: '15 years',
      image: nineteen,
      whatsapp: '+2348023456789',
      message: 'Hello Chef Musa, I would like to order the BBQ Chicken Wings'
    },
    badge: 'chef'
  },
  {
    id: 20,
    name: 'Catfish Pepper Soup',
    description: 'Hot catfish pepper soup with scent leaves and spices',
    price: '₦4,900',
    category: 'Soups',
    tags: ['Spicy', 'Fish', 'Soup'],
    rating: 4.8,
    reviews: 150,
    image: twenty,
    chef: {
      name: 'Chef Nkechi',
      role: 'Soup Specialist',
      specialty: 'Pepper Soup',
      experience: '9 years',
      image: twenty,
      whatsapp: '+2348056789012',
      message: 'Hello Chef Nkechi, I would like to order the Catfish Pepper Soup'
    },
    badge: 'popular'
  },

  {
    id: 21,
    name: 'Turkey Suya',
    description: 'Smoky turkey suya with yaji spice and sliced onions',
    price: '₦6,400',
    category: 'Grill',
    tags: ['Grill', 'Spicy', 'Turkey'],
    rating: 4.7,
    reviews: 99,
    image: twentyone,
    chef: {
      name: 'Chef Musa',
      role: 'Grill Master',
      specialty: 'Suya & Barbecue',
      experience: '15 years',
      image: twentyone,
      whatsapp: '+2348023456789',
      message: 'Hello Chef Musa, I would like to order the Turkey Suya'
    },
    badge: 'chef'
  },
  {
    id: 22,
    name: 'Jollof Spaghetti',
    description: 'Nigerian jollof spaghetti cooked with peppers and herbs',
    price: '₦3,900',
    category: 'Rice',
    tags: ['Popular', 'Spicy', 'Pasta'],
    rating: 4.6,
    reviews: 105,
    image: twentytwo,
    chef: {
      name: 'Chef Layla',
      role: 'Head Chef',
      specialty: 'Jollof Rice Specialist',
      experience: '10 years',
      image: twentytwo,
      whatsapp: '+2348012345678',
      message: 'Hello Chef Layla, I would like to order the Jollof Spaghetti'
    },
    badge: 'popular'
  },
  {
    id: 23,
    name: 'Beans & Plantain',
    description: 'Honey beans served with fried ripe plantain',
    price: '₦3,200',
    category: 'Sides',
    tags: ['Vegetarian', 'Beans', 'Classic'],
    rating: 4.6,
    reviews: 70,
    image: twentythree,
    chef: {
      name: 'Chef Funke',
      role: 'Side Dish Expert',
      specialty: 'Moi Moi & Beans',
      experience: '13 years',
      image: twentythree,
      whatsapp: '+2348090123456',
      message: 'Hello Chef Funke, I would like to order the Beans & Plantain'
    },
    badge: 'traditional'
  },
  {
    id: 24,
    name: 'Akara & Pap',
    description: 'Crispy bean cakes served with hot pap (ogi)',
    price: '₦2,200',
    category: 'Sides',
    tags: ['Breakfast', 'Traditional', 'Vegetarian'],
    rating: 4.7,
    reviews: 82,
    image: twentyfour,
    chef: {
      name: 'Chef Funke',
      role: 'Side Dish Expert',
      specialty: 'Moi Moi & Beans',
      experience: '13 years',
      image: twentyfour,
      whatsapp: '+2348090123456',
      message: 'Hello Chef Funke, I would like to order the Akara & Pap'
    },
    badge: 'traditional'
  },
  {
    id: 25,
    name: 'Chicken Stew & Rice',
    description: 'White rice served with rich Nigerian chicken stew',
    price: '₦5,100',
    category: 'Rice',
    tags: ['Rice', 'Chicken', 'Stew'],
    rating: 4.7,
    reviews: 96,
    image: twentyfive,
    chef: {
      name: 'Chef Ada',
      role: 'Rice Specialist',
      specialty: 'Sauce Meals',
      experience: '8 years',
      image: twentyfive,
      whatsapp: '+2348145678901',
      message: 'Hello Chef Ada, I would like to order the Chicken Stew & Rice'
    },
    badge: 'popular'
  },
  {
    id: 26,
    name: 'Amala & Ewedu',
    description: 'Soft amala served with ewedu soup and gbegiri',
    price: '₦4,600',
    category: 'Swallow',
    tags: ['Traditional', 'Swallow', 'Soup'],
    rating: 4.8,
    reviews: 120,
    image: twentysix,
    chef: {
      name: 'Chef Tolu',
      role: 'Soup Specialist',
      specialty: 'Yoruba Soups',
      experience: '9 years',
      image: twentysix,
      whatsapp: '+2348123456789',
      message: 'Hello Chef Tolu, I would like to order the Amala & Ewedu'
    },
    badge: 'traditional'
  },
  {
    id: 27,
    name: 'Sisi Yemi Special',
    description: 'Signature mixed platter with rice, chicken, and sides',
    price: '₦8,500',
    category: 'Rice',
    tags: ['Premium', 'Combo', 'Signature'],
    rating: 5.0,
    reviews: 55,
    image: twentyseven,
    chef: {
      name: 'Chef Layla',
      role: 'Head Chef',
      specialty: 'Jollof Rice Specialist',
      experience: '10 years',
      image: twentyseven,
      whatsapp: '+2348012345678',
      message: 'Hello Chef Layla, I would like to order the Sisi Yemi Special'
    },
    badge: 'premium'
  },
  {
    id: 28,
    name: 'Grilled Prawns',
    description: 'Seasoned prawns grilled with garlic butter sauce',
    price: '₦9,200',
    category: 'Grill',
    tags: ['Premium', 'Seafood', 'Grill'],
    rating: 4.9,
    reviews: 41,
    image: twentyeight,
    chef: {
      name: 'Chef Kunle',
      role: 'Seafood Expert',
      specialty: 'Seafood Soups',
      experience: '8 years',
      image: twentyeight,
      whatsapp: '+2348045678901',
      message: 'Hello Chef Kunle, I would like to order the Grilled Prawns'
    },
    badge: 'premium'
  },
  {
    id: 29,
    name: 'Spicy Goat Meat Stew',
    description: 'Hot goat meat stew cooked with peppers and herbs',
    price: '₦6,900',
    category: 'Soups',
    tags: ['Spicy', 'Meat', 'Stew'],
    rating: 4.8,
    reviews: 68,
    image: twentynine,
    chef: {
      name: 'Chef Amina',
      role: 'Soup Specialist',
      specialty: 'Traditional Soups',
      experience: '12 years',
      image: twentynine,
      whatsapp: '+2348034567890',
      message: 'Hello Chef Amina, I would like to order the Spicy Goat Meat Stew'
    },
    badge: 'chef'
  },
  {
    id: 30,
    name: 'Coconut Rice',
    description: 'Fragrant coconut rice cooked with veggies and spices',
    price: '₦4,900',
    category: 'Rice',
    tags: ['Rice', 'Healthy', 'Signature'],
    rating: 4.7,
    reviews: 78,
    image: thirty,
    chef: {
      name: 'Chef Grace',
      role: 'Rice Specialist',
      specialty: 'Fried Rice',
      experience: '7 years',
      image: thirty,
      whatsapp: '+2348078901234',
      message: 'Hello Chef Grace, I would like to order the Coconut Rice'
    },
    badge: 'popular'
  },
  {
    id: 31,
    name: 'Fisherman Soup',
    description: 'Seafood soup loaded with fish, prawns, and crab',
    price: '₦8,200',
    category: 'Soups',
    tags: ['Premium', 'Seafood', 'Soup'],
    rating: 4.9,
    reviews: 45,
    image: thirtyone,
    chef: {
      name: 'Chef Kunle',
      role: 'Seafood Expert',
      specialty: 'Seafood Soups',
      experience: '8 years',
      image: thirtyone,
      whatsapp: '+2348045678901',
      message: 'Hello Chef Kunle, I would like to order the Fisherman Soup'
    },
    badge: 'premium'
  },
  {
    id: 32,
    name: 'Boli & Groundnut',
    description: 'Roasted plantain served with groundnuts',
    price: '₦1,800',
    category: 'Sides',
    tags: ['Snack', 'Traditional', 'Popular'],
    rating: 4.6,
    reviews: 130,
    image: thirtytwo,
    chef: {
      name: 'Chef Funke',
      role: 'Side Dish Expert',
      specialty: 'Moi Moi & Beans',
      experience: '13 years',
      image: thirtytwo,
      whatsapp: '+2348090123456',
      message: 'Hello Chef Funke, I would like to order the Boli & Groundnut'
    },
    badge: 'popular'
  },
  {
    id: 33,
    name: 'Fried Yam & Sauce',
    description: 'Crispy fried yam served with spicy tomato sauce',
    price: '₦2,900',
    category: 'Sides',
    tags: ['Snack', 'Spicy', 'Yam'],
    rating: 4.7,
    reviews: 112,
    image: thirtythree,
    chef: {
      name: 'Chef Zainab',
      role: 'Snack Specialist',
      specialty: 'Shawarma & Wraps',
      experience: '6 years',
      image: thirtythree,
      whatsapp: '+2348101234567',
      message: 'Hello Chef Zainab, I would like to order the Fried Yam & Sauce'
    },
    badge: 'popular'
  },
  {
    id: 34,
    name: 'Abacha (African Salad)',
    description: 'Cassava flakes salad mixed with oil, fish, and spices',
    price: '₦4,200',
    category: 'Sides',
    tags: ['Traditional', 'Salad', 'Signature'],
    rating: 4.8,
    reviews: 58,
    image: thirtyfour,
    chef: {
      name: 'Chef Obinna',
      role: 'Igbo Delicacies',
      specialty: 'Nkwobi & Isi Ewu',
      experience: '14 years',
      image: thirtyfour,
      whatsapp: '+2348178901234',
      message: 'Hello Chef Obinna, I would like to order the Abacha (African Salad)'
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
            <Link to="/products" className="active-link" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/reserve" className="reserve-btn" onClick={() => setMobileMenuOpen(false)}>Reserve Table</Link>
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
          <div className="filter-search">
            <input
              type="text"
              placeholder="Search dishes or chefs..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <button>🔍</button>
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
                href="https://wa.me/2348012345678?text=Hello%20Chef%20Layla%2C%20I'd%20like%20to%20know%20more%20about%20your%20specials"
                target="_blank"
                rel="noopener noreferrer"
                className="chef-whatsapp"
              >
                📱 Chat with Chef Layla
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