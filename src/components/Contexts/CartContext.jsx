import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Load cart data from localStorage on component mount
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItemIndex = cart.findIndex((item) => item.id === id);
    if (cartItemIndex !== -1) {
      const newCart = [...cart];
      newCart[cartItemIndex].amount++;
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItemIndex = cart.findIndex((item) => item.id === id);
    if (cartItemIndex !== -1) {
      const newCart = [...cart];
      newCart[cartItemIndex].amount++;
      setCart(newCart);
    }
  };

  const decreaseAmount = (id) => {
    const cartItemIndex = cart.findIndex((item) => item.id === id);
    if (cartItemIndex !== -1) {
      const newCart = [...cart];
      if (newCart[cartItemIndex].amount === 1) {
        newCart.splice(cartItemIndex, 1);
      } else {
        newCart[cartItemIndex].amount--;
      }
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
