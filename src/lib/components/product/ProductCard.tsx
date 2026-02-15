import type { Product } from "../../types/product";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  const [color, setColor] = useState(product.colors?.[0]);
  const [size, setSize] = useState(product.sizes?.[0]);

  return (
    <div className="border p-4 rounded flex flex-col gap-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      {product.colors && (
        <div className="flex gap-2">
          {product.colors.map((c) => (
            <div
              key={c}
              onClick={() => setColor(c)}
              className={`w-5 h-5 rounded-full border cursor-pointer ${
                color === c ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      )}

      {product.sizes && (
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border p-1"
        >
          {product.sizes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      )}

      <button
        onClick={() => addToCart(product, color, size)}
        className="bg-black text-white p-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
