import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { testimonials } from "../data";
// import '@splidejs/react-splide/css/skyblue';
import { homeCarousel } from "../../../utils/Carousel";


function Testimonials() {
  return (
    <div className="bg-gray-100 py-12 md:mb-32 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-cyan-800">What Our Clients Say</h2>
        <div className="mt-8">
          <Splide
            options={homeCarousel}
          >
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <div className="text-center px-4 py-6 bg-white shadow-md rounded-lg">
                  <p className="text-xl text-gray-800 mb-4">"{testimonial.content}"</p>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
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