import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="text-center p-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Get in touch with us for any questions or inquiries.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
