import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { fadeInUpVariants } from '../animations/variants';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postal: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      clearCart();
      navigate('/');
      window.alert('Thank you for your order! This is a demo checkout.');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-32 flex items-center justify-center bg-sand-50">
          <div className="text-center">
            <h1 className="font-serif text-3xl text-charcoal-900 mb-4">
              Your cart is empty
            </h1>
            <button
              onClick={() => navigate('/shop')}
              className="text-accent hover:underline"
            >
              Continue shopping
            </button>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-sand-50">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="font-serif text-4xl lg:text-5xl text-charcoal-900 mb-16 text-center"
          >
            Checkout
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl text-charcoal-900 mb-8">
                Shipping Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-charcoal-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 bg-white text-charcoal-900 focus:border-charcoal-900 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-charcoal-800 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand-300 bg-white text-charcoal-900 focus:border-charcoal-900 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-charcoal-800 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand-300 bg-white text-charcoal-900 focus:border-charcoal-900 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-charcoal-800 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 bg-white text-charcoal-900 focus:border-charcoal-900 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-charcoal-800 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand-300 bg-white text-charcoal-900 focus:border-charcoal-900 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-charcoal-800 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postal"
                      value={formData.postal}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand-300 bg-white text-charcoal-900 focus:border-charcoal-900 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-charcoal-800 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 bg-white text-charcoal-900 focus:border-charcoal-900 focus:outline-none transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isProcessing}
                  whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                  whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                  className="w-full py-4 bg-charcoal-900 text-sand-50 text-sm tracking-widest hover:bg-accent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'PROCESSING...' : 'COMPLETE ORDER'}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-serif text-2xl text-charcoal-900 mb-8">
                Order Summary
              </h2>

              <div className="bg-white border border-sand-300 p-8 space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-sand-300 last:border-0 last:pb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-28 object-cover bg-sand-100"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-charcoal-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-charcoal-800 mb-2">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm text-charcoal-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-sand-300">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-charcoal-800">Subtotal</span>
                    <span className="text-charcoal-900">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-charcoal-800">Shipping</span>
                    <span className="text-charcoal-900">Free</span>
                  </div>
                  <div className="flex justify-between items-center text-xl pt-4 border-t border-sand-300">
                    <span className="font-serif text-charcoal-900">Total</span>
                    <span className="font-serif text-charcoal-900">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Checkout;
