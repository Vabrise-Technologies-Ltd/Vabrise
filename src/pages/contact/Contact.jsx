import Map from "./sections/Map";
import ContactDetails from "./sections/ContactDetails";
import ContactForm from "./sections/ContactForm";

const Contact = () => {
    return ( 
        <>
            <div>
                <Map />
            </div>
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-gray-800 md:my-36 my-20">
                <h1 className="section-title text-4xl font-bold mb-10">Reach Out</h1>
                <div className="md:flex md:gap-8 justify-around items-start md:p-10 p-6 rounded-lg w-full">
                    <ContactDetails />
                    <ContactForm />
                </div>
            </div>
        </>
     );
}
 
export default Contact;