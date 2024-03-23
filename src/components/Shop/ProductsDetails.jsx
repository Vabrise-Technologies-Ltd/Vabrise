import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const ProductsDetails = ({products, loading, error}) => {
    const { id } = useParams()
    const productDetails = products && products.products

    const product = productDetails && productDetails.find((item) => item.id == id) || {}
    console.log(product)

    
     // Check if products is defined and has the articles property
    if (loading || !productDetails) {
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
        <div className="md:mx-24 mx-4 md:my-32 my-16">
            <div >
                <img src={product.thumbnail} alt="" />
            </div> 
            <div>
                <h2>{product.title}</h2>
                {/* <div>
                    <p>{stock > 0 ? `In stock` : `Out of stock`}</p>
                </div> */}
                <h4>Ksh {product.price*120}</h4>
                <p>{product.description}</p>
            </div>
            <div className="md:mt-6 mt-4">
                Add To Cart
            </div>               
        </div>
    );
}
 
export default ProductsDetails;