import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCart } from '../context/CartContext';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { fadeInUpVariants } from '../animations/variants';

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const imageRef = useRef(null);

  const product = products.find((p) => p.id === parseInt(id));

  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 3);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-900 mb-4">
            Product not found
          </h1>
          <button
            onClick={() => navigate('/shop')}
            className="text-accent hover:underline"
          >
            Return to shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative overflow-hidden bg-sand-100 aspect-[3/4]"
            >
              <img
                ref={imageRef}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col justify-center"
            >
              <motion.div
                className="sticky top-32"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="font-serif text-4xl lg:text-5xl text-charcoal-900 mb-4">
                  {product.name}
                </h1>

                <p className="text-2xl text-charcoal-800 mb-8">
                  ${product.price}
                </p>

                <p className="text-lg text-charcoal-800 leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="text-sm text-charcoal-800 mb-12 space-y-2">
                  <p className="font-medium">Details:</p>
                  <p className="text-charcoal-800">{product.details}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm tracking-wide text-charcoal-800">
                      Quantity:
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center border border-sand-300 text-charcoal-800 hover:border-charcoal-900 transition-colors"
                      >
                        −
                      </button>
                      <span className="text-lg w-12 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center border border-sand-300 text-charcoal-800 hover:border-charcoal-900 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleAddToCart}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-charcoal-900 text-sand-50 text-sm tracking-widest hover:bg-accent transition-colors duration-300"
                  >
                    ADD TO CART
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {relatedProducts.length > 0 && (
            <section>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal-900 mb-4">
                  You May Also Like
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    index={index}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Product;
