import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Café</h3>
            <p>O melhor café do Brasil, direto das montanhas mineiras para sua mesa.</p>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Contato</h4>
            <div className="contact-info">
              <p>📞 (31) 9999-9999</p>
              <p>✉️ contato@cafeartesanal.com.br</p>
              <p>📍 Rua do Café, 123 - Minas Gerais</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Horário de Funcionamento</h4>
            <div className="hours">
              <p>Segunda a Sexta: 7h às 19h</p>
              <p>Sábado: 8h às 18h</p>
              <p>Domingo: 8h às 16h</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">📷 Instagram</a>
              <a href="#" className="social-link">🐦 Twitter</a>
              <a href="#" className="social-link">💼 LinkedIn</a>
            </div>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Café. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}