import { motion } from 'framer-motion';
import { fadeInUpVariants } from '../animations/variants';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-sand-50 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          <div>
            <h3 className="font-serif text-2xl mb-6">Elegante</h3>
            <p className="text-sand-300 leading-relaxed">
              Curated essentials for the mindful home. Quality over quantity,
              always.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-6 text-sand-200">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/shop"
                  className="text-sand-300 hover:text-sand-50 transition-colors"
                >
                  Shop All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sand-300 hover:text-sand-50 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sand-300 hover:text-sand-50 transition-colors"
                >
                  Journal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-6 text-sand-200">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sand-300 hover:text-sand-50 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sand-300 hover:text-sand-50 transition-colors"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sand-300 hover:text-sand-50 transition-colors"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-sand-300/20 pt-8">
          <p className="text-center text-sm text-sand-400">
            © {new Date().getFullYear()} Elegante. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
