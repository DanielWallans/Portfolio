import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { useCart, type Product } from '../contexts/CartContext';

const products: Product[] = [
  {
    id: 1,
    name: 'Café Expresso Tradicional',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    description: 'Blend especial com notas de chocolate e caramelo'
  },
  {
    id: 2,
    name: 'Café Gourmet Premium',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop',
    description: 'Grãos selecionados das melhores fazendas do Brasil'
  },
  {
    id: 3,
    name: 'Café Orgânico',
    price: 19.90,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    description: 'Cultivado sem agrotóxicos, sabor puro e natural'
  },
  {
    id: 4,
    name: 'Café Especial Torrado',
    price: 22.90,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    description: 'Torra média, ideal para métodos de preparo especiais'
  },
  {
    id: 5,
    name: 'Café Moído Fino',
    price: 17.90,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop',
    description: 'Moagem perfeita para cafeteira italiana'
  },
  {
    id: 6,
    name: 'Café em Grãos Premium',
    price: 26.90,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
    description: 'Grãos inteiros para você moer na hora'
  }
];

export default function Products() {
  const { addItem } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <section id="produtos" className="products">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Nossos Produtos</h2>
          <p>Descubra nossa seleção especial de cafés artesanais</p>
        </motion.div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">
                  R$ {product.price.toFixed(2)}
                </div>
                
                <motion.button 
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(product)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Adicionar ao Carrinho
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}