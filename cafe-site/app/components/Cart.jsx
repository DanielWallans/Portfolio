import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { items, total, isOpen, removeItem, updateQuantity, clearCart, toggleCart } = useCart();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="cart-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={toggleCart}
      >
        <motion.div 
          className="cart-sidebar"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="cart-header">
            <h2>Seu Carrinho</h2>
            <button className="close-cart" onClick={toggleCart}>
              ✕
            </button>
          </div>
          
          <div className="cart-content">
            {items.length === 0 ? (
              <div className="empty-cart">
                <p>Seu carrinho está vazio</p>
                <button onClick={toggleCart}>Continuar Comprando</button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id} 
                      className="cart-item"
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <img src={item.image} alt={item.name} />
                      
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>R$ {item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="item-total">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </div>
                      
                      <button 
                        className="remove-item"
                        onClick={() => removeItem(item.id)}
                      >
                        🗑️
                      </button>
                    </motion.div>
                  ))}
                </div>
                
                <div className="cart-footer">
                  <div className="cart-total">
                    <h3>Total: R$ {total.toFixed(2)}</h3>
                  </div>
                  
                  <div className="cart-actions">
                    <button 
                      className="clear-cart-button"
                      onClick={clearCart}
                    >
                      Limpar Carrinho
                    </button>
                    <button className="checkout-button">
                      Finalizar Pedido
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}