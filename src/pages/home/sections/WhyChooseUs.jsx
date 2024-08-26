import React from 'react';
import { whyUsData } from '../data';

const getCardClass = (index, length) => {
  if (index === 0 || index === length - 1) return 'service-card1 text-gray-700';
  if (index === Math.floor(length / 2)) return 'service-card2 text-gray-800';
  return '';
};

const getIconClass = (index, length) => {
  if (index === 0 || index === length - 1) return 'text-gray-700 bg-gradient-to-r from-yellow-100 to-yellow-200';
  if (index === Math.floor(length / 2)) return 'text-white bg-gradient-to-r from-cyan-100 to-cyan-200';
  return '';
};

const WhyChooseUs = () => {
  return (
    <section className="md:my-32 p-4">
      <header className="mb-8 text-center">
        <h1 className="section-title text-3xl font-bold">Why Choose Us</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {whyUsData.map((item, index) => (
          <article 
            key={index} 
            className={`md:p-6 p-3 rounded-xl shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl ${getCardClass(index, whyUsData.length)}`}
          >
            <div className={`md:p-4 p-3 mb-4 md:text-2xl text-lg md:w-16 w-12 md:rounded-xl rounded-lg flex justify-center md:justify-start items-center ${getIconClass(index, whyUsData.length)}`}> 
              {item.icon}
            </div>
            <h3 className="md:text-lg font-medium mb-2">{item.title}</h3>
            <p className="font-light sm:text-base text-sm text-black">{item.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
