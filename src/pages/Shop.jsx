import Categories from "../components/Shop/Categories";
import ProductsList from "../components/Shop/ProductsList"
import { BounceLoader } from "react-spinners";
import { FaThList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useState } from "react";
import { RiDropdownList } from "react-icons/ri";                                                
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Shop = ({products, loading, error}) => {
    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false);
    
    const menus = [
        {name: "About", route: "/about"},
        {name: "Shop", route: "/products"},
        {name: "Blog", route: "/articles"},
        {name: "Contact", route: "/contact"},
    ];

    const filteredItems = products.filter((item) => item.product_name.toLowerCase().includes(search.toLowerCase()))

    console.log(filteredItems)

    return ( 
        <>
            <div className='sm:flex items-start md:gap-6 sm:gap-4 gap-3 md:m-16 my-8 mx-4'>
                <Categories />
                
                <div className="md:space-y-8 space-y-4">
                    <div>
                        <div className="md:grid md:grid-cols-2 flex items-center justify-between md:mt-0 my-6 md:mb-8">
                            <div>
                                <input 
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="inputs w-full" 
                                    type="search" 
                                    placeholder="Search products.." 
                                />
                            </div>
                            <div className="flex items-center justify-end text-2xl text-gray-500">
                                <button className="text-cyan-600 md:flex hidden">
                                    <BsGrid3X3GapFill />
                                </button>
                                <button className="ml-4 md:flex hidden">
                                    <FaThList />
                                </button>
                                <button onClick={() => setOpen((prev) => !prev)} className="ml-4 flex md:hidden ">
                                    <RiDropdownList />
                                </button>
                                <button className="ml-4 flex md:hidden text-cyan-600">
                                    <FiFilter />
                                </button>
                            </div>

                            <div className={`${open ? "top-0 " : "top-[-100%]"} sm:hidden absolute left-0 right-0 space-y-8 py-6 px-8 w-full h-[50%] duration-300 ease-in-out bg-cyan-700`}>
                                <ul className="flex flex-col justify-center mt-8 text-base text-gray-200 font-medium">
                                        {menus.map((item, index) => (
                                            <div key={index}>
                                                <li onClick={() => setOpen((prev) => !prev)} className={`md:mx-3 md:my-0 my-4 `}>
                                                    <Link to={item.route}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            </div>
                                        ))}
                                </ul>
                            </div>

                        </div>
                        {loading ? (
                            <div className="flex justify-center items-center md:my-32 my-12 ">
                                <BounceLoader
                                    color="#06b6d4"
                                    height={60}
                                    radius={100}
                                    width={4}
                                />
                            </div>
                        ) : (
                            <div>
                                <ProductsList products={products} loading={loading} error={error}/>
                                <ProductsList products={products} loading={loading} error={error}/>
                                <ProductsList products={products} loading={loading} error={error}/>
                                <ProductsList products={products} loading={loading} error={error}/>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </>
     );
}
 
export default Shop;