import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

const AnimatedRoutes = () => {
  const location = useLocation();
  useSmoothScroll();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <CartDrawer />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </CartProvider>
  );
}

export default App;
