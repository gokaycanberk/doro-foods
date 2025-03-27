import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="/images/about-hero.jpeg"
          alt="About Doro Foods"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex flex-col items-start justify-center px-6 sm:px-12 md:px-20 lg:px-32">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              About Doro Foods
            </h1>
            <p className="text-gray-100 text-lg sm:text-xl max-w-2xl animate-fade-in-delayed">
              Delivering premium quality and reliability since 2017. The
              exclusive distributor of Nature's Garden in the NY & NJ region.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-8 py-4">
            <button
              onClick={() => setActiveTab("mission")}
              className={`whitespace-nowrap px-3 py-2 font-medium text-lg transition-colors ${
                activeTab === "mission"
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("values")}
              className={`whitespace-nowrap px-3 py-2 font-medium text-lg transition-colors ${
                activeTab === "values"
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Our Values
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Mission Section */}
        {activeTab === "mission" && (
          <div className="animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our mission is clear: To continuously elevate and innovate our
                  distribution services, providing unbeatable freshness,
                  dependable logistics, and strategic partnerships.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Doro Foods, we don't just deliver products—we deliver
                  success, freshness, and confidence directly to your shelves.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <img
                  src="/images/about-mission.jpeg"
                  alt="Our Mission"
                  className="rounded-lg shadow-xl w-full h-auto object-cover transform transition-all duration-500 hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg">
                  <span className="text-2xl font-bold">Est. 2017</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Values Section */}
        {activeTab === "values" && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Value Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="h-3 bg-green-600"></div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Quality First
                  </h3>
                  <p className="text-gray-600">
                    At Doro Foods, quality is not just a standard—it's our
                    promise. We partner exclusively with reputable manufacturers
                    and producers, ensuring our clients receive fresh, top-tier
                    products consistently.
                  </p>
                </div>
              </div>

              {/* Value Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="h-3 bg-yellow-500"></div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Reliability
                  </h3>
                  <p className="text-gray-600">
                    We recognize that supermarkets depend on precision,
                    reliability, and freshness. Our advanced logistical systems
                    and temperature-controlled distribution methods ensure every
                    delivery meets our stringent standards.
                  </p>
                </div>
              </div>

              {/* Value Card 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="h-3 bg-blue-500"></div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Partnership
                  </h3>
                  <p className="text-gray-600">
                    Our close collaboration with Nature's Garden, combined with
                    our network of other esteemed producers, allows us to offer
                    a diverse and innovative product portfolio. We believe in
                    growing together with our partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Partner with Doro Foods?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our growing family of retailers and experience the Doro Foods
            difference in quality and service.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-green-700 font-bold rounded-md text-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;

// Add to your CSS or tailwind.config.js
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.7s ease-out forwards;
}

.animate-fade-in-delayed {
  animation: fadeIn 0.7s ease-out 0.3s forwards;
  opacity: 0;
}
*/
