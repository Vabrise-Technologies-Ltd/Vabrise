import { useNavigate, useParams } from "react-router-dom"

const ServicesDetails = ({services}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const paramsId = Number(id)

    let serviceItem = {}
    if (serviceItem) {
        let arr = services.filter((item) => item.id == paramsId)
        serviceItem = arr[0]
        // console.log(serviceItem)
    } else {
        serviceItem = {}
    }
    
    const handleClick = () => {
        setTimeout(() => {
            navigate('/services')
        }, 1000);
    }
    return ( 
        <>
            {serviceItem && (
                <div className="grid md:grid-cols-2 md:m-24 m-4 my-16">
                    <div>
                        <img src={serviceItem.image} alt="" />
                    </div>
                    <div className="md:space-y-8 space-y-4">
                        <h3 className="card-title">{serviceItem.title}</h3>
                        <h4 className="font-medium text-gray-700">{serviceItem.summary}</h4>
                        <p className="md:text-base text-sm text-gray-500">{serviceItem.content}</p>
                        <button onClick={handleClick} className='btns'>
                            Back
                        </button>
                    </div>
                </div>
            )}
        </>
     );
}
 
export default ServicesDetails;