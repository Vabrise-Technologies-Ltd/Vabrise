import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MenuCustomList from "./MenuCustomList";
import BarIcon from "./BarIcon";
import logo from "../../assets/utils/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navbarRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpen(false);
                setActiveDropdown(null);
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
        setActiveDropdown(null);
    };

    const menus = [
        {name: "About", route: "/about"},
        {name: "Blog", route: "/articles"},
        {name: "Contact", route: "/contact"},
    ];

    return ( 
        <>
            <nav ref={navbarRef} className='xl:px-32 lg:px-24 md:px-8 px-3 py-4 top-0 left-0 sticky duration-500 ease-in-out z-50 bg-white opacity-95 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-xl uppercase font-semibold '>
                            <img className="md:w-36 w-28" src={logo} alt="Logo" />
                        </Link>
                        
                        <div className="flex md:hidden text-xl text-gray-800">
                            <button onClick={toggleNavbar}>
                                <BarIcon open={open} /> 
                            </button>
                        </div>
                    </div>
                    
                    <div className='md:flex items-center hidden text-gray-900'>
                        <MenuCustomList 
                            closeNavbar={closeNavbar} 
                            activeDropdown={activeDropdown}
                            setActiveDropdown={setActiveDropdown}
                            isMobile={false}
                        />
                        <ul className="md:flex items-center ">
                            {menus.map((item, index) => (
                                <div key={index}>
                                    <li 
                                        onClick={() => setActiveIndex(index)}
                                        className={`${activeIndex === index ? `text-cyan-600 font-semibold py-1 px-2` : `text-gray-900`} md:px-3 hover:text-cyan-600`}
                                    >
                                        <Link to={item.route}>
                                            {item.name}
                                        </Link>
                                    </li>
                                </div>
                            ))}
                            <li className="bg-none text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white hover:transition hover:duration-300 hover:ease-in-out hover:scale-105 rounded py-1 px-3 mr-2">
                                <a 
                                    href="https://savannaacademy.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                >
                                    Mentorship
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0 py-4 w-[90%] h-screen duration-500 ease-in-out bg-white shadow-xl opacity-100`}>
                    <ul className="flex flex-col justify-center top-0 text-base text-gray-800 font-medium">
                        <li className="px-4 pb-4">
                            <Link to='/' className='md:text-2xl text-xl uppercase font-semibold '>
                                <img className="md:w-36 w-28" src={logo} alt="Logo" />
                            </Link>
                        </li>
                        <hr />
                        <li className="p-4 ">
                            <MenuCustomList 
                                closeNavbar={closeNavbar} 
                                activeDropdown={activeDropdown}
                                setActiveDropdown={setActiveDropdown}
                                isMobile={true}
                            />
                        </li>
                        <hr />
                        {menus.map((item, index) => (
                            <div key={index}>
                                <Link to={item.route}>
                                    <li 
                                        onClick={closeNavbar} 
                                        className="p-4 border-b hover:text-cyan-600 hover:cursor-pointer"
                                    >
                                        {item.name}                                
                                    </li>
                                </Link>
                            </div>
                        ))}
                        <a 
                            className="p-4 border-b bg-cyan-500 text-white min-w-full hover:cursor-pointer"
                            href="https://savannaacademy.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                        >
                            Mentorship
                        </a>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;

