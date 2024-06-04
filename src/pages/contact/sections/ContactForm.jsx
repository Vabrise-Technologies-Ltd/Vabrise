import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input, Textarea, Button } from "@material-tailwind/react";
import toast from 'react-hot-toast';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rtpxewb', 'template_gujwh2i', form.current, '7hBX7r1q43CF1rnMO')
        .then((result) => {
            console.log('Message sent successfully!', result.text);
            toast.success('Email sent successfully');
        }, (error) => {
            console.error('There was an error, please try again!', error.text);
            toast.error('There was an error, please try again!');
        });

        e.target.reset();
    };

    return (
        <div className='md:mt-0 mt-16'>
            <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col gap-6 md:w-96">
                    <Input 
                        label='Username' 
                        color='cyan' 
                        name='user_name'
                        required 
                    />
                    <Input 
                        label='Email' 
                        color='cyan' 
                        name='user_email'
                        required 
                    />
                    <Input 
                        label='Phone' 
                        color='cyan' 
                        name='user_phone'
                        required 
                    />
                    <Textarea 
                        label='Message' 
                        color='cyan' 
                        name='message'
                    />
                </div>
                <Button type="submit" color="cyan" className="w-full mt-3">
                    Send Message
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
