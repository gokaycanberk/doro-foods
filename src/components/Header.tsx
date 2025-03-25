import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <div className="transition-all duration-300">
          <img
            src="/images/DORO-01.png"
            alt="Doro Foods Logo"
            className={`transition-all duration-300 ${
              scrolled ? "h-10" : "h-16"
            }`}
          />
        </div>

        {/* Menu */}
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
      </div>
    </header>
  );
};

export default Header;
