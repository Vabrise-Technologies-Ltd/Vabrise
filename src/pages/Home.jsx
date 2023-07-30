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
                        {/* <SplideSlide> */}
                            {/* <div className="flex md:gap-8 gap-4"> */}
                            {services.map((service) => (
                                <SplideSlide>
                                    <div className="flex md:gap-8 gap-4">
                                        <div className="mx-8">
                                        <Link to={`/services/${service.id}`} className="service-card">
                                            <div className="w-full">
                                                <img className="w-72" src={service.image} alt="" />
                                            </div>
                                            <h2 className="font-medium text-cyan-800">{service.title}</h2>
                                            <p className="text-sm text-center">{service.summary.slice(0,100)}...</p>
                                        </Link>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                            {/* </div> */}
                        {/* </SplideSlide> */}
                    </Splide>
                </section>
                <OurWork />
            </div>
        </>
     );
}
 
export default Home;