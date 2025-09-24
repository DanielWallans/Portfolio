import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Nossa História</h2>
            <p>
              Há mais de 20 anos, nossa família se dedica ao cultivo e preparo do melhor café artesanal. 
              Nascemos nas montanhas de Minas Gerais, onde o clima e o solo proporcionam condições únicas 
              para o desenvolvimento de grãos excepcionais.
            </p>
            <p>
              Cada grão é cuidadosamente selecionado e torrado na hora, preservando todos os aromas e 
              sabores que fazem do nosso café uma experiência única. Nossa paixão pelo café se reflete 
              em cada xícara que servimos.
            </p>
            <p>
              Do campo à sua mesa, mantemos o compromisso com a qualidade, sustentabilidade e o amor 
              pela tradição cafeeira brasileira. Venha descobrir o verdadeiro sabor do café artesanal.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <h4>🌱 100% Orgânico</h4>
                <p>Cultivado sem agrotóxicos</p>
              </div>
              <div className="feature">
                <h4>🔥 Torrado na Hora</h4>
                <p>Frescor garantido</p>
              </div>
              <div className="feature">
                <h4>⭐ Qualidade Premium</h4>
                <p>Grãos selecionados</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop" 
              alt="Grãos de café sendo torrados"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}