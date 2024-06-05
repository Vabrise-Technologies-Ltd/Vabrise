import React from 'react';
import { Typography } from '@material-tailwind/react';
import { servicesData } from '../data';

const Services = () => {
  return (
    <div className="mx-3">
        <div className="mb-8">
            <h1 className="section-title text-cyan-600">Our Services</h1>
            <Typography
                className="text-center md:text-xl mx-auto w-full text-gray-700 max-w-4xl"
            >
                Since inception, we have been steadfast in churning out revolutionary software products to counter the challenges faced by businesses in their operations.
            </Typography>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="relative flex bg-white lg:py-6 md:py-4 py-3 lg:pr-6 md:pr-4 pr-2 rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-2 duration-500 overflow-hidden">
            <div className="absolute  top-1/2 transform -translate-y-1/2 flex items-center justify-center">
              {service.icon}
            </div>
            <div className="md:pl-12 pl-8 md:ml-4 ml-3">
              <h3 className="md:text-xl text-lg font-bold mb-2">{service.title}</h3>
              <p className="md:text-base text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
