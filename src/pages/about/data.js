import chair from "../../assets/team/chair.jpg"
import ceo from "../../assets/team/ceo.jpg"
import cto from "../../assets/team/cto.jpg"
import pm from "../../assets/team/alex.jpg"
import avatar_male from "../../assets/about/avatar.svg"
import avatar_female from "../../assets/about/avatar-female.svg"

const companyFocus = [
    {
        name: "Vision",
        details: "To be a leader in shaping the future of technology by continuously exploring and pushing the boundaries of what is possible."
    },
    {
        name: "Mission",
        details: "To provide innovative and cutting-edge technology solutions that help our customers achieve their goals and overcome challenges."
    },
    {
        name: "Goals",
        details: "To consistently provide an exciting experience in software solutions which contributes to every customer’s success, resulting in high levels of satisfaction."
    }
]

const teamData = [
    {
        image: chair, 
        name: "Chris Khayere", 
        title: "Founder | Cyber Security Engineer", 
        portfolio: "https://www.linkedin.com/in/chris-khayere", 
    },
    {
        image: cto, 
        name: "Andrew Ochieng", 
        title: "Co-Founder | Technical Lead", 
        portfolio: "https://www.linkedin.com/in/andrew-ochieng-00b076180", 
    },
    {
        image: ceo, 
        name: "Peter Muriuki", 
        title: "CEO | Network Engineer", 
        portfolio: "https://www.linkedin.com/in/peter-muriuki-568a2b246/", 
    },
    {
        image: pm, 
        name: "Alex Morwabe", 
        title: "Project Manager | Technical Mentor", 
        portfolio: "https://www.linkedin.com/in/alex-morwabe-997995b6/", 
    }
]

const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer services such as Web Development, Software Development, Software As A Service, Cloud Computing, Cyber Security, ICT Equipments & Supplies, ICT Consultancy and Maintainance, and Technical Mentorship."
    },
    {
        question: "How much does the software cost?",
        answer: "We price our software products quite competitively. Pricing is based on various models such as pay-per-use for Software As A Service products and the rest are negotiable depending on defined factors"
      },
    {
      question: "How can I contact Vabrise Technologies Limited?",
      answer: "You can contact us through our website's contact form, email us at contact@vabrisetech.com or call us on +254718577070."
    },
    {
      question: "Do you offer customized solutions?",
      answer: "Yes, we specialize in providing customized software solutions tailored to meet the unique needs of our clients."
    },
    {
        question: "How secure are your software products?",
        answer: "Our software products use an algorithm of combined security features including user names, passwords, & encryption keys to ensure that only authorized users have access to your sensitive data. We also install Secure Socket Layers (SSL) certificates that ensures the data transmitted between our servers & your web server is encrypted, making it more difficult for hackers to decipher."
      }
  ];

  const testimonials = [
    {
        avatar: avatar_male,
        content: "They created our organization's website with top quality & close follow-up during the development.",
        name: "Mr. Thompson Mate",
        position: "Director, Kakamega CSO Network"
    },
    {
        avatar: avatar_female,
        content: "I have closely worked with the team & I like how they handle their clients with care & concern.",
        name: "Sharon Mutai",
        position: "Co-Founder, Jappstech Group"
    },
    {
        avatar: avatar_male,
        content: "I am glad for how the team is well organized & delivers quality services on time.",
        name: "Brian Gillo",
        position: "Data Engineer, Gilltech Solutions"
    }
]



export { companyFocus, teamData, faqs, testimonials }

