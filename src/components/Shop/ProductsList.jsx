import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";


const ProductsList = ({products, loading, error}) => {
    const  { addToCart } = useContext(CartContext)

    return ( 
        <>
            <div>
                {error}
            </div>

            
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-8 mb-8">
                    {products && products.map((item) => (
                        <div>
                            <div className="border border-cyan-500 rounded h-[250px] mb-4 relative overflow-hidden group transition">
                                <div className="relative flex-col overflow-hidden w-full h-full flex justify-center items-center">
                                    <div className="w-[200px] mx-auto flex justify-center items-center">
                                    <img
                                        className="max-h-[120px] group-hover:scale-105 transition duration-300"
                                        src={item.thumbnail}
                                        alt=""
                                    />
                                    </div>
                                    <span class="absolute top-0 left-0 rounded-tl-sm bg-cyan-500 px-2 text-center text-sm font-bold text-white">
                                        - {item.discountPercentage}% 
                                    </span>
                                </div>
                                <div className="absolute bottom-3 -right-1 group-hover:right-4 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-lg">
                                    <button 
                                        onClick={() => addToCart(item, item.id)}
                                        className="w-9 h-9 rounded flex justify-center items-center text-white bg-cyan-500">
                                        <MdOutlineAddShoppingCart />
                                    </button>
                                    <Link className="w-10 h-10 rounded bg-white flex justify-center items-center text-cyan-500 drop-shadow-xl" to={`/products/${item.slug}`}>
                                        <FiEye />
                                    </Link>
                                </div>
                            </div>
                            <div className="p-2">
                                <p className="tex-sm capitalize text-gray-500 mb-1">{item.brand}</p>
                                <Link to={`/products/${item.slug}`}>
                                    <h2 className="font-semibold mb-1">{item.product_name.slice(0,22)}</h2>
                                </Link>
                                <h2 className="font-semibbold text-cyan-600">Ksh {item.price}</h2>
                            </div>
                        </div>
                    ))}
                </div>
        </>
     );
}
 
export default ProductsList;