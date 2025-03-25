import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full z-0">
        <img
          src="/images/about-hero.jpeg"
          alt="About Doro Foods"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-left px-80">
          <h1 className="text-white text-4xl font-bold">About Doro Foods</h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <p className="mb-6 text-lg leading-8">
          Since 2010, Doro Foods has proudly served as a trusted distributor,
          specializing in delivering freshness directly from production to
          shelves. Headquartered in Ridgefield Park, New Jersey, we are the
          exclusive distribution partner for Nature’s Garden, a leading producer
          renowned for premium quality dried fruits, nuts, snacks, and healthy
          food alternatives.
        </p>

        <p className="mb-6 text-lg leading-8">
          At Doro Foods, quality is not just a standard—it's our promise. We
          partner exclusively with reputable manufacturers and producers,
          ensuring our clients receive fresh, top-tier products consistently.
          Our close collaboration with Nature’s Garden, combined with our
          network of other esteemed producers, allows us to offer a diverse and
          innovative product portfolio.
        </p>

        <p className="mb-6 text-lg leading-8">
          Recognizing that supermarkets depend on precision, reliability, and
          freshness, we utilize advanced logistical systems and
          temperature-controlled distribution methods to ensure every delivery
          meets our stringent standards. Our dedicated team works diligently,
          ensuring timely and accurate fulfillment to over 200 supermarket
          locations throughout New York, Brooklyn, and beyond.
        </p>

        <p className="text-lg leading-8">
          Our mission is clear: To continuously elevate and innovate our
          distribution services, providing unbeatable freshness, dependable
          logistics, and strategic partnerships. At Doro Foods, we don’t just
          deliver products—we deliver success, freshness, and confidence
          directly to your shelves.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
