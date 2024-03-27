import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const ProductsList = ({products, loading, error}) => {
    console.log(products)
    // if (!loading) {
    //     const stars = products.products.map((item) => item.rating)
    //     console.log(stars)
    // }
    // const filteredProducts = products.filter((product) => 
    //     product.title.toLowerCase().includes(search.toLowerCase()) && 
    //     category === '' || product.category.toLowerCase() === category.toLowerCase()
    // )

    return ( 
        <>
            <div>
                {error}
            </div>
             
            {loading ? (
                <div className="flex justify-center items-center md:my-32 my-12 ">
                    <ScaleLoader
                        color="#06b6d4"
                        height={60}
                        radius={100}
                        width={4}
                    />
                </div>
            ) : (
                <div className="grid md:grid-cols-4 sm:grid-cols-2  gap-6">
                    {products && products.map((item) => (
                        <div className="bg-gray-100 rounded-md shadow-sm hover:shadow-md">
                            <a className="relative  flex flex-col overflow-hidden" href="#">
                                <Link className="mt-8" to={`/products/${item.slug}`}>
                                    <figure className="bg-gray-100 p-2 rounded-b-md flex flex-col items-center justify-center">
                                        <img className="lg:h-32 md:h-24 h-16" src={item.thumbnail} alt="" />
                                    </figure>
                                </Link>
                                <span class="absolute top-0 left-0 rounded-sm bg-cyan-900 px-2 text-center text-sm font-medium text-white">
                                    -{item.discountPercentage}% 
                                </span>
                            </a>
                            <div>
                                
                                <div className="text-center bg-white h-24 w-full py-4 px-2">
                                    <h2 className="font-semibold text-gray-700">{item.product_name}</h2>
                                    <div>
                                        <p className="text-cyan-600 font-medium">Ksh {item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
            )}
        </>
     );
}
 
export default ProductsList;