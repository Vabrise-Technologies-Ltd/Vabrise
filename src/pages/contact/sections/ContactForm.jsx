import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input, Textarea, Button } from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast';
import DOMPurify from 'dompurify';
import { z } from 'zod';

const formSchema = z.object({
  user_name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  user_email: z.string().email('Invalid email address'),
  user_phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

const ContactForm = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  const validateForm = (data) => {
    try {
      formSchema.parse(data);
      return {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors.reduce((acc, err) => {
          if (err.path) {
            acc[err.path[0]] = err.message;
          }
          return acc;
        }, {});
      }
      return { form: 'An unexpected error occurred' };
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());
    const formErrors = validateForm(data);

    if (Object.keys(formErrors).length === 0) {
      const sanitizedData = Object.entries(data).reduce((acc, [key, value]) => {
        acc[key] = sanitizeInput(value);
        return acc;
      }, {});

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        sanitizedData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log('Message sent successfully!', result.text);
        toast.success('Email sent successfully');
        if (form.current) form.current.reset();
      }, (error) => {
        console.error('There was an error, please try again!', error.text);
        toast.error('There was an error, please try again!');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    } else {
      setErrors(formErrors);
      setIsSubmitting(false);
    }
  };

  return (
    <div className='md:mt-0 mt-16'>
      <Toaster position="top-right" reverseOrder={false} />
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-6 md:w-96">
          <Input 
            label='Username' 
            color='cyan' 
            name='user_name'
            required 
            error={!!errors.user_name}
          />
          {errors.user_name && <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>}
          <Input 
            label='Email' 
            color='cyan' 
            name='user_email'
            required 
            error={!!errors.user_email}
          />
          {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>}
          <Input 
            label='Phone' 
            color='cyan' 
            name='user_phone'
            required 
            error={!!errors.user_phone}
          />
          {errors.user_phone && <p className="text-red-500 text-xs mt-1">{errors.user_phone}</p>}
          <Textarea 
            label='Message' 
            color='cyan' 
            name='message'
            error={!!errors.message}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <Button type="submit" color="cyan" className="w-full mt-3" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;