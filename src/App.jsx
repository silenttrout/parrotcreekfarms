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
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-image">
          <img src="https://res.cloudinary.com/dmtu1daca/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738996049/20250122_235802223_iOS_jlvreu.jpg" alt="Parrot Creek Farms Meat" />
          <div className="hero-content">
            <h1 style={{ color: 'black' }}>Welcome to Parrot Creek Farms</h1>
            <p style={{ color: 'black' }}>Providing high-quality, sustainably raised meat.</p>
            <button>Order Now</button>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <h2>Our Meat Production Process</h2>
        <p>We focus on sustainable and ethical practices to produce the best meat.</p>
        {/* Add more details and visuals here */}
      </section>

      <section id="pricing" className="pricing-section">
        <h2>Pricing</h2>
        <p>Check out our competitive pricing.</p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Get in touch with us for any inquiries.</p>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>Learn more about our ranch and our values.</p>
      </section>

      <footer className="App-footer">
        <nav>
          <ul>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
