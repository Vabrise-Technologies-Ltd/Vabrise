import test1 from "../assets/CTO.jpg"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
const Testimonials = () => {
    return ( 
        <>
            <section className="md:py-24 py-16">
                <h2 className="section-title">Testimonials</h2>
                <div className="carousel w-full md:my-12 my-6">
                    <div id="slide1" className="carousel-item flex justify-center items-center relative w-full">
                        <div className="flex flex-col md:grid sm:grid-cols-2 md:gap-0 gap-4 items-center justify-center md:w-2/3">
                            <img src={test1} className="rounded-full md:h-64 md:w-64 h-48 w-48" />
                            <div className="md:text-left text-center space-y-1">
                                <p className="testimonial-card-content">
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates, natus."      
                                    </p>
                                <h3 className="testimonial-card-name">Andrew Ochieng</h3>
                                <h2 className="testimonial-card-post">CTO, Vabrise Technologies</h2>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronLeft />
                            </a> 
                            <a href="#slide2" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronRight />
                            </a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item flex justify-center items-center relative w-full">
                        <div className="flex flex-col md:grid sm:grid-cols-2 md:gap-0 gap-4 items-center justify-center md:w-2/3">
                            <img src={test1} className="rounded-full md:h-64 md:w-64 h-48 w-48" />
                            <div className="md:text-left text-center space-y-1">
                                <p className="testimonial-card-content">
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates, natus."      
                                    </p>
                                <h3 className="testimonial-card-name">Andrew Ochieng</h3>
                                <h2 className="testimonial-card-post">CTO, Vabrise Technologies</h2>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronLeft />
                            </a> 
                            <a href="#slide3" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronRight />
                            </a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item flex justify-center items-center relative w-full">
                        <div className="flex flex-col md:grid sm:grid-cols-2 md:gap-0 gap-4 items-center justify-center md:w-2/3">
                            <img src={test1} className="rounded-full md:h-64 md:w-64 h-48 w-48" />
                            <div className="md:text-left text-center space-y-1">
                                <p className="testimonial-card-content">
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates, natus."      
                                    </p>
                                <h3 className="testimonial-card-name">Andrew Ochieng</h3>
                                <h2 className="testimonial-card-post">CTO, Vabrise Technologies</h2>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronLeft />
                            </a> 
                            <a href="#slide4" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronRight />
                            </a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item flex justify-center items-center relative w-full">
                        <div className="flex flex-col md:grid sm:grid-cols-2 md:gap-0 gap-4 items-center justify-center md:w-2/3">
                            <img src={test1} className="rounded-full md:h-64 md:w-64 h-48 w-48" />
                            <div className="md:text-left text-center space-y-1">
                                <p className="testimonial-card-content">
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates, natus."      
                                    </p>
                                <h3 className="testimonial-card-name">Andrew Ochieng</h3>
                                <h2 className="testimonial-card-post">CTO, Vabrise Technologies</h2>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronLeft />
                            </a> 
                            <a href="#slide1" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronRight />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Testimonials;