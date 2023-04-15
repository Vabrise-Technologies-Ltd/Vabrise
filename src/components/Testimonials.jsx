import test1 from "../assets/mate.jpg"
import test2 from "../assets/sharon.jpg"
import test3 from "../assets/vera.jpeg"
import test4 from "../assets/jillo.jpeg"
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
                                    "They created our organization's website with top quality & close follow-up during the development."      
                                    </p>
                                <h3 className="testimonial-card-name">Mr. Thompson Mate</h3>
                                <h2 className="testimonial-card-post">Director, Kakamega CSO Network</h2>
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
                            <img src={test2} className="rounded-full md:h-64 md:w-64 h-48 w-48" />
                            <div className="md:text-left text-center space-y-1">
                                <p className="testimonial-card-content">
                                    "I have closely worked with the team & I like how they handle their clients with care & concern."      
                                </p>
                                <h3 className="testimonial-card-name">Sharon Mutai</h3>
                                <h2 className="testimonial-card-post">Graphics Designer, Jappstech Group</h2>
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
                            <img src={test3} className="rounded-full md:h-64 md:w-64 h-48 w-48" />
                            <div className="md:text-left text-center space-y-1">
                                <p className="testimonial-card-content">
                                    "Vabrise Technologies is a trusted business, whichever services they're offering they'll deliver the best."      
                                    </p>
                                <h3 className="testimonial-card-name">Veronica Wambui</h3>
                                <h2 className="testimonial-card-post">Content Creator, TCM</h2>
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
                            <img src={test4} className="rounded-full md:h-64 md:w-64 h-48 w-48" />
                            <div className="md:text-left text-center space-y-1">
                                <p className="testimonial-card-content">
                                    "I am glad for how the team is well organized & delivers quality services on time."      
                                    </p>
                                <h3 className="testimonial-card-name">Brian Gillo</h3>
                                <h2 className="testimonial-card-post">Software Engineer, Gilltech</h2>
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