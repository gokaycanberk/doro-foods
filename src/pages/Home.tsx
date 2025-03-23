import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />

      {/* Welcome Message */}
      <section className="text-center p-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to Doro Foods
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          As the exclusive distributor of Nature’s Garden, we deliver premium
          dried fruits, snacks, and mixes to 200+ trusted stores — combining
          speed, reliability, and retail-focused solutions.
        </p>
        <a href="/products">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-green-700 transition">
            View Products
          </button>
        </a>
      </section>

      {/* Info Icons Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <img
              src="/images/icon-published.png"
              alt="Established Icon"
              className="mx-auto h-20 mb-6"
            />
            <p className="font-semibold text-xl text-gray-800">
              Trusted, Partner-Focused Distributor
            </p>
            <p className="text-gray-600 text-base mt-3">
              The sole authorized distributor of Nature’s Garden in the region,
              we collaborate with top retailers to maintain seamless,
              transparent supply relationships built on trust and reliability.
            </p>
          </div>
          <div>
            <img
              src="/images/icon-delivery.png"
              alt="Secure Delivery Icon"
              className="mx-auto h-20 mb-6"
            />
            <p className="font-semibold text-xl text-gray-800">
              Secure & Timely Distribution Network
            </p>
            <p className="text-gray-600 text-base mt-3">
              Our products are delivered straight from the New Jersey production
              facility, through our central warehouse, ensuring controlled
              logistics, freshness, and consistent quality—7 days a week.
            </p>
          </div>
          <div>
            <img
              src="/images/icon-stats.png"
              alt="Growth Icon"
              className="mx-auto h-20 mb-6"
            />
            <p className="font-semibold text-xl text-gray-800">
              Strategic Growth Support
            </p>
            <p className="text-gray-600 text-base mt-3">
              With a strong presence in NY & NJ, we help supermarkets expand
              offerings through curated assortments, retail-focused consulting,
              and responsive fulfillment strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Description Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 py-20 max-w-7xl mx-auto gap-12">
        <img
          src="/images/delivery.jpeg"
          alt="Doro Foods Truck"
          className="w-full md:w-[55%] rounded-xl shadow-lg"
        />
        <div className="md:w-[45%]">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">
            Wholesale Distribution with Purpose
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            At Doro Foods, we do more than just deliver. We build lasting retail
            partnerships—bringing fresh, natural products from Nature’s Garden
            and other brands directly to store shelves. Backed by an agile
            distribution model and expert guidance, we ensure your business
            stays stocked and ahead.
          </p>
          <a href="/about">
            <button className="bg-[#34201a] text-white px-8 py-3 rounded-md hover:bg-[#241510] transition text-lg">
              Learn More
            </button>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 py-20 max-w-7xl mx-auto gap-12">
        <div className="md:w-[45%]">
          <h3 className="text-3xl font-bold text-[#34201a] mb-4">
            Tailored Services for Retail Success
          </h3>
          <p className="text-gray-600 text-base mb-6">
            Our experienced team works hand-in-hand with supermarket chains,
            grocery stores, and independent retailers to provide customized
            distribution, curated product recommendations, and full-service
            support. Whether launching a new store or expanding categories, we
            guide your growth with agility and precision.
          </p>

          <a href="/about">
            <button className="bg-[#34201a] text-white px-6 py-3 rounded-md hover:bg-[#241510] transition text-lg">
              Learn More
            </button>
          </a>
        </div>
        <img
          src="/images/service.jpeg"
          alt="Customer Service"
          className="w-full md:w-[55%] rounded-xl shadow-lg"
        />
      </section>

      {/* Brands Section */}
      <Brands />

      <Footer />
    </>
  );
};

export default Home;
