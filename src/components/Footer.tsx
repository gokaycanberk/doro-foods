import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Navigation */}
        <div className="space-y-6">
          <img
            src="/images/DORO-01.png"
            alt="Doro Foods Logo"
            className="h-20 brightness-0 invert"
          />
          <nav className="space-x-4 text-sm tracking-wide uppercase">
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </nav>
        </div>

        {/* Catalog Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Need information about product catalog?
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/catalogs/packaged-products.pdf" target="_blank">
                Packaged Products
              </a>
            </li>
            <li>
              <a href="/catalogs/tubs-program.pdf" target="_blank">
                Tubs Program
              </a>
            </li>
            <li>
              <a href="/catalogs/bulk-program.pdf" target="_blank">
                Bulk Program
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-sm space-y-4">
          <h2 className="text-xl font-bold tracking-wider">New Jersey</h2>
          <p>
            2 Main Street
            <br />
            Ridgefield Park, NJ 07660
          </p>
          <p>info@dorofoods.com</p>
          <p>+1 (347) 592-4494</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-xs text-gray-400 mt-10 text-center">
        © 2025 Doro Foods LLC | Ridgefield Park, New Jersey
      </div>
    </footer>
  );
};

export default Footer;
