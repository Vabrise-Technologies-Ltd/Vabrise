import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { LuShoppingCart } from "react-icons/lu";


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const menus = [
        {name: "About", route: "/about"},
        // {name: "Services", route: "/services"},
        {name: "Shop", route: "/products"},
        {name: "Blog", route: "/articles"},
        {name: "Contact", route: "/contact"},
    ]

    return ( 
        <>
            <nav className='md:px-32 px-4 py-4 top-0 left-0 md:sticky z-[100] bg-white opacity-95 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-xl uppercase font-semibold '>
                            <img className="md:w-36 w-28" src={logo} alt="" />
                        </Link>
                        
                        <div className="md:hidden text-xl text-gray-800">
                            <button className="mr-4 bg-white hover:scale-110 shadow-lg hover:shadow-xl rounded-full p-2">
                                {/* <small className="-m-4">0</small> */}
                                <LuShoppingCart />   
                            </button>
                            <button onClick={() => setOpen((prev) => !prev)}>
                                {open ? <FaTimes/> : <FaBars/>}
                            </button>
                        </div>
                    </div>
                    
                    <div className='md:flex hidden text-gray-800'>
                        <div className="dropdown dropdown-hover ">
                            <div tabIndex={0} role="button" className=" m-1 md:text-lg font-mediu">Solutions</div>
                           
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-cyan-100 opacity-20 text-sm rounded-box w-52">
                                {/* <li><a>Hardware Sales</a></li> */}
                                    <li><Link to='solutions/software-sales'>Software Sales</Link></li>
                                    <li><Link to='solutions/web-and-email-solutions'>Web & Email Solutions</Link></li>
                                    <li><Link to='solutions/it-support-and-maintainance'>IT Support & Maintainance</Link></li>
                                    <li><Link to='solutions/cyber-security'>Cyber Security</Link></li>
                                    <li><Link to='solutions/training-and-consultancy'>Training & Consultancy Serices</Link></li>
                                </ul>
                        </div>
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
                            
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0 space-y-8 py-6 px-8 w-[85%] h-screen duration-300 ease-in-out bg-cyan-700`}>
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
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;