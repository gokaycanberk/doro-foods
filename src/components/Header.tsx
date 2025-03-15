import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-0 flex justify-between items-center">
      {/* Logo */}
      <div>
        <img src="/images/DORO-01.png" alt="Doro Foods Logo" className="h-18" />
      </div>

      {/* Menü */}
      <nav className="hidden md:flex space-x-8">
        <Link
          to="/"
          className="text-lg font-medium text-gray-700 hover:text-gray-900"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg font-medium text-gray-700 hover:text-gray-900"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-lg font-medium text-gray-700 hover:text-gray-900"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
