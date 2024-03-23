import { Link } from "react-router-dom";

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
            <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-12 gap-6">
                {loading ? (
                    <div>Loading products...</div>
                ) : (
                    products.products.map((item) => (
                        <div className="bg-gray-100 p-1 rounded-md">
                            <figure className="bg-gray-100 p-4 rounded-b-md flex flex-col items-center justify-center">
                                <img className="lg:h-32 md:h-24 h-16" src={item.thumbnail} alt="" />
                            </figure>
                            <div className="text-center bg-white h-20 w-full p-2">
                                <h2 className="font-semibold text-gray-700">{item.title}</h2>
                                <div>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline badge-success ">{item.category}</div> 
                                <div className="badge badge-outline">{item.brand}</div>
                            </div>
                            <button>
                                <Link to={`/products/${item.id}`}>
                                    More
                                </Link>
                            </button>
                        </div>
                        
                    ))
                )}
            </div>
        </>
     );
}
 
export default ProductsList;