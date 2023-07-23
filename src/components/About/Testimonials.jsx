import { Splide, SplideSlide } from "@splidejs/react-splide";
import { testimonials } from "../../data/testimonials";
import '@splidejs/react-splide/css/skyblue';
import { carousel } from "../../utils/Carousel";

const Testimonials = () => {
    return ( 
        <>
            <section className="md:py-24 py-16">
                <h2 className="section-title">Testimonials</h2>
                <div className="w-full md:my-12 my-6">
                <Splide
                    options={carousel}
                >
                    {testimonials.map((item) => (
                        <SplideSlide>
                            <div className=" flex justify-center items-center relative w-full">
                                <div className="flex flex-col md:grid sm:grid-cols-2 md:gap-0 gap-4 items-center justify-center md:w-2/3">
                                    <img src={item.image} className="rounded-full md:h-64 md:w-64 h-48 w-48" />
                                    <div className="md:text-left text-center space-y-1">
                                        <p className="testimonial-card-content">
                                            <span className="md:text-3xl text-2xl">"</span>
                                            {item.content}
                                            <span className="md:text-3xl text-2xl">"</span>
                                        </p>
                                        <h3 className="testimonial-card-name">{item.name}</h3>
                                        <h2 className="testimonial-card-post">{item.post}</h2>
                                    </div>
                                </div>
                            </div> 
                        </SplideSlide>
                    ))}    
                </Splide>                    
                </div>
            </section>
        </>
     );
}
 
export default Testimonials;