import Categories from "../components/Shop/Categories";
import ProductsList from "../components/Shop/ProductsList"

const Shop = ({products, loading, error}) => {
    // console.log(products)

    return ( 
        <>
            <div className='flex justify-between md:gap-6 sm:gap-4 gap-3 md:m-16 my-8 mx-4'>
                <Categories />
                <ProductsList products={products} loading={loading} error={error}/>
            </div>
            

        </>
     );
}
 
export default Shop;