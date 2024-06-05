import React from 'react';
import actionImage from "../assets/utils/action.jpg";
import { Button } from '@material-tailwind/react';

function CallToAction() {
  return (
    <div 
      className="relative bg-cover bg-top h-96 flex items-center justify-center text-center" 
      style={{ 
        backgroundImage: `url(${actionImage})`,
        backgroundAttachment: 'fixed',
        objectPosition: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white px-4 max-w-2xl ">
        <h2 className="md:text-4xl text-2xl font-bold mb-4">
          Are you ready for a better, more productive business?
        </h2>
        <p className="md:text-xl ">Stop worrying about technology problems. Focus on your business.</p>
        <p className="md:text-xl mb-8">Let us provide the support you deserve.</p>
        <Button
          color='cyan'
          className='rounded-md'
          onClick={() => window.location.href = '/contact'}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default CallToAction;
