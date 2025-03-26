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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
    brand: "NATURE’S GARDEN",
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
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProducts =
    selectedCategory === "ALL"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <section className="container mx-auto px-6 py-10">
      {/* TUBS & BULK PDF BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="/catalogs/bulk-program.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          📦 View TUBS Program
        </a>
        <a
          href="/catalogs/tubs-program.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          🧺 View BULK Program
        </a>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 font-semibold rounded-md ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
