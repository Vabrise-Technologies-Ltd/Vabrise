import { FaPhone, FaUserAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const ContactDetails = () => {
    const contactInfo = [
        {icon: <FaUserAlt />, details: 'Vabrise Technologies'},
        {icon: <FaPhone />, details: '0799874578/ 0710815080'},
        {icon: <MdLocationOn />, details: 'Nairobi, Kenya'},
        {icon: <HiOutlineMail />, details: 'info@vabrisetech.com'},
    ]
    return ( 
        <>
            {contactInfo.map((info) => (
                <motion.div 
                    whileHover={{y: -8, scale: 1.02}}
                    transition={{type: 'spring', stiffness: 80}}
                    class="flex items-center bg-white rounded-lg ease-out duration-300 p-4 shadow-lg hover:shadow-xl">
                    {info.icon}
                    <p class="md:ml-4 ml-2 mt-2 md:text-sm text-xs">{info.details}</p>
                </motion.div>
            ))}
        </>
     );
}
 
export default ContactDetails;