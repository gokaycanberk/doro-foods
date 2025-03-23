import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <section className="text-center p-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Doro Foods is a leading distributor of premium quality snacks, nuts,
          and dried fruits. We are committed to delivering the best natural and
          organic products to supermarkets and stores.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
