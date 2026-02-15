import { useState } from "react";
import type { Product } from "../../types/product";
import { useCart } from "../../context/CartContext";

type Props = {
  product: Product;
};

const ProductCardSimple = ({ product }: Props) => {
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);

  return (
    <div className="flex flex-col gap-3">
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">{product.name}</h3>

        <p className="text-sm text-gray-600">${product.price}</p>

        {/* Colors */}
        {product.colors && (
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full border ${
                  selectedColor === color ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {/* Sizes as Tabs */}
        {product.sizes && (
          <div className="flex gap-2 mt-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 text-sm rounded border ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product, selectedColor, selectedSize)}
          className="bg-black text-white text-sm py-2 mt-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCardSimple;
