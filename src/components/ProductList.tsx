import ProductCard from "./ProductCard";
import { useState } from "react";

interface Product {
  name: string;
  brand: string;
  category: string;
  image: string;
  price: string;
  upc: string;
  item_code: string;
  size: string;
  case_pack: number;
  case_price: string;
}

const allProducts = [
  {
    name: "Apricots - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "DRIED FRUITS",
    image: "/images/products/apricot.jpeg",
    price: "$3.75",
    upc: "846548089073",
    item_code: "8907",
    size: "12 oz",
    case_pack: 6,
    case_price: "$22.50",
  },
  {
    name: "Prunes - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "DRIED FRUITS",
    image: "/images/products/prunes.jpeg",
    price: "$3.75",
    upc: "846548089080",
    item_code: "8908",
    size: "12 oz",
    case_pack: 6,
    case_price: "$22.50",
  },
  {
    name: "Dates - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "DRIED FRUITS",
    image: "/images/products/dates.jpeg",
    price: "$3.75",
    upc: "846548089264",
    item_code: "8926",
    size: "12 oz",
    case_pack: 6,
    case_price: "$22.50",
  },
  {
    name: "Raisins - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "DRIED FRUITS",
    image: "/images/products/Raisins.jpeg",
    price: "$3.75",
    upc: "846548089059",
    item_code: "8905",
    size: "12 oz",
    case_pack: 6,
    case_price: "$22.50",
  },
  {
    name: "Cranberries - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "DRIED FRUITS",
    image: "/images/products/cranberries.jpeg",
    price: "$3.75",
    upc: "846548089066",
    item_code: "8906",
    size: "12 oz",
    case_pack: 6,
    case_price: "$22.50",
  },

  // MIXES
  {
    name: "Keto Deluxe Mix - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "MIXES",
    image: "/images/products/ketodeluxe.jpg",
    price: "$4.50",
    upc: "846548088595",
    item_code: "8859",
    size: "8 oz",
    case_pack: 6,
    case_price: "$27.00",
  },
  {
    name: "Keto Coconut Mix - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "MIXES",
    image: "/images/products/ketochoconutmix.jpeg",
    price: "$4.50",
    upc: "846548088656",
    item_code: "8865",
    size: "8 oz",
    case_pack: 6,
    case_price: "$27.00",
  },
  {
    name: "Omega-3 Deluxe Mix - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "MIXES",
    image: "/images/products/OMEGA3MultipackX7.png",
    price: "$4.50",
    upc: "846548088571",
    item_code: "8857",
    size: "10 oz",
    case_pack: 6,
    case_price: "$27.00",
  },
  {
    name: "Omega Power Mix - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "MIXES",
    image: "/images/products/omegapowermix.png",
    price: "$4.50",
    upc: "846548088557",
    item_code: "8855",
    size: "10 oz",
    case_pack: 6,
    case_price: "$27.00",
  },
  {
    name: "Immune Booster Mix - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "MIXES",
    image: "/images/products/immunebooster.jpg",
    price: "$4.50",
    upc: "846548089042",
    item_code: "8904",
    size: "10 oz",
    case_pack: 6,
    case_price: "$27.00",
  },
  {
    name: "Mega Immune Mix - Probiotic",
    brand: "NATURE'S GARDEN",
    category: "MIXES",
    image: "/images/products/megaimmunemix.png",
    price: "$4.50",
    upc: "846548088663",
    item_code: "8866",
    size: "10 oz",
    case_pack: 6,
    case_price: "$27.00",
  },

  //big mixes
  {
    name: "Cranberry Health Mix - 22oz",
    brand: "NATURE'S GARDEN",
    category: "MIXES",
    image: "/images/products/cranberrymix22oz.jpg",
    price: "$5.35",
    upc: "846548071719",
    item_code: "7171",
    size: "22 oz",
    case_pack: 9,
    case_price: "$48.15",
  },
  {
    name: "Mountain Trail Mix - 22oz",
    brand: "NATURE'S GARDEN",
    category: "MIXES",
    image: "/images/products/mountaintrailmix22oz.jpeg",
    price: "$5.35",
    upc: "846548080612",
    item_code: "8061",
    size: "22 oz",
    case_pack: 9,
    case_price: "$48.15",
  },

  // pretzels
  {
    name: "Pretzels - Milk Chocolate",
    brand: "NATURE'S GARDEN",
    category: "PRETZELS",
    image: "/images/products/milkchocolatepretzel.jpg",
    price: "$2.65",
    upc: "846548073928",
    item_code: "7392",
    size: "7 oz",
    case_pack: 12,
    case_price: "$31.80",
  },
  {
    name: "Pretzels - Yogurt",
    brand: "NATURE'S GARDEN",
    category: "PRETZELS",
    image: "/images/products/yogurtpretzel.jpg",
    price: "$2.65",
    upc: "846548072952",
    item_code: "7295",
    size: "7 oz",
    case_pack: 12,
    case_price: "$31.80",
  },
  {
    name: "Pretzels - Toffee",
    brand: "NATURE'S GARDEN",
    category: "PRETZELS",
    image: "/images/products/toffie.jpg",
    price: "$2.65",
    upc: "846548073904",
    item_code: "7390",
    size: "7 oz",
    case_pack: 12,
    case_price: "$31.80",
  },
  {
    name: "Pretzels - Raspberry",
    brand: "NATURE'S GARDEN",
    category: "PRETZELS",
    image: "/images/products/rasperrypretzel.jpg",
    price: "$2.65",
    upc: "846548073805",
    item_code: "7380",
    size: "7 oz",
    case_pack: 12,
    case_price: "$31.80",
  },
  {
    name: "Pretzels - Blueberry",
    brand: "NATURE'S GARDEN",
    category: "PRETZELS",
    image: "/images/products/blueberrypretzel.jpg",
    price: "$2.65",
    upc: "846548073799",
    item_code: "7379",
    size: "7 oz",
    case_pack: 12,
    case_price: "$31.80",
  },
  {
    name: "Pretzels - Dark Chocolate",
    brand: "NATURE'S GARDEN",
    category: "PRETZELS",
    image: "/images/products/darkchocolatepretzel.jpg",
    price: "$2.65",
    upc: "846548072969",
    item_code: "7296",
    size: "7 oz",
    case_pack: 12,
    case_price: "$31.80",
  },
  {
    name: "Pretzels - Key Lime",
    brand: "NATURE'S GARDEN",
    category: "PRETZELS",
    image: "/images/products/keylimepretzel.jpg",
    price: "$2.65",
    upc: "846548076561",
    item_code: "7656",
    size: "7 oz",
    case_pack: 12,
    case_price: "$31.80",
  },
  // chocolate covered
  {
    name: "Dark Chocolate Almonds",
    brand: "NATURE'S GARDEN",
    category: "CHOCOLATE COVERED",
    image: "/images/products/dccalmond.jpg",
    price: "$3.85",
    upc: "846548070569",
    item_code: "7056",
    size: "6 oz",
    case_pack: 12,
    case_price: "$46.20",
  },
  {
    name: "Dark Chocolate Cashews",
    brand: "NATURE'S GARDEN",
    category: "CHOCOLATE COVERED",
    image: "/images/products/dcccashew.jpeg",
    price: "$3.85",
    upc: "846548070576",
    item_code: "7057",
    size: "6 oz",
    case_pack: 12,
    case_price: "$46.20",
  },
  {
    name: "Dark Chocolate Cranberries",
    brand: "NATURE'S GARDEN",
    category: "CHOCOLATE COVERED",
    image: "/images/products/dcccranberry.jpg",
    price: "$3.85",
    upc: "846548070583",
    item_code: "7058",
    size: "6 oz",
    case_pack: 12,
    case_price: "$46.20",
  },
  {
    name: "Dark Chocolate Cherries",
    brand: "NATURE'S GARDEN",
    category: "CHOCOLATE COVERED",
    image: "/images/products/dcccheries.jpg",
    price: "$3.85",
    upc: "846548070590",
    item_code: "7059",
    size: "6 oz",
    case_pack: 12,
    case_price: "$46.20",
  },
  {
    name: "Dark Chocolate Walnuts",
    brand: "NATURE'S GARDEN",
    category: "CHOCOLATE COVERED",
    image: "/images/products/dccsampleimage.jpg",
    price: "$3.85",
    upc: "846548070637",
    item_code: "7063",
    size: "6 oz",
    case_pack: 12,
    case_price: "$46.20",
  },
  {
    name: "Dark Chocolate Pecans",
    brand: "NATURE'S GARDEN",
    category: "CHOCOLATE COVERED",
    image: "/images/products/dccpecans.jpg",
    price: "$3.85",
    upc: "846548070750",
    item_code: "7075",
    size: "6 oz",
    case_pack: 12,
    case_price: "$46.20",
  },

  // multipack
  {
    name: "Cranberry Healthy Mix (1.2oz x 7)",
    brand: "NATURE'S GARDEN",
    category: "MULTIPACK",
    image: "/images/products/CBHealthX7.jpeg",
    price: "$3.50",
    upc: "846548070248",
    item_code: "70246",
    size: "8.4 oz",
    case_pack: 6,
    case_price: "$21.00",
  },
  {
    name: "Omega-3 Deluxe Mix (1.2oz x 7)",
    brand: "NATURE'S GARDEN",
    category: "MULTIPACK",
    image: "/images/products/OMEGA3MultipackX7.png",
    price: "$3.50",
    upc: "846548070255",
    item_code: "70256",
    size: "8.4 oz",
    case_pack: 6,
    case_price: "$21.00",
  },
  {
    name: "Hearth Healthy Mix (1.2oz x 7)",
    brand: "NATURE'S GARDEN",
    category: "MULTIPACK",
    image: "/images/products/hearthelthmixX7.jpg",
    price: "$3.50",
    upc: "846548070279",
    item_code: "70276",
    size: "8.4 oz",
    case_pack: 6,
    case_price: "$21.00",
  },
  {
    name: "Choco N Nut Mix (1.2oz x 7)",
    brand: "NATURE'S GARDEN",
    category: "MULTIPACK",
    image: "/images/products/choconutX7.png",
    price: "$3.50",
    upc: "846548070422",
    item_code: "70426",
    size: "8.4 oz",
    case_pack: 6,
    case_price: "$21.00",
  },
  {
    name: "High Energy Mix (1.2oz x 7)",
    brand: "NATURE'S GARDEN",
    category: "MULTIPACK",
    image: "/images/products/highenergyX7.png",
    price: "$3.50",
    upc: "846548087185",
    item_code: "87186",
    size: "8.4 oz",
    case_pack: 6,
    case_price: "$21.00",
  },
  {
    name: "Berry Nutty Mix (1.2oz x 7)",
    brand: "NATURE'S GARDEN",
    category: "MULTIPACK",
    image: "/images/products/BerrynuttymixX7.jpg",
    price: "$3.50",
    upc: "846548087192",
    item_code: "87196",
    size: "8.4 oz",
    case_pack: 6,
    case_price: "$21.00",
  },
  {
    name: "Keto Snack Mix Multipack (1oz x 5)",
    brand: "NATURE'S GARDEN",
    category: "MULTIPACK",
    image: "/images/products/ketosnackmix1ozX5.png",
    price: "$3.50",
    upc: "846548087598",
    item_code: "87596",
    size: "5 oz",
    case_pack: 6,
    case_price: "$21.00",
  },
  {
    name: "Keto Deluxe Mix Multipack (1oz x 5)",
    brand: "NATURE'S GARDEN",
    category: "MULTIPACK",
    image: "/images/products/ketodeluxe1ozX5.png",
    price: "$3.50",
    upc: "846548087604",
    item_code: "87606",
    size: "5 oz",
    case_pack: 6,
    case_price: "$21.00",
  },
  {
    name: "Strawberry Yoggies 7 x 0.7oz",
    brand: "NATURE'S GARDEN",
    category: "YOGGIES",
    image: "/images/products/strawberryyoggies.png",
    price: "$4.00",
    upc: "846548085358",
    item_code: "8535",
    size: "4.9 oz",
    case_pack: 12,
    case_price: "$48.00",
  },
  {
    name: "Mixed Berry Yoggies 7 x 0.7oz",
    brand: "NATURE'S GARDEN",
    category: "YOGGIES",
    image: "/images/products/mixedberryoggies.png",
    price: "$4.00",
    upc: "846548080612",
    item_code: "8536",
    size: "4.9 oz",
    case_pack: 12,
    case_price: "$48.00",
  },
  {
    name: "Almonds Raw",
    brand: "NATURE'S GARDEN",
    category: "SINGLE SERVE",
    image: "/images/products/singleAlmonds.png",
    price: "$0.80",
    upc: "846548070156",
    item_code: "7015",
    size: "1 oz",
    case_pack: 20,
    case_price: "$16.00",
  },
  {
    name: "Cashews Roasted Unsalted",
    brand: "NATURE'S GARDEN",
    category: "SINGLE SERVE",
    image: "/images/products/singlecashew.png",
    price: "$0.80",
    upc: "846548070163",
    item_code: "7016",
    size: "1 oz",
    case_pack: 20,
    case_price: "$16.00",
  },
  {
    name: "Cranberry Healthy Mix",
    brand: "NATURE'S GARDEN",
    category: "SINGLE SERVE",
    image: "/images/products/singlecranberry.jpg",
    price: "$0.80",
    upc: "846548070170",
    item_code: "7017",
    size: "1.2 oz",
    case_pack: 20,
    case_price: "$16.00",
  },
  {
    name: "Omega-3 Deluxe Mix",
    brand: "NATURE'S GARDEN",
    category: "SINGLE SERVE",
    image: "/images/products/singleomega3.jpg",
    price: "$0.80",
    upc: "846548070194",
    item_code: "7019",
    size: "1.2 oz",
    case_pack: 20,
    case_price: "$16.00",
  },
  {
    name: "Hearth Healthy Mix",
    brand: "NATURE'S GARDEN",
    category: "SINGLE SERVE",
    image: "/images/products/Singleheart.jpg",
    price: "$0.80",
    upc: "846548070200",
    item_code: "7020",
    size: "1.2 oz",
    case_pack: 20,
    case_price: "$16.00",
  },
  {
    name: "Omega 3 Nut Mix",
    brand: "NATURE'S GARDEN",
    category: "SINGLE SERVE",
    image: "/images/products/singleomeganuts.png",
    price: "$0.80",
    upc: "846548070217",
    item_code: "7021",
    size: "1 oz",
    case_pack: 20,
    case_price: "$16.00",
  },
  {
    name: "Choco N Nut Mix",
    brand: "NATURE'S GARDEN",
    category: "SINGLE SERVE",
    image: "/images/products/singleChoconut.png",
    price: "$0.80",
    upc: "846548070415",
    item_code: "7041",
    size: "1.2 oz",
    case_pack: 20,
    case_price: "$16.00",
  },
  {
    name: "High Energy Mix",
    brand: "NATURE'S GARDEN",
    category: "SINGLE SERVE",
    image: "/images/products/singleHigh.png",
    price: "$0.80",
    upc: "846548087161",
    item_code: "8716",
    size: "1.2 oz",
    case_pack: 20,
    case_price: "$16.00",
  },
  {
    name: "Berry Nutty Mix",
    brand: "NATURE'S GARDEN",
    category: "SINGLE SERVE",
    image: "/images/products/singleBerry.png",
    price: "$0.80",
    upc: "846548087208",
    item_code: "8720",
    size: "1.2 oz",
    case_pack: 20,
    case_price: "$16.00",
  },

  /* Sunny Fruit Ürünleri
  {
    image:
      "https://sunnyfruit.com/cdn/shop/products/OrganicFigs3.jpg?v=1668370621&width=700",
    brand: "SUNNY FRUIT",
    name: "Organic Dried Figs",
    category: "DRIED FRUITS",
    price: "$5.99",
  },
  {
    image:
      "https://sunnyfruit.com/cdn/shop/files/prebiotic_organic_dried_apricots.jpg?v=1736867543&width=700",
    brand: "SUNNY FRUIT",
    name: "Prebiotic Organic Dried Apricots",
    category: "DRIED FRUITS",
    price: "$6.49",
  },
  {
    image:
      "https://sunnyfruit.com/cdn/shop/products/Mangoes2.jpg?v=1668370801&width=700",
    brand: "SUNNY FRUIT",
    name: "Organic Dried Mangoes",
    category: "DRIED FRUITS",
    price: "$5.99",
  },
  {
    image:
      "https://sunnyfruit.com/cdn/shop/products/PittedDates3.jpg?v=1668371072&width=700",
    brand: "SUNNY FRUIT",
    name: "Organic Dried Pitted Dates",
    category: "DRIED FRUITS",
    price: "$5.99",
  },
  {
    image:
      "https://sunnyfruit.com/cdn/shop/files/DOYPACK-4.jpg?v=1733339506&width=700",
    brand: "SUNNY FRUIT",
    name: "Organic Dried Mix",
    category: "DRIED FRUITS",
    price: "$6.99",
  },
  {
    image:
      "https://sunnyfruit.com/cdn/shop/products/OrganicStrawberries5.jpg?v=1668371772&width=700",
    brand: "SUNNY FRUIT",
    name: "Organic Dried Strawberries",
    category: "DRIED FRUITS",
    price: "$7.49",
  },
  {
    image:
      "https://sunnyfruit.com/cdn/shop/products/DriedPlumss.jpg?v=1668371441&width=700",
    brand: "SUNNY FRUIT",
    name: "Organic Dried Plums",
    category: "DRIED FRUITS",
    price: "$5.99",
  },*/
];

