import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../Shop/CartItem";
import { CartContext } from "../Contexts/CartContext";
import { SidebarContext } from "../Contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0 px-4" : "right-[-100%]"
      } " bg-white fixed top-16 h-full shadow-2xl  md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-[100] sm:px-4 lg:px-[35px]"`}
    >
      <div className="flex items-center justify-between py-4 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div
          onClick={handleClose}
          className="cursor-poniter w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3  mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-2 bg-red-500 text-white w-9 h-9 flex justify-center items-center text-lg rounded"
          >
            <FiTrash2 />
          </div>
        </div>
        <div className="flex">
          <Link
            to={"/"}
            className="bg-gray-200 flex px-3 py-2 justify-center items-center text-cyan-700 w-full font-medium"
          >
            View Cart
          </Link>
          <Link
            to={"/"}
            className="bg-cyan-500 flex px-3 py-2 justify-center items-center text-white w-full font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;