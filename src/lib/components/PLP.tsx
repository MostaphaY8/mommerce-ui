import { products } from "../../demo/data/products";
import { ProductCardDefault } from "./product/ProductCardDefault";
import { ProductCardMinimal } from "./product/ProductCardMinimal";

interface Props {
  cardVariant: "default" | "minimal";
  onAdd?: (title: string) => void;
}

export const PLP = ({ cardVariant, onAdd }: Props) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) =>
          cardVariant === "default" ? (
            <ProductCardDefault
              key={product.id}
              product={product}
              onAdd={onAdd}
            />
          ) : (
            <ProductCardMinimal key={product.id} product={product} />
          ),
        )}
      </div>
    </div>
  );
};
