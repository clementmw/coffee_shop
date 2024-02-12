import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './component/About';
import Contact from './component/Contact';
import Review from './component/Review';
import './input.css';
import Purchase from './component/Purchase';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav className='bg-yellow-950'>
        <li>
          <Link to="/" onClick={() => scrollToSection('home')}>
            Home
          </Link>
        </li>
        <Link to="/about_us" onClick={() => scrollToSection('about')}>
          About Us
        </Link>
        <Link to="/contact_us" onClick={() => scrollToSection('contact')}>
          Contact Us
        </Link>
        <Link to="/review" onClick={() => scrollToSection('review')}>
          Review
        </Link>
        <Link to="/purchase" onClick={() => scrollToSection('purchase')}>
          Purchase
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home id="home" />} />
        <Route path="/about_us" element={<About id="about" />} />
        <Route path="/contact_us" element={<Contact id="contact" />} />
        <Route path="/review" element={<Review id="review" />} />
        <Route path="/purchase" element={<Purchase id="purchase" />} />
      </Routes>
    </div>
  );
}

export default App;
