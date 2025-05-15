import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Brands from "../components/Brands";

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const statsRef = useRef(null);
  const [counters, setCounters] = useState({
    retailers: 0,
    products: 0,
    years: 0,
    states: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animasyonlu sayaçlar için
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const startCounting = () => {
    const duration = 2000; // ms
    const steps = 60;
    const stepTime = duration / steps;

    const targetValues = {
      retailers: 200,
      products: 250,
      years: 8,
      states: 2,
    };

    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);

      setCounters({
        retailers: Math.floor(progress * targetValues.retailers),
        products: Math.floor(progress * targetValues.products),
        years: Math.floor(progress * targetValues.years),
        states: Math.floor(progress * targetValues.states),
      });

      if (step >= steps) {
        clearInterval(interval);
      }
    }, stepTime);
  };

  return (
    <>
      <Header />
      <Slider />

      {/* Welcome Message with Animated Background */}
      <section className="relative overflow-hidden py-12 sm:py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white opacity-70"></div>
        <div className="relative z-10 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Welcome to <span className="text-green-700">Doro Foods</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
            Doro Foods is your trusted partner for premium snacks, dried fruits,
            nuts, and more—offering a curated selection from multiple leading
            brands. We supply 200+ stores with a diverse portfolio, fast
            logistics, and tailored retail solutions.
          </p>
          <button
            onClick={() => {
              const productSection = document.getElementById("product-section");
              if (productSection) {
                productSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white text-base sm:text-lg font-semibold rounded-md shadow-lg hover:bg-green-700 transition transform hover:scale-105 duration-300"
          >
            Explore Our Products
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute -left-10 top-10 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-yellow-200 opacity-40 animate-float"></div>
        <div className="absolute right-10 sm:right-20 top-40 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-green-300 opacity-30 animate-float-delayed"></div>
        <div className="absolute left-1/4 bottom-10 w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-red-200 opacity-40 animate-float-slow"></div>
      </section>

      {/* Our Products Section - 7 Categories, circular images, no labels, larger, with description and links */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 tracking-tight">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-6 sm:gap-x-10 justify-items-center">
            {/* Category 1 */}
            <div className="flex flex-col items-center group">
              <img
                src="/images/products/dried-fruit.png"
                alt="Dried Fruit"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            {/* Category 2 */}
            <div className="flex flex-col items-center group">
              <img
                src="/images/products/nuts.png"
                alt="Nuts"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            {/* Category 3 */}
            <div className="flex flex-col items-center group">
              <img
                src="/images/products/trail-mixes.png"
                alt="Trail Mixes"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            {/* Category 4 */}
            <div className="flex flex-col items-center group">
              <img
                src="/images/products/snacks.png"
                alt="Snacks"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            {/* Category 5 */}
            <div className="flex flex-col items-center group">
              <img
                src="/images/products/candy.png"
                alt="Candy"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            {/* Category 6 */}
            <div className="flex flex-col items-center group">
              <img
                src="/images/products/chocolate-yogurt.png"
                alt="Chocolate & Yogurt"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            {/* Category 7 */}
            <div className="flex flex-col items-center group">
              <img
                src="/images/products/seeds-grains.png"
                alt="Seeds & Grains"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section id="product-section" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            What We Distribute
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
            We are distributing extensive range of premium food products,
            available in various packaging options to meet your business needs.
          </p>

          {/* 3-Panel Display: Bulk, Package, Tubs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-0 mb-12">
            {/* Bulk Card */}
            <div className="relative group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl w-full shadow-md">
              <div className="aspect-[3/4] relative">
                <img
                  src="/images/products/ads1-min.jpeg"
                  alt="Bulk Program"
                  className="w-full h-full object-cover scale-100 transition-transform duration-700 filter brightness-[0.95] contrast-[1.05] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">
                    Bulk Program
                  </h2>
                  <p className="text-sm sm:text-base text-white/95 drop-shadow-md">
                    Ideal for food service and specialty retailers
                  </p>
                </div>
              </div>
            </div>

            {/* Package Card */}
            <div className="relative group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl w-full shadow-md">
              <div className="aspect-[3/4] relative">
                <img
                  src="/images/products/packaged.jpeg"
                  alt="Package Products"
                  className="w-full h-full object-cover scale-100 transition-transform duration-700 filter brightness-[0.97] contrast-[1.03] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">
                    Packaged Products
                  </h2>
                  <p className="text-sm sm:text-base text-white/95 drop-shadow-md">
                    Best quality snacks in convenient packages
                  </p>
                </div>
              </div>
            </div>

            {/* Tubs Card */}
            <div className="relative group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl w-full shadow-md">
              <div className="aspect-[3/4] relative">
                <img
                  src="/images/products/tubscropped.jpg"
                  alt="Tubs Program"
                  className="w-full h-full object-cover scale-100 transition-transform duration-700 filter brightness-[0.95] contrast-[1.05] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">
                    Tubs Program
                  </h2>
                  <p className="text-sm sm:text-base text-white/95 drop-shadow-md">
                    Perfect for retail and self-service displays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section
        id="about-section"
        ref={statsRef}
        className="py-12 sm:py-20 bg-green-700 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
            About Doro Foods by the Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 text-center">
            <div className="transform transition duration-500 hover:scale-105 p-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {counters.retailers}+
              </div>
              <div className="text-base sm:text-lg md:text-xl opacity-80">
                Retail Partners
              </div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 p-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {counters.products}+
              </div>
              <div className="text-base sm:text-lg md:text-xl opacity-80">
                Product Varieties
              </div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 p-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {counters.years}+
              </div>
              <div className="text-base sm:text-lg md:text-xl opacity-80">
                Years of Excellence
              </div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 p-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {counters.states}
              </div>
              <div className="text-base sm:text-lg md:text-xl opacity-80">
                States Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Icons Section - Modernized */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">
            Why Choose Doro Foods
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <img
                src="/images/icon-published.png"
                alt="Established Icon"
                className="h-12 sm:h-16 mb-4 sm:mb-6"
              />
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3">
                Trusted, Partner-Focused Distributor
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                We bring together a wide range of top brands under one roof,
                providing retailers with seamless access to the best in snacks,
                dried fruits, nuts, and more. Our focus is on quality, variety,
                and reliable partnerships.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <img
                src="/images/icon-delivery.png"
                alt="Secure Delivery Icon"
                className="h-12 sm:h-16 mb-4 sm:mb-6"
              />
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3">
                Secure & Timely Distribution Network
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our products are delivered quickly and safely from our central
                warehouse, ensuring freshness and consistent quality—7 days a
                week. We support both retail-ready and bulk solutions for every
                business need.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <img
                src="/images/icon-stats.png"
                alt="Growth Icon"
                className="h-12 sm:h-16 mb-4 sm:mb-6"
              />
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3">
                Strategic Growth Support
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                With a strong presence in Tri-State Area, we help supermarkets 
                and specialty stores grow through curated assortments,
                multi-brand offerings, and responsive fulfillment strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className="relative py-20 sm:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/about-hero.jpeg')`,
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Wholesale Distribution with Purpose
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
            At Doro Foods, we do more than just deliver. We build lasting retail
            partnerships—bringing a diverse range of premium brands and products
            directly to store shelves. Our mission is to empower your business
            with quality, choice, and reliability.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3">
            What Our Partners Say
          </h2>
          <p className="text-gray-600 text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
            Trusted by leading retailers across multiple states
          </p>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-5 -left-5 w-10 sm:w-12 h-10 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl">
                "
              </div>
              <p className="text-gray-600 italic mb-4 sm:mb-6 text-sm sm:text-base">
                Doro Foods has consistently provided our chain with premium
                products and exceptional service. Their dedication to quality
                and reliable delivery has made them an invaluable partner in our
                growth strategy.
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-gray-800">John Miller</div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Purchasing Manager, SuperFresh Market
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-5 -left-5 w-10 sm:w-12 h-10 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl">
                "
              </div>
              <p className="text-gray-600 italic mb-4 sm:mb-6 text-sm sm:text-base">
                Working with Doro Foods has transformed our snack section's
                performance. Their market insights and attention to detail in
                distribution have significantly increased our customer
                satisfaction and sales in this category.
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-gray-800">
                    Sarah Johnson
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Store Director, Fresh Value
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section with Enhanced Styling */}
      <Brands />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
            Join our growing network of retail partners and experience the Doro
            Foods difference
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                const contactSection =
                  document.getElementById("contact-section");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-green-800 transition mb-4 sm:mb-0"
            >
              Contact Our Team
            </button>
            <button
              onClick={() => {
                const productSection =
                  document.getElementById("product-section");
                if (productSection) {
                  productSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto bg-white text-green-700 border-2 border-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-green-50 transition"
            >
              Browse Products
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Let's connect! Whether you have questions about our products or
              want to discuss partnership opportunities, we're here to help.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left Side - Contact Info */}
              <div className="space-y-10">
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Whether you're a supermarket manager, retail buyer, or
                    distributor, we're here to help. Reach out for exclusive
                    pricing, product catalogs, and tailored wholesale solutions.
                  </p>

                  <div className="space-y-6 text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Address</p>
                        <p>2 Main St, Ridgefield Park, NJ 07660</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a
                          href="tel:+13475924494"
                          className="text-green-600 hover:text-green-700 transition"
                        >
                          +1 (347) 592-4494
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a
                          href="mailto:info@dorofoods.com"
                          className="text-green-600 hover:text-green-700 transition"
                        >
                          info@dorofoods.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Simple Contact Form */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 animate-fade-in">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
                  Send a Message
                </h3>
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 text-white rounded-md font-medium text-base transition bg-green-600 hover:bg-green-700"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

// Add these styles to your CSS or Tailwind config
/*
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}
*/
