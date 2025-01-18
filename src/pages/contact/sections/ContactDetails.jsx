import { FaPhone, FaUserAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const ContactDetails = () => {
  const contactInfo = [
    { icon: <FaUserAlt size={24} />, details: 'Vabrise Technologies' },
    { icon: <FaPhone size={24} />, details: '0710815080/ 0799874578' },
    { icon: <MdLocationOn size={24} />, details: 'Stima View Flats, Kipkabus Road, Parklands, Nairobi' },
    { icon: <HiOutlineMail size={24} />, details: 'info@vabrisetech.com' },
  ];

  return (
    <div className="space-y-6 md:w-[40%] w-full mx-auto">
      {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="flex items-center justify-start bg-white rounded-lg px-4 py-6 shadow-lg hover:shadow-xl"
        >
          <p className="text-cyan-800">{info.icon}</p>
          <p className="ml-4 text-lg text-gray-700">{info.details}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactDetails;
