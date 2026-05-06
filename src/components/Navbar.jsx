import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../store/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <NavLink to="/" className="text-2xl font-bold text-[#3e2723]">
          CoffeeShop
        </NavLink>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="font-semibold text-[#3e2723] hover:text-[#6f4e37]"
            >
              {link.name}
            </NavLink>
          ))}

          <div className="relative">
            <NavLink to="/cart" className="text-2xl">
              🛒
            </NavLink>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#d4a373] text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <div className="relative">
            <NavLink to="/cart" className="text-2xl">
              🛒
            </NavLink>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#d4a373] text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <button onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden p-4 flex  align-items: center flex-col gap-3 bg-white border-t">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/cart" onClick={() => setOpen(false)}>
            Cart 🛒
          </NavLink>
        </div>
      )}
    </header>
  );
}
