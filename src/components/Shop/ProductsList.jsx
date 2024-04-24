import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";


const ProductsList = ({products, loading, error}) => {


    return ( 
        <>
            <div>
                {error}
            </div>

            
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-8">
                    {products && products.map((item) => (
                        <div className="border border-cyan-500 rounded-md shadow-sm hover:shadow-md sm:w-full w-48">
                            <a className="relative  flex flex-col overflow-hidden" href="#">
                                <Link className="mt-6 " to={`/products/${item.slug}`}>
                                    <figure className=" p-2 rounded-b-md flex flex-col items-center justify-center">
                                        <img className="lg:h-32 md:h-24 h-16 " src={item.thumbnail} alt="" />
                                    </figure>
                                </Link>
                                <span class="absolute top-0 left-0 rounded-tl-md bg-cyan-500 px-2 text-center text-sm font-bold text-white">
                                    - {item.discountPercentage}% 
                                </span>
                            </a>
                            <div>
                                
                                <div className="text-center min-h-0 -mt-3 w-full py-4 px-2">
                                    <h2 className="font-semibold text-gray-700">{item.product_name.slice(0,22)}</h2>
                                    <div className="flex md:justify-between justify-between items-center my-1 text-sm">
                                        <p className="text-cyan-500 font-bold">Ksh{item.price}</p>
                                        {/* <p className="text-gray-400 text-xs font-medium line-through">Ksh 1000</p> */}
                                        <p className="text-red-500 font-semibold line-through ">Ksh 1000</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="btns py-1 px-2">Add To Cart</button>
                                        <div className="flex justify-between text-xl items-center space-x-4 text-gray-700">
                                            <FaHeart className="hover:text-cyan-700"/>
                                            <Link className="hover:text-cyan-700" to={`/products/${item.slug}`}>
                                                <FiEye />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    ))}
                </div>
        </>
     );
}
 
export default ProductsList;