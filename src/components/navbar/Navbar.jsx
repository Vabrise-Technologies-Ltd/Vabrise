import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
import logo from "../../assets/utils/logo.png"
import { MenuCustomList } from "./NavbarDropdown";
import BarIcon from "./BarIcon";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navbarRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null)

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const toggleNavbar = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const closeNavbar = () => {
        setOpen(false);
    };

    const menus = [
        {name: "About", route: "/about"},
        {name: "Blog", route: "/articles"},
        {name: "Contact", route: "/contact"},
    ];

    return ( 
        <>
            <nav ref={navbarRef} className='md:px-32 px-4 py-4 top-0 left-0 sticky duration-500 ease-in-out z-50 bg-white opacity-95 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-xl uppercase font-semibold '>
                            <img className="md:w-36 w-28" src={logo} alt="" />
                        </Link>
                        
                        <div className="flex md:hidden text-xl text-gray-800">
                            <button onClick={toggleNavbar}>
                                <BarIcon open={open} /> 
                            </button>
                        </div>
                    </div>
                    
                    <div className='md:flex items-center hidden text-gray-900'>
                        <li className='md:mx-3 md:my-0 my-4 list-none'>
                            <a 
                                href="https://shop.vabrisetech.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-cyan-600"
                            >
                                Shop
                            </a>
                        </li>
                            <MenuCustomList />
                        <ul className="md:flex items-center ">
                            {menus.map((item, index) => (
                                <div key={index}>
                                    <li 
                                        onClick={() => setActiveIndex(index)}
                                        className={`${activeIndex === index ? `btns py-1 px-2` : `text-gray-900`} md:px-3 `}
                                    >
                                        <Link to={item.route}>
                                            {item.name}
                                        </Link>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-16 right-0 bottom-0 py-4 w-[80%] h-screen duration-300 ease-in-out bg-white`}>
                    <ul className="flex flex-col justify-center top-16 text-base text-gray-800 font-medium">
                        <hr />
                            <li className="p-4 hover:bg-cyan-500 hover:text-white"><MenuCustomList /></li>
                        <hr />
                        {menus.map((item, index) => (
                            <div key={index}>
                                <Link to={item.route}>
                                    <li 
                                        onClick={() => {toggleNavbar(); closeNavbar();}} 
                                        className="p-4 border-b hover:bg-cyan-500 hover:text-white hover:cursor-pointer"
                                    >
                                        {item.name}                                
                                    </li>
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
