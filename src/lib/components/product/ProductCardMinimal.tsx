import type { Product } from "../../types/product";

interface Props {
  product: Product;
}

export const ProductCardMinimal = ({ product }: Props) => {
  return (
    <div className="flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full aspect-square object-cover rounded-lg"
      />

      <h3 className="mt-2 text-sm font-medium">{product.title}</h3>

      <p className="text-gray-500 text-sm">${product.price}</p>

      {product.colors && (
        <div className="flex gap-2 mt-2">
          {product.colors.map((color) => (
            <span
              key={color}
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
