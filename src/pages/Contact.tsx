import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative h-[400px] w-full">
        <img
          src="/images/contact-hero.png"
          alt="Contact Doro Foods"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent flex items-center justify-center z-10">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-wide">
            Let’s Partner
          </h1>
        </div>
      </div>

      {/* Contact Info */}
      <section className="py-20 px-6 md:px-20 lg:px-40 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Bring New Products to Your Shelves?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're a supermarket manager, retail buyer, or
              distributor, we're here to help. Reach out for exclusive pricing,
              product catalogs, and tailored wholesale solutions.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p>2 Main St, Ridgefield Park, NJ 07660</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">☎️</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+13475924494" className="text-green-600">
                    +1 (347) 592-4494
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:info@dorofoods.com"
                    className="text-green-600"
                  >
                    info@dorofoods.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Catalog Boxes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              For Catalog Access
            </h3>
            <div className="space-y-4">
              <a
                href="/catalogs/packaged-products.pdf"
                target="_blank"
                className="block bg-white border border-green-100 hover:border-green-400 rounded-md px-6 py-4 text-green-700 font-medium text-center shadow-sm hover:shadow-md transition"
              >
                📦 Packaged Products
              </a>
              <a
                href="/catalogs/tubs-program.pdf"
                target="_blank"
                className="block bg-white border border-green-100 hover:border-green-400 rounded-md px-6 py-4 text-green-700 font-medium text-center shadow-sm hover:shadow-md transition"
              >
                🥜 Tubs Program
              </a>
              <a
                href="/catalogs/bulk-program.pdf"
                target="_blank"
                className="block bg-white border border-green-100 hover:border-green-400 rounded-md px-6 py-4 text-green-700 font-medium text-center shadow-sm hover:shadow-md transition"
              >
                🧺 Bulk Program
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <div className="w-full h-[400px] overflow-hidden rounded-md shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9374161014137!2d-74.0250555236859!3d40.8571982713688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f744918b1439%3A0x99a219d68903d294!2s2%20Main%20St%2C%20Ridgefield%20Park%2C%20NJ%2007660!5e0!3m2!1sen!2sus!4v1711309301425"
          className="w-full h-full border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
