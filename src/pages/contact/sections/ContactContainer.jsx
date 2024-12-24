import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 md:my-36 my-20">
      <h1 className="section-title text-4xl font-bold mb-10">Reach Out</h1>
      <div className="md:flex md:gap-8 justify-around items-start md:p-10 p-6 rounded-lg w-full">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
