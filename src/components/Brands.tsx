const brandLogos = [
  "/images/brands/amz.jpg",
  "/images/brands/bnm.jpeg",
  "/images/brands/bravos.png",
  "/images/brands/ca.jpeg",
  "/images/brands/cm.png",
  "/images/brands/Costco.jpg",
  "/images/brands/ct.png",
  "/images/brands/dm.png",
  "/images/brands/fc.png",
  "/images/brands/ft.webp",
  "/images/brands/fu.jpg",
  "/images/brands/gf.png",
  "/images/brands/gm.jpeg",
  "/images/brands/ideal.png",
  "/images/brands/instacart.jpeg",
  "/images/brands/kf.png",
  "/images/brands/mk.png",
  "/images/brands/sf.jpeg",
  "/images/brands/tfe.png",
  "/images/brands/wm.png",
  "/images/brands/ws.jpeg",
  "/images/brands/wsf.png",
];

const Brands = () => {
  return (
    <section className="bg-white py-12 w-full">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-2">
          Trusted by Leading Retailers
        </h2>
        <p className="text-center text-gray-500 text-m max-w-2xl mx-auto mb-20">
          We supply more than 100 supermarkets with reliability, speed and care.
        </p>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="h-20 w-36 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
