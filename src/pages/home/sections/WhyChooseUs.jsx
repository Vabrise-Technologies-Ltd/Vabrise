import React from 'react';
import { whyUsData } from '../data';

const WhyChooseUs = () => {
  return (
    <div className="md:my-32">
      <div className="mb-8">
        <h1 className="section-title">Why Choose Us</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {whyUsData.map((item, index) => (
          <div 
            key={index} 
            className={`md:px-6 md:py-4 px-4 py-2 rounded-tl-2xl rounded-br-2xl shadow ${index === 0 || index === whyUsData.length - 1 ? 'card-color1' : index === Math.floor(whyUsData.length / 2) ? 'card-color2' : ''}`}>
            <h3 
            className={`md:text-lg font-semibold mb-1 ${index === 0 || index === whyUsData.length - 1 ? 'text-gray-700' : index === Math.floor(whyUsData.length / 2) ? 'text-gray-800' : ''}`}
            >{item.title}</h3>
            <p className=' font-light md:text-base text-sm'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
