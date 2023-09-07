import { motion } from "framer-motion";
import { Slide } from "react-reveal";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";


const ContactContainer = () => {
    return ( 
        <>
            <div>
                <div className="flex flex-col items-center justify-center text-gray-800 md:mt-36 mt-20">
                    <h1 className="section-title">Reach Out</h1>
                </div>
                <div className="md:flex md:gap-8 justify-around items-center md:p-10 p-6 md:mb-32 mb-16 rounded-lg">
                    <Slide bottom>
                        <div className="flex flex-col md:my-0 md:text-2xl text-center text-2xl text-gray-700 space-y-6 ">
                            <ContactDetails />
                        </div>
                    </Slide>

                    <Slide bottom>
                        <ContactForm />
                    </Slide>
                    
                </div>
            </div>
        </>
     );
}
 
export default ContactContainer;