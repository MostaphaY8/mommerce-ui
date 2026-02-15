import { useState } from "react";
import { useCart } from "../../context/CartContext";

type Props = {
  selectedCard: string;
  onChangeCard: (value: string) => void;
};

const Navbar = ({ selectedCard, onChangeCard }: Props) => {
  const { cart, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-white shadow z-50">
      <div className="flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Mommerce UI</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border px-3 py-1 rounded"
            >
              Product Card ▾
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white border rounded shadow w-48">
                <button
                  onClick={() => {
                    onChangeCard("default");
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Default Card
                </button>

                <button
                  onClick={() => {
                    onChangeCard("simple");
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Simple Card
                </button>
              </div>
            )}
          </div>

          <button onClick={openCart}>🛒 ({cart.length})</button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden gap-4 items-center">
          <button onClick={openCart}>🛒 ({cart.length})</button>

          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden p-4 border-t">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                onChangeCard("default");
                setMenuOpen(false);
              }}
              className="text-left"
            >
              Default Card
            </button>

            <button
              onClick={() => {
                onChangeCard("simple");
                setMenuOpen(false);
              }}
              className="text-left"
            >
              Simple Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
