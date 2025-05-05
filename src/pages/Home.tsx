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
          <Link to="/products">
            <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white text-base sm:text-lg font-semibold rounded-md shadow-lg hover:bg-green-700 transition transform hover:scale-105 duration-300">
              Explore Our Products
            </button>
          </Link>
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
            Our Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-6 sm:gap-x-10 justify-items-center">
            {/* Category 1 */}
            <Link to="/products" className="flex flex-col items-center group">
              <img
                src="/images/products/dried-fruit.png"
                alt="Dried Fruit"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            {/* Category 2 */}
            <Link to="/products" className="flex flex-col items-center group">
              <img
                src="/images/products/nuts.png"
                alt="Nuts"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            {/* Category 3 */}
            <Link to="/products" className="flex flex-col items-center group">
              <img
                src="/images/products/trail-mixes.png"
                alt="Trail Mixes"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            {/* Category 4 */}
            <Link to="/products" className="flex flex-col items-center group">
              <img
                src="/images/products/snacks.png"
                alt="Snacks"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            {/* Category 5 */}
            <Link to="/products" className="flex flex-col items-center group">
              <img
                src="/images/products/candy.png"
                alt="Candy"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            {/* Category 6 */}
            <Link to="/products" className="flex flex-col items-center group">
              <img
                src="/images/products/chocolate-yogurt.png"
                alt="Chocolate & Yogurt"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            {/* Category 7 */}
            <Link to="/products" className="flex flex-col items-center group">
              <img
                src="/images/products/seeds-grains.png"
                alt="Seeds & Grains"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          </div>
          <p className="text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-10">
            Discover 300+ premium-quality products tailored to your business
            needs — from convenient retail-ready packs to flexible bulk &
            container solutions.
          </p>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section
        ref={statsRef}
        className="py-12 sm:py-20 bg-green-700 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
            Our Impact by the Numbers
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
                With a strong presence in NY & NJ, we help supermarkets and
                specialty stores grow through curated assortments, multi-brand
                offerings, and responsive fulfillment strategies.
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
          <Link to="/about">
            <button className="bg-white text-green-800 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-green-100 transition transform hover:scale-105 duration-300">
              Learn About Our Mission
            </button>
          </Link>
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
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-green-800 transition mb-4 sm:mb-0">
                Contact Our Team
              </button>
            </Link>
            <Link to="/products">
              <button className="w-full sm:w-auto bg-white text-green-700 border-2 border-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-green-50 transition">
                Browse Products
              </button>
            </Link>
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
