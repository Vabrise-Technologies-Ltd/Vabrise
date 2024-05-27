import { FaPaperPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const ContactForm = () => {
     
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rtpxewb', 'template_gujwh2i', form.current, '7hBX7r1q43CF1rnMO')
        .then((result) => {
            console.log(result.text);
            console.log('Message sent successfully!')
        }, (error) => {
            console.log(error.text);
            console.log('There was an error, please try again!')
        });
        
        e.target.reset()
        alert('Email sent successfully')
    };

    return ( 
        <>
            <div>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="flex flex-col gap-6 w-96">
                        <Input label='Username' color='cyan' required />
                        <Input label='Email' color='cyan' required />
                        <Input label='Phone' color='cyan' required />
                        <Textarea label='Message' color='cyan' />
                    </div>
                    <button className="w-full mt-3" >
                        <Button color="cyan" className="w-full">
                            Send Message
                        </Button>
                    </button>
                    
                </form>
            </div>
        
        </>
     );
}
 
export default ContactForm;