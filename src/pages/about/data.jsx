import chair from "../../assets/team/chair.jpg"
import ceo from "../../assets/team/ceo.jpg"
import cto from "../../assets/team/cto.jpg"
import dev1 from "../../assets/team/wilfred.jpg"
import dev2 from "../../assets/team/nick.jpg"
import dev3 from "../../assets/team/mwangi.jpg"
import avatar_male from "../../assets/about/avatar.svg"
import avatar_female from "../../assets/about/avatar-female.svg"
import { FaEye, FaBullseye, FaTrophy } from 'react-icons/fa';
import { TbTargetArrow } from "react-icons/tb";
import { GrAchievement } from "react-icons/gr";


const companyFocus = [
  {
    name: "Vision",
    details: "To be a leader in shaping the future of technology by continuously exploring and pushing the boundaries of what is possible.",
    icon: <FaEye />
  },
  {
    name: "Mission",
    details: "To provide innovative and cutting-edge technology solutions that help our customers achieve their goals and overcome challenges.",
    icon: <TbTargetArrow />
  },
  {
    name: "Goals",
    details: "To consistently provide an exciting experience in software solutions which contributes to every customer’s success, resulting in high levels of satisfaction.",
    icon: <GrAchievement />
  }
];


const teamData = [
    {
        image: chair, 
        name: "Chris Khayere", 
        title: "Founder | Cybersecurity Engineer", 
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
        title: "CEO | Software Engineer", 
        portfolio: "https://www.linkedin.com/in/peter-muriuki-568a2b246/", 
    },
    {
        image: dev1, 
        name: "Wilfred Mutwiri", 
        title: "Frontend Developer", 
        portfolio: "https://www.linkedin.com/in/wilfred-mutwiri-ba3bb8236/", 
    }
    // {
    //     image: dev2, 
    //     name: "Nick Odhiambo", 
    //     title: "Backend Developer", 
    //     portfolio: "https://www.linkedin.com/in/nickodhiambo/", 
    // },
    // {
    //     image: dev3, 
    //     name: "Brian Mwangi", 
    //     title: "Frontend Developer", 
    //     portfolio: "https://www.linkedin.com/in/mwangi-brian-0505861a8/", 
    // }
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
        content: "We are really impressed with the work the team did on our Sacco Website. I would recommend them to anyone.",
        name: "Mr. Stanley Washika",
        position: "Sacco Manager, Ng’ara Maisha Sacco"
    }
]



export { companyFocus, teamData, faqs, testimonials }

