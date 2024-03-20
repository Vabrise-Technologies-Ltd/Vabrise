const ProductsList = ({products}) => {
    console.log(products)
    return ( 
        <>
            <div>
                {products.map((item) => (
                    <div className="card md:w-72 bg-base-100 shadow-xl">
                        <figure><img src={item.thumbnail} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {item.title}
                            <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{item.category}</div> 
                                <div className="badge badge-outline">{item.brand}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default ProductsList;