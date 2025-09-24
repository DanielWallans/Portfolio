import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const { items, toggleCart } = useCart();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Café</h1>
          </div>
          
          <nav className="nav">
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#produtos" onClick={() => scrollToSection('produtos')}>Produtos</a></li>
              <li><a href="#sobre" onClick={() => scrollToSection('sobre')}>Sobre</a></li>
              <li><a href="#contato" onClick={() => scrollToSection('contato')}>Contato</a></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button 
              className="cart-button"
              onClick={toggleCart}
            >
              🛒 Carrinho ({items.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
            <button className="cta-button">
              Peça Agora
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}