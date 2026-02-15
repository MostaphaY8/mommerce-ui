import {
  CartProvider,
  Layout,
  ProductCard,
  ProductCardSimple,
  MiniCart,
} from "../lib";

import { products } from "./data/products";

const App = () => {
  return (
    <CartProvider>
      <Layout>
        {(selectedCard) => (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) =>
              selectedCard === "default" ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <ProductCardSimple key={product.id} product={product} />
              ),
            )}
          </div>
        )}
      </Layout>

      <MiniCart />
    </CartProvider>
  );
};

export default App;
