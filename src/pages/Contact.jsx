import { Bounce } from "react-reveal";
import Map from "../components/Contact/Map";
import ContactContainer  from "../components/Contact/ContactContainer"

const Contact = () => {
    return ( 
        <>
            <ContactContainer />
            <Bounce top>
                <div className="flex flex-col items-center justify-center text-gray-800 md:my-12 my-8">
                    <h1 className="section-title">Reach Out</h1>
                </div>
            </Bounce>
            <div>
                <Map />
            </div>
        
        </>
     );
}
 
export default Contact;