// Kategori tanımları
const categories = [
  "ALL",
  "DRIED FRUITS",
  "MIXES",
  "YOGGIES",
  "PRETZELS",
  "CHOCOLATE COVERED",
  "MULTIPACK",
  "SINGLE SERVE",
];

const ProductList = () => {
  const [selectedView, setSelectedView] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProducts =
    selectedCategory === "ALL"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const handleViewChange = (view: string) => {
    setSelectedView(view);
    if (view === "Package") {
      setSelectedCategory("ALL");
    }
  };

  // Ana sayfa görünümü - Kartlar
  if (!selectedView) {
    return (
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Kayar Yazı */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            EXPLORE FULL COLLECTION
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Browse all our bold and delicious products, ready to fuel your next
            adventure. Discover your favorite today!
          </p>
        </div>

        {/* Program Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-0">
          {/* Package Card */}
          <div
            onClick={() => handleViewChange("Package")}
            className="relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl w-full"
          >
            <div className="aspect-[3/4] relative">
              <img
                src="/images/products/packages.png"
                alt="Package Products"
                className="w-full h-full object-cover object-[25%_center] scale-100 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                  Packaged Products
                </h2>
                <p className="text-sm sm:text-base text-white/90">
                  Best quality snacks in convenient packages
                </p>
              </div>
            </div>
          </div>

          {/* Tubs Card */}
          <div
            onClick={() => handleViewChange("Tubs")}
            className="relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl w-full"
          >
            <div className="aspect-[3/4] relative">
              <img
                src="/images/products/tubs.png"
                alt="Tubs Program"
                className="w-full h-full object-contain scale-110 transition-transform duration-500 group-hover:scale-120"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                  Tubs Program
                </h2>
                <p className="text-sm sm:text-base text-white/90">
                  Perfect for retail and self-service displays
                </p>
              </div>
            </div>
          </div>

          {/* Bulk Card */}
          <div
            onClick={() => handleViewChange("Bulk")}
            className="relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl sm:col-span-2 md:col-span-1 w-full"
          >
            <div className="aspect-[3/4] relative">
              <img
                src="/images/products/bulk.jpeg"
                alt="Bulk Program"
                className="w-full h-full object-cover object-[70%_20%] scale-125 transition-transform duration-500 group-hover:scale-130"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                  Bulk Program
                </h2>
                <p className="text-sm sm:text-base text-white/90">
                  Ideal for food service and specialty retailers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If Tubs or Bulk is selected, we'll show a PDF catalog
  if (selectedView === "Tubs" || selectedView === "Bulk") {
    const pdfPath =
      selectedView === "Tubs"
        ? "/catalogs/tubs-program.pdf"
        : "/catalogs/bulk-program.pdf";

    return (
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Back Button */}
        <button
          onClick={() => setSelectedView("")}
          className="mb-6 sm:mb-8 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Programs
        </button>

        {/* Minimalist Catalog Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-10">
          <div className="bg-gray-100 py-4 sm:py-5 px-5 sm:px-6 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              {selectedView} Program Catalog
            </h2>
          </div>

          {/* Minimalist Catalog Content */}
          <div className="p-8 sm:p-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-lg text-gray-700 mb-8">
                  {selectedView === "Tubs"
                    ? "Browse our complete Tubs Program catalog featuring over 250 varieties of high-quality snacks in convenient tubs perfect for retail and self-service displays."
                    : "Explore our Bulk Program catalog with over 250 premium varieties ideal for food service, bakeries, and specialty retailers."}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={pdfPath}
                    download={`${selectedView.toLowerCase()}-program.pdf`}
                    className="bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-base"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Catalog
                  </a>

                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-green-700 text-green-700 hover:bg-green-50 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-base"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Open in New Tab
                  </a>
                </div>
              </div>

              {/* Additional Information Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Contact for More Information
                </h3>
                <p className="text-gray-600 mb-4">
                  Interested in our {selectedView.toLowerCase()} program?
                  Contact our sales team for pricing, availability, and custom
                  orders.
                </p>
                <a
                  href="/contact"
                  className="text-green-700 font-medium hover:text-green-800 transition flex items-center"
                >
                  <span>Contact Sales Team</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Package view with products
  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Back Button */}
      <button
        onClick={() => setSelectedView("")}
        className="mb-6 sm:mb-8 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Programs
      </button>

      {/* Category Filter Buttons - Only shown for Package view */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-semibold rounded-md ${
              selectedCategory === category
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
