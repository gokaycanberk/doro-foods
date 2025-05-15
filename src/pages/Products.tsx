import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <>
      <Header />
      <div className="h-20" />
      {/* <section className="text-center p-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Browse our selection of premium quality snacks, nuts, and dried
          fruits.
        </p>
      </section> */}
      <ProductList />
      <Footer />
    </>
  );
};

export default Products;
