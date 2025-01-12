import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/our-story" onClick={closeMenu}>Our Story</Link>
        <Link to="/event-details" onClick={closeMenu}>Event Details</Link>
        <Link to="/rsvp" onClick={closeMenu}>RSVP</Link>
        <Link to="/travel" onClick={closeMenu}>Travel & Accommodation</Link>
        <Link to="/wedding-party" onClick={closeMenu}>Wedding Party</Link>
        <Link to="/registry" onClick={closeMenu}>Registry</Link>
        <Link to="/faqs" onClick={closeMenu}>FAQs</Link>
        <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;