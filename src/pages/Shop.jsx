import Categories from "../components/Shop/Categories";
import ProductsList from "../components/Shop/ProductsList"
import { BounceLoader } from "react-spinners";
import { FaThList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useState } from "react";



const Shop = ({products, loading, error}) => {
    const [search, setSearch] = useState('')

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
                            <div className="flex items-center justify-end md:text-xl text-gray-500">
                                <button className="text-cyan-600">
                                    <BsGrid3X3GapFill />
                                </button>
                                <button className="ml-4">
                                    <FaThList />
                                </button>
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