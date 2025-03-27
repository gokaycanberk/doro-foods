import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <div className="transition-all duration-300">
          <Link to="/">
            <img
              src="/images/DORO-01.png"
              alt="Doro Foods Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-10" : "h-16"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-lg font-medium ${
              location.pathname === "/" ? "text-green-600" : "text-gray-700"
            } hover:text-gray-900`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-lg font-medium ${
              location.pathname === "/products"
                ? "text-green-600"
                : "text-gray-700"
            } hover:text-gray-900`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`text-lg font-medium ${
              location.pathname === "/about"
                ? "text-green-600"
                : "text-gray-700"
            } hover:text-gray-900`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-lg font-medium ${
              location.pathname === "/contact"
                ? "text-green-600"
                : "text-gray-700"
            } hover:text-gray-900`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 rounded-md focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${
              menuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${
              menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 flex flex-col md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } pt-20 px-6`}
      >
        <nav className="flex flex-col space-y-6 items-center mt-10">
          <Link
            to="/"
            className={`text-xl font-medium w-full text-center py-3 ${
              location.pathname === "/"
                ? "text-green-600 bg-green-50 rounded-md"
                : "text-gray-800"
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-xl font-medium w-full text-center py-3 ${
              location.pathname === "/products"
                ? "text-green-600 bg-green-50 rounded-md"
                : "text-gray-800"
            }`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`text-xl font-medium w-full text-center py-3 ${
              location.pathname === "/about"
                ? "text-green-600 bg-green-50 rounded-md"
                : "text-gray-800"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-xl font-medium w-full text-center py-3 ${
              location.pathname === "/contact"
                ? "text-green-600 bg-green-50 rounded-md"
                : "text-gray-800"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="mt-auto mb-10 text-center">
          <p className="text-gray-500 mb-2">Get in touch</p>
          <a
            href="tel:+13475924494"
            className="block text-green-600 font-semibold hover:text-green-800"
          >
            +1 (347) 592-4494
          </a>
          <a
            href="mailto:info@dorofoods.com"
            className="block text-green-600 font-semibold hover:text-green-800 mt-1"
          >
            info@dorofoods.com
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
