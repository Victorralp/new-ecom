import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Header = () => {
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 bg-sand-50/80 backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-2xl tracking-tight text-charcoal-900 hover:text-accent transition-colors duration-300"
        >
          Elegante
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm tracking-wide transition-colors duration-300 ${
              isActive('/')
                ? 'text-accent font-medium'
                : 'text-charcoal-800 hover:text-accent'
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`text-sm tracking-wide transition-colors duration-300 ${
              isActive('/shop')
                ? 'text-accent font-medium'
                : 'text-charcoal-800 hover:text-accent'
            }`}
          >
            Shop
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-sm tracking-wide text-charcoal-800 hover:text-accent transition-colors duration-300 group"
          >
            Cart
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-3 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
