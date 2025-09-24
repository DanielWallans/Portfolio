import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Cart />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <About />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;