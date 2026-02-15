import { useCart } from "../../context/CartContext";

const MiniCart = () => {
  const { cart, isOpen, closeCart, updateItem, removeItem } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={closeCart}>
      <div
        className="absolute right-0 top-0 w-80 h-full bg-white shadow p-4 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-bold mb-4">Mini Cart</h2>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item, index) => (
          <div key={index} className="border-b py-3 flex flex-col gap-2">
            <img src={item.image} className="w-16 h-16 object-cover" />
            <p>{item.name}</p>

            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                updateItem(index, {
                  ...item,
                  quantity: Number(e.target.value),
                })
              }
              className="border p-1 w-16"
            />

            <button onClick={() => removeItem(index)} className="text-red-500">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCart;
