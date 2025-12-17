import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { slideInRightVariants } from '../animations/variants';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />

          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-full max-w-md bg-sand-50 z-50 shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-sand-300">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl text-charcoal-900">
                  Your Cart
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-charcoal-800 hover:text-charcoal-900 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-charcoal-800 mb-4">Your cart is empty</p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/shop');
                    }}
                    className="text-accent text-sm tracking-wide hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-32 object-cover bg-sand-100"
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-lg text-charcoal-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-charcoal-800">
                            ${item.price}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center border border-sand-300 text-charcoal-800 hover:border-charcoal-800 transition-colors"
                            >
                              −
                            </button>
                            <span className="text-sm w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center border border-sand-300 text-charcoal-800 hover:border-charcoal-800 transition-colors"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-charcoal-800 hover:text-charcoal-900 tracking-wide"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-sand-300 p-8 space-y-6">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-charcoal-800">Total</span>
                  <span className="font-serif text-2xl text-charcoal-900">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <motion.button
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-charcoal-900 text-sand-50 text-sm tracking-widest hover:bg-accent transition-colors duration-300"
                >
                  PROCEED TO CHECKOUT
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
