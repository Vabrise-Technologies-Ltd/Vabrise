import { motion } from "framer-motion";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";


const Contact = () => {
    return ( 
        <>
            <div className="md:py-16 py-8" id="contact">
                <div className="flex flex-col items-center justify-center pt-8 pb-4 text-gray-800">
                    <p className="text-cyan-500 uppercase font-semibold md:text-base text-sm">Get In Touch</p>
                    <h1 className="section-title">Contact Us</h1>
                </div>
                <div className="md:flex justify-around items-center md:mx-32 my-8 md:p-10 p-6 bg-gray-100 rounded-lg">
                    <div>
                        <motion.div 
                            initial={{x: "-100vw", opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{type: "spring", delay: 0.2, stiffness: 50}}
                            class="flex flex-col md:my-0 my-8 md:text-2xl text-center text-2xl text-gray-700 space-y-8 ">
                            <ContactDetails />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{x: "100vw", opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{type: "spring", delay: 0.4, stiffness: 50}}
                        className="md:mb-0 mb-16">
                        <ContactForm />
                    </motion.div>
                    
                </div>
            </div>
        </>
     );
}
 
export default Contact;