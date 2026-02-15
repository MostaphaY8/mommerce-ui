import { useCart } from "../../context/CartContext";

const MiniCart = () => {
  const { cart, isOpen, closeCart, removeItem, updateItem } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 z-40" onClick={closeCart} />

      {/* MiniCart Panel */}
      <div className="fixed top-0 right-0 w-80 max-w-full h-full bg-white shadow-lg z-50 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Your Cart</h2>
          <button onClick={closeCart}>✕</button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 items-start border-b pb-2"
              >
                {/* Image */}
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">${item.price}</p>

                  {/* Selected options */}
                  <div className="flex gap-2 items-center mt-1">
                    {item.selectedColor && (
                      <div
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                    )}
                    {item.selectedSize && (
                      <span className="text-xs border px-2 py-0.5 rounded">
                        {item.selectedSize}
                      </span>
                    )}
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() =>
                        updateItem(item.id, {
                          ...item,
                          quantity: Math.max(1, item.quantity - 1),
                        })
                      }
                      className="border px-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateItem(item.id, {
                          ...item,
                          quantity: item.quantity + 1,
                        })
                      }
                      className="border px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="p-4 border-t">
          <button
            onClick={closeCart}
            className="w-full bg-black text-white py-2 rounded"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default MiniCart;
