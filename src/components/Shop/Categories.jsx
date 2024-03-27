const brands = [
    {id: 1, name: "HP"},
    {id: 2, name: "Dell"},
    {id: 3, name: "Asus"},
    {id: 4, name: "Lenovo"},
    {id: 5, name: "Apple"},
    {id: 6, name: "Huawei"},
    {id: 7, name: "Microsoft"}
]
const accessories = ["Monitor", "Laptop Screens", "Keyboard", "Mouse", "HDD & SSD", "Laptop Charger", "Flash Disk", "CCTV Connector", ]




const Categories = () => {

    return ( 
        <>
            <div className="flex flex-col gap-8 lg:size-2/6 md:size-3/6 sm:size-4/6">
                <div className="bg-gray-200 p-4 rounded-md ">
                    {brands.map((item, index) => (
                        <div key={index} className="">
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="bg-gray-200 p-4 rounded-md ">
                    {brands.map((item, index) => (
                        <div key={index} className="flex-col gap-4">
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default Categories;