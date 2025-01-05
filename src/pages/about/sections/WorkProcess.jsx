import React from 'react';
import { workProcesses } from '../data';

const WorkCard = ({ icon, title, description }) => (
  <div className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500  md:px-4 md:py-3 py-3 px-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="text-white md:text-4xl text-3xl mb-4">{icon}</div>
    <h3 className="md:text-xl  font-semibold text-yellow-500 mb-2">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

export default function WorkProcess() {
  return (
    <section className="md:pt-8">
      <div className="container mx-auto px-4">
        <h2 className="section-title lg:mb-12 mb-8 text-2xl font-bold">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
          {workProcesses.map((item, index) => (
            <WorkCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}