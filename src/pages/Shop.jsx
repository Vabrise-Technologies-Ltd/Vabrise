import ProductsList from "../components/Shop/ProductsList"

const Shop = ({products}) => {
    // console.log(products)

    return ( 
        <>
            <div>
                <ProductsList products={products}/>
            </div>
        </>
     );
}
 
export default Shop;