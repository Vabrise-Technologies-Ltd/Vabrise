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
            className={` ${index === 0 || index === whyUsData.length - 1 ? 'service-card1' : index === Math.floor(whyUsData.length / 2) ? 'service-card2' : ''}`}>
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
