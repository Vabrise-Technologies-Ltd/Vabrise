import soft from "../assets/soft-dev.png"
import design from "../assets/design.png"
import training from "../assets/training.png"
import security from "../assets/security.png"

const OurServices = () => {
    const services = [
        {image: soft, title: "Software Development", content: "We work handy with our clients to create user-friendly, interactive & scalable web-based & mobile applications."},
        {image: design, title: "Graphics Design", content: "We have a strong branding portfolio in logos, posters, & flyers design and affirm to deliver this to all our clients."},
        {image: training, title: "Technical Training", content: "We offer a project-based 8-weeks training on courses such as Frontend & Backend Software development, Graphics design & Cyber Security."},
        {image: security, title: "Cyber Security", content: "Our expertise in CCTV & Network Installations has put us on top because we deliver unmatched quality work."}
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