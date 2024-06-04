import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { testimonials } from "../data";
// import '@splidejs/react-splide/css/skyblue';
import { homeCarousel } from "../../../utils/Carousel";

function Testimonials() {
  return (
    <div className="bg-gray-100 md:py-24 py-12 md:mb-32 mb-8">
      <div className="">
        <h2 className="md:text-3xl text-xl font-extrabold text-center text-cyan-800">What Our Clients Say</h2>
        <div className="mt-8 ">
          <Splide options={homeCarousel}>
            {testimonials.map((testimonial, index) => (
              <SplideSlide 
                key={index}
                className='flex justify-center items-center'
              >
                <div className="max-w-xl sm:mx-auto mx-4 sm:px-6 lg:px-8 text-center px-2  py-6 bg-white shadow-md rounded-lg">
                  <div>
                    <img className='md:w-24 w-20 h-20 md:h-24 mx-auto object-cover' src={testimonial.avatar} alt="" />
                  </div>
                  <p className="lg:text-xl md:text-lg text-gray-800 mb-4">"{testimonial.content}"</p>
                  <h3 className="md:*:text-lg font-bold text-cyan-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
