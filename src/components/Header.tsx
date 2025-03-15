import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold">Doro Foods</h1>

      {/* Menü */}
      <nav className="hidden md:flex space-x-4">
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">
          Contact
        </Link>
      </nav>

      {/* Mobil Menü (İleride Eklenecek) */}
    </header>
  );
};

export default Header;
