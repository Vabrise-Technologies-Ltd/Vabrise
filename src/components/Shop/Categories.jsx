
const Categories = () => {
    const brands = ["HP","Dell","Asus","Lenovo","Apple","Huawei","Toshiba","Microsoft"]

    const accessories = ["Monitor", "Laptop Screens", "Keyboard", "Mouse", "HDD & SSD", "Laptop Charger", "Flash Disk", "CCTV Connector", ]
    
    const colors = ["Beige", "Black", "Blue", "Brown", "Gold", "Metallic", "Silver", "White"]
    
    return ( 
        <>
            <div className="sm:flex hidden flex-col gap-8 lg:w-64 ">
                <div className=" rounded-md border ">
                    <p className="py-2 px-4 text-cyan-700 font-bold">Product Categories</p>
                    <hr className="border-cyan-500"/>
                    <div className="bg-gray-100 p-4 space-y-3 ">
                        {accessories.map((item, index) => (
                            <div key={index} className="flex-col gap-4">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-3">
                        <label htmlFor="price">PRICE (KSH)</label>
                        <button className="btns py-1 px-3">Apply</button>
                    </div>
                    <input className="w-full bg-grey rounded outline-none slider-thumb" type="range" name="" id="" />
                </div>

                <div className=" rounded-md border ">
                    <p className="py-2 px-4 text-cyan-700 font-bold">Brands</p>
                    <hr className="border-cyan-500"/>
                    <div className="bg-gray-100 p-4 space-y-3">
                    {brands.map((item, index) => (
                        <div key={index} className="flex-col gap-4">
                            {item}
                        </div>
                    ))}
                    </div>
                </div>

                <div className=" rounded-md border ">
                    <p className="py-2 px-4 text-cyan-700 font-bold">Colors</p>
                    <hr className="border-cyan-500"/>
                    <div className="bg-gray-100 p-4 space-y-3">
                    {colors.map((item, index) => (
                        <div key={index} className="flex-col gap-4">
                            {item}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Categories;