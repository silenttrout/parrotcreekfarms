import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-image">
          <img src="https://res.cloudinary.com/dmtu1daca/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738996049/20250122_235802223_iOS_jlvreu.jpg" alt="Parrot Creek Farms Meat" />
        </div>
        <div className="hero-content">
          <h1>Welcome to Parrot Creek Farms</h1>
          <p>Experience the taste of high-quality, sustainably raised meat. From our farm to your table, we ensure ethical practices and the finest cuts.</p>
          <button>Explore Our Products</button>
        </div>
      </section>

      <section id="process" className="process-section">
        <h2>Our Meat Production Process</h2>
        <p>At Parrot Creek Farms, we believe in sustainable and ethical practices. Our animals are raised in a free-range environment, fed with natural diets, and treated with the utmost care. This results in healthier animals and better-tasting meat.</p>
        <ul>
          <li><strong>Step 1:</strong> Ethical Animal Raising</li>
          <li><strong>Step 2:</strong> Natural Feeding</li>
          <li><strong>Step 3:</strong> Sustainable Farming</li>
          <li><strong>Step 4:</strong> Quality Meat Processing</li>
        </ul>
      </section>

      <section id="pricing" className="pricing-section">
        <h2>Our Pricing</h2>
        <p>We offer competitive pricing for our high-quality meats. Below is a sample of our pricing. Contact us for bulk orders and special requests.</p>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price per Pound</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Grass-Fed Beef</td>
              <td>$12.99</td>
            </tr>
            <tr>
              <td>Pasture-Raised Chicken</td>
              <td>$7.99</td>
            </tr>
            <tr>
              <td>Heritage Pork</td>
              <td>$9.99</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or want to place an order? Get in touch with us today!</p>
        <address>
          Parrot Creek Farms<br />
          123 Farm Road, Anytown, USA<br />
          Phone: (555) 123-4567<br />
          Email: <a href="mailto:info@parrotcreekfarms.com">info@parrotcreekfarms.com</a>
        </address>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>Parrot Creek Farms is a family-owned ranch dedicated to providing the highest quality, sustainably raised meats. Our passion for ethical farming and animal welfare is at the heart of everything we do.</p>
        <p>We believe in transparency and are committed to sharing our farming practices with our customers. Visit our farm and see the difference for yourself!</p>
      </section>

      <footer className="App-footer">
        <nav>
          <ul>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
        <p>&copy; 2024 Parrot Creek Farms. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
