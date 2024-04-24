import { AiOutlineShop } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
// import { FaRegHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";
import { Link } from "react-router-dom";


const MobileMenu = () => {
    const [open, setOpen] = useState(false)

    const menus = [
        {name: "About", route: "/about"},
        {name: "Shop", route: "/products"},
        {name: "Blog", route: "/articles"},
        {name: "Contact", route: "/contact"},
    ]

    return ( 
        <>
            <div className="btm-nav sm:hidden">
                <button onClick={() => setOpen((prev) => !prev)} className="bg-cyan-700 rounded-tr-3xl text-white">
                    <FaHome />
                    <span className="btm-nav-label">Home</span>
                </button>
                <button>
                    <AiOutlineShop />
                    <span className="btm-nav-label">Shop</span>
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

            <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0 space-y-8 py-6 px-8 w-[85%] h-screen duration-300 ease-in-out bg-sky-600`}>  
                <ul className="flex flex-col justify-center mt-8 text-base font-medium">
                        <li 
                            className='md:mx-3 md:my-0 my-4' 
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        {menus.map((item, index) => (
                            <div key={index}>
                                <li onClick={() => setOpen((prev) => !prev)} className='md:mx-3 md:my-0 my-4 '>
                                    <Link to={item.route}>
                                        {item.name}
                                    </Link>
                                </li>
                            </div>
                        ))}
                </ul>
                <button className="text-white text-2xl" onClick={() => setOpen((prev) => !prev)}>
                    {open ? <FaTimes/> : <></>}
                </button>
            </div>

        </>
     );
}
 
export default MobileMenu;