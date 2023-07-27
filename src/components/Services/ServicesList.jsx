import { Link } from "react-router-dom";
import { services } from "../../data/services";

const ServicesList = () => {
    
    return ( 
        <>
            <section className="md:py-24 py-16"  >
                <h1 className="section-title">Our Solutions</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 md:gap-8 gap-4">
                    {services.map((service) => (
                        <Link to={`/services/${service.id}`} className="service-card">
                            <div className="w-full">
                                <img className="w-72" src={service.image} alt="" />
                            </div>
                            <h2 className="font-medium text-cyan-800">{service.title}</h2>
                            <p className="text-sm text-center">{service.summary.slice(0,100)}...</p>
                        </Link>
                    ))}
                </div>
            </section>
        </>
     );
}
 
export default ServicesList;