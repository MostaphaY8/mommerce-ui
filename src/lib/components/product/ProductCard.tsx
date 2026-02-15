import type { Product } from "../../types/product";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Image Wrapper */}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">{product.name}</h3>

        <p className="text-sm text-gray-600">${product.price}</p>

        {/* Colors */}
        {product.colors && (
          <div className="flex gap-2 mt-1">
            {product.colors.map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
