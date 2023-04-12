import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
     
    const handleForm = (e) => {
        e.preventDefault();

        alert("form submitted successfully!")

    }

    return ( 
        <>
            <div>
                <form onSubmit={handleForm} >
                    <div className="my-4">
                        <input className="input" type="text" name="username" placeholder="Enter Username..." required />
                    </div>
                    <div className="my-4">
                        <input className="input" type="email" name="email" placeholder="Enter Email..." required />
                    </div>
                    <div className="my-4">
                        <textarea className="py-2 px-3 rounded-lg w-full focus-within:border-cyan-400 outline-none" name="message" placeholder="Enter Message..." cols="30" rows="5"></textarea>
                    </div>
                    <button className="mt-4 btn rounded-lg flex items-center">
                        Submit
                        <span className="ml-2">
                            <FaPaperPlane />
                        </span>
                    </button>
                </form>
            </div>
        
        </>
     );
}
 
export default ContactForm;