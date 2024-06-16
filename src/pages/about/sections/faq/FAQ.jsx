import React from 'react';
import FAQItem from './FAQItem';
import faqImg from "../../../../assets/solutions/faq.svg"
import { faqs } from '../../data';

function FAQ() {

  return (
    <div className="faq-container ">
      <h1 className="section-title md:mb-16">Frequently Asked Questions</h1>
      <div className='grid md:grid-cols-2 md:gap-16 gap-8'>
        <div>
          <img src={faqImg}alt="" />
        </div>
        <div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
