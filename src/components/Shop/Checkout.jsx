import ShippingForm from "./ShippingForm";

const Checkout = () => {

    const shippingFee = 200

    return ( 
        <>
            <div className="md:flex flex-row md:mx-16 mx-4 md:my-16 my-8 md:gap-16 gap-0">
                <div className="flex flex-col md:basis-2/3 md:mb-0 mb-8">
                    <ShippingForm />
                </div>

                <div className="md:basis-1/3 ">
                    <div className="bg-green-200 p-4 rounded-lg space-y-2 font-semibold text-gray-700">
                        <h3>Cart Summary</h3>
                        <div className="flex item-center justify-between">
                            Subtotal: 
                            <span>Ksh 2000</span>
                        </div>
                        <div className="flex item-center justify-between">
                            Shipping Fee: 
                            <span>Ksh {shippingFee}</span>
                        </div>
                        <div className="flex item-center justify-between">
                            Total Amount: 
                            <span>Ksh 3000</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Checkout;