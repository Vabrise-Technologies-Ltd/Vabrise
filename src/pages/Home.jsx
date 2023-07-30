import { Splide, SplideSlide } from "@splidejs/react-splide";
import AboutUs from "../components/Home/AboutUs";
import Hero from "../components/Home/Hero";
import OurWork from "../components/Home/OurWork";
import { serviceCarousel } from "../utils/Carousel"
import { Link } from "react-router-dom";
import { services } from "../data/services";

const Home = () => {
    return ( 
        <>
            <Hero />
            <div className="lg:px-32 md:px-16 px-6">
                <AboutUs />
                <section className="md:py-24 py-16"  >
                    <h1 className="section-title">Our Solutions</h1>
                    <Splide
                        options={serviceCarousel}
                    >
                        {services.map((service) => (
                            <SplideSlide>
                                <div className="flex lg:gap-8 md:gap-6 gap-4 md:py-16 py-8">
                                    <div className="mx-8">
                                    <Link to={`/services/${service.id}`} className="service-card text-left h-64">
                                        <div className="w-full">
                                            <i className="text-yellow-500 lg:text-5xl md:text-3xl text-4xl">{service.icon}</i>
                                        </div>
                                        <h2 className="font-medium text-cyan-800">{service.title}</h2>
                                        <p className="text-sm">{service.summary.slice(0,100)}...</p>
                                    </Link>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </section>
                <OurWork />
            </div>
        </>
     );
}
 
export default Home;