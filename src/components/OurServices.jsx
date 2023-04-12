import web from "../assets/web-dev.png"
import mobile from "../assets/mobile-dev.png"
import training from "../assets/training.png"
import security from "../assets/security.png"

const OurServices = () => {
    const services = [
        {image: web, title: "Software Development", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur?"},
        {image: mobile, title: "Graphics Design", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur?"},
        {image: training, title: "Technical Training", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur?"},
        {image: security, title: "Cyber Security", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur?"},
        // {image: web, title: "Software Development", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur?"},
        // {image: web, title: "Software Development", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur?"},
    ]
    return ( 
        <>
            <section id="our-services" className="md:py-24 py-16"  >
                <h1 className="section-title">Our Services</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 md:gap-8 gap-4">
                    {services.map((service) => (
                        <div className="service-card">
                            <img src={service.image} alt="" />
                            <h2 className="font-semibold text-cyan-800 md:text-lg">{service.title}</h2>
                            <p className="text-sm text-center">{service.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
     );
}
 
export default OurServices;