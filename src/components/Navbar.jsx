import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const menus = [
        {name: "About", route: "/about"},
        {name: "Services", route: "/services"},
        {name: "Blog", route: "/blog"},
        {name: "Contact", route: "/contact"},
    ]

    return ( 
        <>
            <nav className='md:px-32 px-4 py-4 top-0 left-0 sticky z-[100] bg-white opacity-90 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-xl uppercase font-semibold '>
                            <img className="md:w-36 w-28" src={logo} alt="" />
                        </Link>
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-gray-800">
                            <FaBars/>
                        </button>
                    </div>
                    
                    <div className='md:flex hidden text-gray-800'>
                        <ul className="md:flex items-center md:text-lg font-medium">
                            {menus.map((item, index) => (
                                <div key={index}>
                                    <li className='md:mx-3 md:my-0 my-4 '>
                                        <Link to={item.route}>
                                            {item.name}
                                        </Link>
                                    </li>
                                </div>
                            ))}
                            <li className='md:mx-3 md:my-0 my-4'>
                                <a target='_blank' className="btn btn-sm" href='https://learn.vabrisetech.co.ke/'>
                                    Open Learn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-full h-screen duration-300 ease-in-out bg-sky-500`}>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen((prev) => !prev)} className="mb-8 sm:hidden text-2xl text-gray-100 text-right">
                                <FaTimes/> 
                        </button> 
                    </div>
                    <ul className="flex flex-col items-center text-center text-base font-medium">
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
                        <li className='md:mx-8 md:my-0 my-4'>
                            <a target='_blank' className="px-4 py-2 bg-white text-sky-400 duration-500 rounded-lg" href='https://learn.vabrisetech.co.ke/'>
                                Open Learn
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;