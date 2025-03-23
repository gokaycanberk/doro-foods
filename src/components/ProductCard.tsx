interface ProductProps {
  image: string;
  brand: string;
  name: string;
  category: string;
  price: string;
}

const ProductCard = ({ image, brand, name, category, price }: ProductProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow">
      {/* Ürün Görseli */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-md"
      />

      {/* Ürün Bilgileri */}
      <div className="mt-4">
        <p className="text-sm text-gray-500">{brand}</p>
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>

        {/* Kategori */}
        <p className="text-sm text-gray-600 mt-1">
          <strong>Category:</strong> {category}
        </p>

        {/* Fiyat */}
        <p className="text-xl font-bold text-gray-900 mt-2">
          {price}{" "}
          {category === "BULK" && (
            <span className="text-sm text-gray-500">/lb</span>
          )}
        </p>

        {/* Sepete Ekle Butonu
        <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-md font-semibold hover:bg-green-800 transition-all">
          ADD TO CART
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
