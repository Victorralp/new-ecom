import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import PageTransition from '../components/PageTransition';
import { products } from '../data/products';
import { fadeInUpVariants } from '../animations/variants';

const Shop = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'home', label: 'Home' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'apparel', label: 'Apparel' },
  ];

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl lg:text-6xl text-charcoal-900 mb-6">
              Our Collection
            </h1>
            <p className="text-lg text-charcoal-800 max-w-2xl mx-auto leading-relaxed">
              Explore our carefully curated selection of essential pieces for
              mindful living.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center gap-6 mb-16 flex-wrap"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-8 py-3 text-sm tracking-widest transition-all duration-300 ${
                  filter === category.value
                    ? 'bg-charcoal-900 text-sand-50'
                    : 'border border-sand-300 text-charcoal-800 hover:border-charcoal-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Shop;
