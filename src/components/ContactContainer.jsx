import { motion } from "framer-motion";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";


const ContactContainer = () => {
    return ( 
        <>
            <div className="" id="contact">
                <div className="md:flex md:gap-8 justify-around items-center md:p-10 p-6 bg-gray-100 rounded-lg">
                    <div>
                        <motion.div 
                            initial={{x: "-100vw", opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{type: "spring", delay: 0.2, stiffness: 50}}
                            className="flex flex-col md:my-0 md:text-2xl text-center text-2xl text-gray-700 space-y-6 ">
                            <ContactDetails />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{x: "100vw", opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{type: "spring", delay: 0.4, stiffness: 50}}
                        className="">
                        <ContactForm />
                    </motion.div>
                    
                </div>
            </div>
        </>
     );
}
 
export default ContactContainer;