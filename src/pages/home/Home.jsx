import { Splide, SplideSlide } from "@splidejs/react-splide";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import OurWork from "./sections/OurWork";
// import { serviceCarousel } from "../../utils/Carousel"
// import { Link } from "react-router-dom";
import { solutions } from "../solutions/data";
import Services from "./sections/HomeServices";
// import OurPartners from "./sections/OurPartners";

const Home = () => {
    return ( 
        <>
            <Hero />
            <div className="lg:px-32 md:px-16 px-6 ">
                <AboutUs />
            </div>
            <section className="lg:p-28 md:p-24 py-16 my-8 bg-gray-200"  >
                   <Services />
                </section>
            <div className="lg:px-32 md:px-16 px-6 ">
                <OurWork />
            </div>
            {/* <OurPartners /> */}
        </>
     );
}
 
export default Home;