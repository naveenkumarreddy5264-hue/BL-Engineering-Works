import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const existing = cartItems.find(i => i.id === item.id);

    if (existing) {
      setCartItems(
        cartItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: item.quantity || 1 }]);
    }
  }

  function removeFromCart(id) {
    setCartItems(cartItems.filter(item => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
