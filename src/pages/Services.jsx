import ServicesList from "../components/Services/ServicesList";

const Services = () => {
    return ( 
        <>
            <div className="lg:px-32 md:px-16 px-6 md:py-28 py-12 grid md:grid-cols-3 md:gap-8">
                <ServicesList />
            </div>
        </>
     );
}
 
export default Services;