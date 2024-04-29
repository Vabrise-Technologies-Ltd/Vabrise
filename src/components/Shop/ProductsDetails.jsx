import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { FetchContext } from "../Contexts/FetchContext";

const ProductsDetails = () => {
    const { slug } = useParams()
    const { addToCart } = useContext(CartContext)
    const {products, loadingProducts, errorProducts} = useContext(FetchContext)

    const product = products && products.find((item) => item.slug == slug) || {}
    

    if (loadingProducts || !products) {
        return (
            <div className="flex justify-center items-center md:my-32 my-12 ">
                <BounceLoader
                    color="#06b6d4"
                    height={60}
                    radius={100}
                    width={4}
                />
            </div>
        );
    }
 

    return ( 
        <div className="md:grid grid-cols-2 md:mx-24 mx-4 md:my-32 my-16">
            <div >
                <img src={product.thumbnail} alt="" />
            </div> 
            <div>
                <div className="flex justify-between ">
                    <h2>{product.product_name}</h2>
                    {/* <p className={`text-white ${product.stock ? `bg-cyan-500` : `bg-red-500`} rounded-md p-1 px-2`}>{product.stock > 0 ? `Available` : `Out of stock`}</p> */}
                </div>
                <hr className="my-4"/>
                <h4 className="text-cyan-800 font-semibold md:text-xl my-2">Ksh {product.price}</h4>
                <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    className=""
                ></div>
                {/* <h4 className="text-cyan-800 font-semibold md:text-xl my-2">Ksh {product.price}</h4> */}
                <div className="md:flex space-x-2 pt-3">
                    <div>
                        <button
                            onClick={() => addToCart(product, product.id)}
                            className="btns"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>         
        </div>
    );
}
 
export default ProductsDetails;