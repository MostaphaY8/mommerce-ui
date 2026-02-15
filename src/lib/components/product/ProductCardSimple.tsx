import type { Product } from "../../types/product";
import { useCart } from "../../context/CartContext";

type Props = {
  product: Product;
};

const ProductCardSimple = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded flex flex-col gap-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="font-medium">{product.name}</h3>
      <p>${product.price}</p>

      {product.colors && (
        <div className="flex gap-2">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}

      <button
        onClick={() => addToCart(product)}
        className="border p-2 mt-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default ProductCardSimple;
