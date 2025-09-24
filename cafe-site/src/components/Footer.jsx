import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EmailIcon, LocationIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from './Icons';

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
              <p><PhoneIcon size={16} /> (31) 9999-9999</p>
              <p><EmailIcon size={16} /> contato@cafeartesanal.com.br</p>
              <p><LocationIcon size={16} /> Rua do Café, 123 - Minas Gerais</p>
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
              <a href="#" className="social-link"><FacebookIcon size={16} /> Facebook</a>
              <a href="#" className="social-link"><InstagramIcon size={16} /> Instagram</a>
              <a href="#" className="social-link"><TwitterIcon size={16} /> Twitter</a>
              <a href="#" className="social-link"><LinkedInIcon size={16} /> LinkedIn</a>
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