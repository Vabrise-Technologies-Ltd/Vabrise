import React from 'react';
import FAQItem from './FAQItem';
import { faqs } from '../../../data/about';

function FAQ() {

  return (
    <div className="faq-container p-4">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQ;
