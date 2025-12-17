import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-sand-100 aspect-[3/4] mb-4">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-charcoal-900/10 flex items-center justify-center"
        >
          <motion.span
            initial={{ y: 10 }}
            animate={{ y: isHovered ? 0 : 10 }}
            className="text-sand-50 text-sm tracking-widest bg-charcoal-900 px-8 py-3"
          >
            VIEW DETAILS
          </motion.span>
        </motion.div>
      </div>

      <div className="space-y-2">
        <h3 className="font-serif text-xl text-charcoal-900 group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-charcoal-800">${product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
