import { Link } from "react-router-dom";
import { services } from "../../data/services";

const ServicesList = () => {
    
    return ( 
        <>
            {services.map((service) => (
                <Link to={`/services/${service.id}`} className="service-card">
                    <div className="w-full">
                        <img className="w-72" src={service.image} alt="" />
                    </div>
                    <h2 className="font-medium text-cyan-800">{service.title}</h2>
                    <p className="text-sm text-center">{service.summary.slice(0,100)}...</p>
                </Link>
            ))}
        </>
     );
}
 
export default ServicesList;