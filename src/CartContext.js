import { createContext, useState } from "react";
const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const append = (item) => {
    const itemIndex = cartItems.findIndex((value) => value.id === item.id);
    console.log(itemIndex);
    console.log(cartItems);
    if (itemIndex < 0) {
      setCartItems([...cartItems, { ...item }]);
    } else {
      const newCart = cartItems.filter((t) => t.id !== item.id);
      setCartItems(newCart);
    }
  };
  const sum = cartItems.reduce((sum, item) => (sum += Number(item.price)), 0);
  const value = {
    items: cartItems,
    length: cartItems.length,
    append: append,
    sumPrice: sum,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
