import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/as.jpeg",
    title: "Healthy Snacks",
    description:
      "A curated mix of wholesome dried fruits and premium snacks for health-conscious consumers.",
    link: "/products",
    textColor: "#ffffff",
    buttonColor: "#ffffff",
    buttonBg: "#34201a",
    alignLeft: false,
    buttonText: "Explore Products",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/FIND_THE_PERFECT_SNACK_FOR_YOU_natures_garden.webp?v=1737795833",
    title: "Retail Ready Snack Solutions",
    description:
      "We support over 200 retailers with shelf-ready, high-turnover product assortments.",
    link: "/products",
    textColor: "#2a3610",
    buttonColor: "#ffffff",
    buttonBg: "#2a3610",
    alignLeft: true,
    buttonText: "View Assortments",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/Fruitful_snacking_without_the_bad_stuff.webp?v=1733835033",
    title: "Fresh, Clean, Consistent",
    description:
      "Every item we distribute meets the highest standards for quality and clean ingredients.",
    link: "/about",
    textColor: "#ffffff",
    buttonColor: "#3f4d20",
    buttonBg: "#ffffff",
    alignLeft: false,
    buttonText: "Our Promise",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/FRESH_POWERED_BY_PLANTS_41badb9a-8bee-4ffd-89b1-8c5b774deba2.webp?v=1737795749",
    title: "Plant-Based. Purpose-Driven.",
    description:
      "Nature snacks, carefully selected for modern shelves and evolving tastes.",
    link: "/products",
    textColor: "#2a3610",
    buttonColor: "#ffffff",
    buttonBg: "#2a3610",
    alignLeft: true,
    buttonText: "Explore Lineup",
  },
  {
    image:
      "https://naturesgarden.net/cdn/shop/files/FUNCTIONAL_DELICIOUSNESS_bdba50bf-b348-46e6-850d-0e2bce187d8c.jpg?v=1737795564",
    title: "Beyond Distribution",
    description:
      "We consult, recommend, and deliver—empowering stores to meet changing consumer needs.",
    link: "/about",
    textColor: "#563788",
    buttonColor: "#ffffff",
    buttonBg: "#34201a",
    alignLeft: false,
    buttonText: "Partner With Us",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 block" : "opacity-0 hidden"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div
            className={`w-full h-full flex flex-col justify-center px-10 ${
              slide.alignLeft
                ? "items-start text-left"
                : "items-center text-center"
            }`}
          >
            <h2
              style={{ color: slide.textColor }}
              className="text-5xl font-bold max-w-[80%] uppercase"
            >
              {slide.title}
            </h2>
            <p
              style={{ color: slide.textColor }}
              className="text-xl max-w-[80%] mt-4"
            >
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
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
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

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
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
