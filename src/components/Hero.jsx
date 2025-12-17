import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { textRevealVariants } from '../animations/variants';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const navigate = useNavigate();
  const bgRef = useRef(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.05,
        duration: 20,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-sand-100">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-sand-100 via-sand-200 to-sand-300 opacity-50"
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          <motion.h1
            custom={0}
            variants={textRevealVariants}
            className="font-serif text-6xl md:text-7xl lg:text-display text-charcoal-900 mb-6 leading-tight"
          >
            Where Elegance
            <br />
            Meets Everyday
          </motion.h1>
        </motion.div>

        <motion.p
          custom={1}
          variants={textRevealVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-charcoal-800 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Curated essentials for the mindful home. Each piece chosen for its
          beauty, craftsmanship, and timeless appeal.
        </motion.p>

        <motion.div
          custom={2}
          variants={textRevealVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={() => navigate('/shop')}
            className="group relative px-12 py-4 bg-charcoal-900 text-sand-50 text-sm tracking-widest overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0 bg-accent"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <span className="relative z-10">Explore Collection</span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-charcoal-800"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-[1px] h-12 bg-charcoal-800" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
