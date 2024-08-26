import React from 'react';
import { companyFocus } from "../data";

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

const CompanyFocus = () => {
  return (
    <section className="my-16 md:p-4 p-2">
      <header className="text-center">
        <h3 className="section-title lg:mb-12 mb-8 text-2xl font-bold">Who We Are</h3>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16'>
        {companyFocus.map((item, index) => (
          <div
            key={index}
            className={`md:p-4 p-3 rounded-xl shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl ${getCardClass(index, companyFocus.length)}`}
          >
            <div className={`md:p-4 p-3 mb-4 md:text-2xl text-lg md:w-16 w-12 md:rounded-xl rounded-lg flex justify-center md:justify-start items-center ${getIconClass(index, companyFocus.length)}`}>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className='md:text-base text-sm font-light text-black'>{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyFocus;
