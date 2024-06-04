import React from 'react';
import { Typography } from '@material-tailwind/react';
import { FaLaptopCode, FaCloud, FaShieldAlt, FaPaintBrush, FaServer, FaWrench } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode size={30} className="text-pink-500" />,
    title: "Software Development",
    description: "Our broad spectrum of Software products have been designed, created, tested, maintained & implemented in all corners of the World."
  },
  {
    icon: <FaCloud size={30} className="text-yellow-500" />,
    title: "Software As A Service (SAAS)",
    description: "We deploy cloud-based software delivery models by developing & maintaining cloud application software & providing automatic software updates."
  },
  {
    icon: <FaShieldAlt size={30} className="text-teal-500" />,
    title: "Cybersecurity",
    description: "Tech platforms rely on Critical Infrastructure Security, Network Security, Cloud Security, Application Security & Internet of Things (IoT) Security."
  },
  {
    icon: <FaPaintBrush size={30} className="text-green-500" />,
    title: "Web Design",
    description: "Our Software Engineers efficiently design Adaptive, Dynamic & Responsive websites with emphasis on User Experience (UX) & Search Engine Optimization."
  },
  {
    icon: <FaServer size={30} className="text-yellow-500" />,
    title: "Cloud Computing",
    description: "Cloud services will allow your employees to work remotely on projects from any location. This is especially useful to companies that operate in multiple locations."
  },
  {
    icon: <FaWrench size={30} className="text-blue-500" />,
    title: "IT Consulting & Maintenance",
    description: "We assess the needs of a business to determine which IT pathway would be best for them based on their goals. We also assist to deploy selected IT Services & maintain them."
  },
];

const Services = () => {
  return (
    <div className="mx-4">
        <div className="mb-8">
            <h1 className="section-title text-cyan-600">Our Services</h1>
            <Typography
                className="text-center md:text-xl mx-auto w-full text-gray-700 max-w-4xl"
            >
                Since inception, we have been steadfast in churning out revolutionary software products to counter the challenges faced by businesses in their operations
            </Typography>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
