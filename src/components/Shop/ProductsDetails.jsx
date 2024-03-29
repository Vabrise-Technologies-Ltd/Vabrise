import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { useState } from "react";

const ProductsDetails = ({products, loading, error}) => {
    const { slug } = useParams()

    const product = products && products.find((item) => item.slug == slug) || {}
    console.log(product)

    if (loading || !products) {
        return (
            <div className="flex justify-center items-center md:my-32 my-12 ">
                <ScaleLoader
                    color="#06b6d4"
                    height={60}
                    radius={100}
                    width={4}
                />
            </div>
        );
    }
 const [items, setItems] = useState(1);
    const handleIncrement = () => {
        setItems(items + 1);
      };
      const handleDecrement = () => {
        setItems(items - 1);
      };

    return ( 
        <div className="md:grid grid-cols-2 md:mx-24 mx-4 md:my-32 my-16">
            <div >
                <img src={product.thumbnail} alt="" />
            </div> 
            <div>
                <div className="flex justify-between ">
                    <h2>{product.product_name}</h2>
                    <p className={`text-white ${product.stock ? `bg-cyan-500` : `bg-red-500`} rounded-md p-1 px-2`}>{product.stock > 0 ? `Available` : `Out of stock`}</p>
                </div>
                <hr className="my-4"/>
                <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    className=""
                ></div>
                <h4 className="text-cyan-800 font-semibold md:text-xl my-2">Ksh {product.price}</h4>
                <div className="md:flex space-x-2 pt-3">
                    <div className="flex w-60 md:w-32 rounded h-auto bg-gray-300 justify-between p-2 py-2 ">
                        <button
                            onClick={handleDecrement}
                            className=" text-cyan-500 text-xl"
                            disabled={items === 0}
                        >
                            -
                        </button>
                        <h2 className=" text-lg">{items}</h2>
                        <button
                            onClick={handleIncrement}
                            className=" text-cyan-500 text-xl"
                        >
                            +
                        </button>
                    </div>
                    <div>
                        <button
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