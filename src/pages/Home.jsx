import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import PageTransition from '../components/PageTransition';
import { products } from '../data/products';
import { fadeInUpVariants } from '../animations/variants';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const featuredProducts = products.slice(0, 3);
  const parallaxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (parallaxRef.current && textRef.current) {
      gsap.to(parallaxRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />

        <section className="py-32 px-6 lg:px-12 bg-sand-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-center mb-20"
            >
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 mb-6">
                Featured Collection
              </h2>
              <p className="text-lg text-charcoal-800 max-w-2xl mx-auto leading-relaxed">
                Handpicked pieces that embody our philosophy of simple beauty
                and lasting quality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-32 overflow-hidden bg-sand-100">
          <div
            ref={parallaxRef}
            className="absolute inset-0 bg-gradient-to-b from-sand-200 to-sand-100 opacity-50"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <div ref={textRef}>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 mb-8">
                Designed for Living
              </h2>
              <p className="text-lg text-charcoal-800 leading-relaxed mb-12">
                We believe in the power of thoughtful design to elevate everyday
                moments. Every item in our collection is chosen for its ability
                to bring quiet joy to your daily rituals.
              </p>
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-12 py-4 border border-charcoal-900 text-charcoal-900 text-sm tracking-widest hover:bg-charcoal-900 hover:text-sand-50 transition-all duration-300"
              >
                VIEW ALL PRODUCTS
              </motion.a>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-12 bg-charcoal-900 text-sand-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                className="text-center"
              >
                <div className="text-4xl font-serif mb-4">01</div>
                <h3 className="text-xl font-serif mb-3">Curated Selection</h3>
                <p className="text-sand-300 leading-relaxed">
                  Each product is carefully selected for its craftsmanship and
                  timeless design.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-serif mb-4">02</div>
                <h3 className="text-xl font-serif mb-3">Sustainable</h3>
                <p className="text-sand-300 leading-relaxed">
                  We partner with makers who share our commitment to ethical
                  production.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-serif mb-4">03</div>
                <h3 className="text-xl font-serif mb-3">Made to Last</h3>
                <p className="text-sand-300 leading-relaxed">
                  Quality over quantity. Items designed to age gracefully with
                  you.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
