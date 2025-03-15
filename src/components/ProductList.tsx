import ProductCard from "./ProductCard";
import { useState } from "react";

const allProducts = [
  // Nature’s Garden Ürünleri
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/Heart-healthy-omega-3-trail-mix-with-walnuts-almonds-cranberries-in-convenient-individual-packs-gluten-free-and-high-in-protein.webp?v=1731387676",
    brand: "NATURE’S GARDEN",
    name: "Omega-3 Trail Mix",
    category: "MIXES",
    price: "$19.99",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/Probiotic-Strawberry-Yoggies-1.webp?v=1736286214",
    brand: "NATURE’S GARDEN",
    name: "Probiotic Strawberry Yoggies",
    category: "PRETZELS",
    price: "$15.99",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/High-Energy-Mix-1.webp?v=1736266627",
    brand: "NATURE’S GARDEN",
    name: "High Energy Mix",
    category: "MULTIPACK",
    price: "$22.99",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/Nature_s_Garden_Berry_Nutty_Mix_fruit_and_nut_trail_mix_with_cranberries_cashews_almonds_and_raisins_in_individual_packs.webp?v=1731388796",
    brand: "NATURE’S GARDEN",
    name: "Berry Nutty Mix",
    category: "MULTIPACK",
    price: "$21.99",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/Nature_s_Garden_Probiotic_Immune_Booster_probiotic_trail_mix_with_almonds_cranberries_cherries_hazelnuts_and_blueberries_for_immune_support.webp?v=1731389145",
    brand: "NATURE’S GARDEN",
    name: "Probiotic Immune Booster",
    category: "MIXES",
    price: "$20.99",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/Nature_s_Garden_Keto_Deluxe_Mix_keto-friendly_trail_mix_with_almonds_walnuts_pistachios_cranberries_and_probiotic_cheese_balls..webp?v=1731388608",
    brand: "NATURE’S GARDEN",
    name: "Keto Deluxe Mix",
    category: "MIXES",
    price: "$24.99",
  },
  {
    image: "/images/DarkChocolateAlmondCover.jpg",
    brand: "NATURE’S GARDEN",
    name: "Dark Chocolate Almond Cover",
    category: "CHOCOLATE COVERED",
    price: "$14.99",
  },
  {
    image: "/images/DCPretzels.jpg",
    brand: "NATURE’S GARDEN",
    name: "Dark Chocolate Pretzels",
    category: "CHOCOLATE COVERED",
    price: "$12.99",
  },
  {
    image: "/images/DriedApricots.jpg",
    brand: "NATURE’S GARDEN",
    name: "Dried Apricots",
    category: "BULK",
    price: "$8.99",
  },
  {
    image: "/images/RawAlmonds.jpg",
    brand: "NATURE’S GARDEN",
    name: "Raw Almonds",
    category: "BULK",
    price: "$10.99",
  },
  {
    image: "/images/RoastedCashews.jpg",
    brand: "NATURE’S GARDEN",
    name: "Roasted Cashews",
    category: "BULK",
    price: "$11.99",
  },
  {
    image: "/images/RoastedMix.jpg",
    brand: "NATURE’S GARDEN",
    name: "Roasted Mix",
    category: "BULK",
    price: "$13.99",
  },

  // Sunny Fruit Ürünleri
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
  },
];

const categories = [
  "ALL",
  "MIXES",
  "MULTIPACK",
  "DRIED FRUITS",
  "PRETZELS",
  "CHOCOLATE COVERED",
  "BULK",
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProducts =
    selectedCategory === "ALL"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

      {/* Filtreleme Butonları */}
      <div className="flex justify-center space-x-4 mb-6">
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

      {/* Ürünler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
