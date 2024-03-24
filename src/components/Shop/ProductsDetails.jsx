import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const ProductsDetails = ({products, loading, error}) => {
    const { slug } = useParams()

    const product = products && products.find((item) => item.slug == slug) || {}
    console.log(product)

    
     // Check if products is defined and has the articles property
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

    return ( 
        <div className="md:grid grid-cols-2 md:mx-24 mx-4 md:my-32 my-16">
            <div >
                <img src={product.thumbnail} alt="" />
            </div> 
            <div>
                <h2>{product.product_name}</h2>
                <hr className="my-4"/>
                {/* <div>
                    <p>{stock > 0 ? `In stock` : `Out of stock`}</p>
                </div> */}
                <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    className=""
                ></div>
                <h4 className="text-cyan-800 font-semibold md:text-xl">Ksh {product.price}</h4>
            </div>
            <div className="md:mt-6 mt-4 btn">
                Add To Cart
            </div>               
        </div>
    );
}
 
export default ProductsDetails;