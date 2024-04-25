import { AiOutlineShop } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
// import { FaRegHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";
import { Link } from "react-router-dom";


const MobileMenu = () => {
    

    return ( 
        <>
            <div className="btm-nav sm:hidden text-sm bottom-0 mb-0">
                <button className="bg-cyan-700 rounded-tr-3xl text-white ">
                    <Link to='/' className="flex flex-col items-center">
                        <FaHome />
                        <span className="btm-nav-label">Home</span>
                    </Link>
                </button>
                <button>
                    <Link to='/products ' className="flex flex-col items-center">
                        <AiOutlineShop />
                        <span className="btm-nav-label">Shop</span>
                    </Link>
                </button>
                <button className="active">
                    <FiShoppingBag />
                    <span className="btm-nav-label">Cart</span>
                </button>
                <button>
                <RiUser3Line />
                    <span className="btm-nav-label">Account</span>
                </button>
            </div>
        </>
     );
}
 
export default MobileMenu;