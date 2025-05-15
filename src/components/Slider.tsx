import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/products/ads2.jpeg",
    title: "Premium Nuts & Dry Fruits",
    description:
      "Distributing high-quality nuts and dried fruits to over 200 retailers, offering the finest selection for health-conscious consumers.",
    link: "/products",
    textColor: "#ffffff",
    buttonColor: "#ffffff",
    buttonBg: "#2e7d32",
    alignLeft: false,
    buttonText: "Explore Products",
  },
  {
    image: "/images/products/ads3.jpeg",
    title: "Wholesome Snack Options",
    description:
      "From premium nuts to delicious dried fruits, we provide nutritious snacking alternatives that customers love.",
    link: "/products",
    textColor: "#ffffff",
    buttonColor: "#ffffff",
    buttonBg: "#2e7d32",
    alignLeft: false,
    buttonText: "Explore Products",
  },
  {
    image: "/images/products/ads5.jpeg",
    title: "Quality Distribution Solutions",
    description:
      "As a specialized distributor of nuts, dried fruits, and healthy snacks, we ensure fresh, consistent products for your business.",
    link: "/about",
    textColor: "#ffffff",
    buttonColor: "#ffffff",
    buttonBg: "#2e7d32",
    alignLeft: false,
    buttonText: "Learn More",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images to prevent white screen
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to load slider images:", error);
        // Still set as loaded even if there's an error to prevent permanent loading state
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="relative w-full h-[700px] bg-green-800 flex items-center justify-center">
        <div className="text-white text-2xl">Loading slider...</div>
      </div>
    );
  }

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
          {/* Add overlay to improve text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div
            className={`relative z-10 w-full h-full flex flex-col justify-center px-10 ${
              slide.alignLeft
                ? "items-start text-left"
                : "items-center text-center"
            }`}
          >
            <h2
              style={{
                color: slide.textColor,
                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
              }}
              className="text-5xl font-bold max-w-[80%] uppercase"
            >
              {slide.title}
            </h2>
            <p
              style={{
                color: slide.textColor,
                textShadow: "0 1px 3px rgba(0,0,0,0.6)",
              }}
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
              className="inline-block px-8 py-3 mt-5 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-shadow"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20"
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
      >
        ❮
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20"
        onClick={() =>
          setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
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
