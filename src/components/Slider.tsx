import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/as.jpeg",
    title: "Roasted Mix",
    description: "NATURE HEALTHY PRODUCTS",
    link: "https://naturesgarden.net/collections/trail-mixes",
    textColor: "#ffffff",
    buttonColor: "#ffffff",
    buttonBg: "#34201a",
  },
  {
    image: "/images/as1.jpeg",
    title: "Dried Fruits",
    description: "NATURE HEALTHY PRODUCTS",
    link: "https://naturesgarden.net/collections/trail-mixes",
    textColor: "#2a3610",
    buttonColor: "#ffffff",
    buttonBg: "#34201a",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/FIND_THE_PERFECT_SNACK_FOR_YOU_natures_garden.webp?v=1737795833",
    title: "FIND THE PERFECT SNACK FOR YOU",
    description: "NATURE’S GARDEN PRODUCTS",
    link: "https://naturesgarden.net/collections/all",
    textColor: "#2a3610",
    buttonColor: "#ffffff",
    buttonBg: "#2a3610",
  },
  //   {
  //     image:
  //       "https://naturesgarden.net/cdn/shop/files/Fruitful_snacking_without_the_bad_stuff.webp?v=1733835033",
  //     title: "FRUITFUL SNACKING WITHOUT THE BAD STUFF",
  //     description: "NATURE’S GARDEN FRUICHIAS",
  //     link: "https://naturesgarden.net/products/probiotic-fruchias",
  //     textColor: "#ffffff",
  //     buttonColor: "#3f4d20",
  //     buttonBg: "#ffffff",
  //   },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/FRESH_POWERED_BY_PLANTS_41badb9a-8bee-4ffd-89b1-8c5b774deba2.webp?v=1737795749",
    title: "FRESH, POWERED BY PLANTS",
    description: "NATURE’S GARDEN TRAIL MIXES",
    link: "https://naturesgarden.net/collections/trail-mixes",
    textColor: "#2a3610",
    buttonColor: "#ffffff",
    buttonBg: "#2a3610",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/FUNCTIONAL_DELICIOUSNESS_bdba50bf-b348-46e6-850d-0e2bce187d8c.jpg?v=1737795564",
    title: "FUNCTIONAL DELICIOUSNESS",
    description: "NATURE’S GARDEN PROBIOTIC YOGGIES",
    link: "https://naturesgarden.net/products/probiotic-strawberry-yoggies-yogurt-covered-fruit-bites?_pos=1&_psq=strawberry+yoggies&_ss=e&_v=1.0",
    textColor: "#563788",
    buttonColor: "#ffffff",
    buttonBg: "#34201a",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* SLIDER GÖRSELLERİ */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 block" : "opacity-0 hidden"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <h2
              style={{ color: slide.textColor }}
              className="text-5xl font-bold"
            >
              {slide.title}
            </h2>
            <p style={{ color: slide.textColor }} className="text-xl">
              {slide.description}
            </p>
            <a
              href={slide.link}
              style={{
                color: slide.buttonColor,
                backgroundColor: slide.buttonBg,
              }}
              className="inline-block px-8 py-3 mt-5 text-lg font-semibold rounded-md"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      ))}

      {/* SOL & SAĞ BUTONLAR */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
      >
        ❮
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
        onClick={() =>
          setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
      >
        ❯
      </button>

      {/* ALTTAKİ NOKTALAR */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
