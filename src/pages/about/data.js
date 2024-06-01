import chair from "../../assets/team/chair.jpg"
import ceo from "../../assets/team/ceo.jpg"
import cto from "../../assets/team/cto.jpg"
import pm from "../../assets/team/alex.jpg"
import avatar1 from "../../assets/testimonials/thompson.jpg"
import avatar2 from "../../assets/testimonials/sharon.jpg"
import avatar3 from "../../assets/testimonials/jilo.jpg"

const companyFocus = [
    {
        id: 1,
        name: "Vision",
        details: "To be a leader in shaping the future of technology by continuously exploring and pushing the boundaries of what is possible."
    },
    {
        id: 2,
        name: "Mission",
        details: "To provide innovative and cutting-edge technology solutions that help our customers achieve their goals and overcome challenges."
    },
    {
        id: 3,
        name: "Goals",
        details: "To consistently provide an exciting experience in software solutions which contributes to every customer’s success, resulting in high levels of satisfaction."
    }
]

const teamData = [
    {
        image: chair, 
        name: "Chris Khayere", 
        title: "Founder & Chairman", 
        link1: "https://www.linkedin.com/in/chris-khayere", 
        link2: "https://chris.vabrisetech.co.ke"
    },
    {
        image: cto, 
        name: "Andrew Ochieng", 
        title: "Co-Founder & CTO", 
        link1: "https://www.linkedin.com/in/andrew-ochieng-00b076180", 
        link2: "https://andrew-ochieng.vercel.app"
    },
    {
        image: ceo, 
        name: "Peter Muriuki", 
        title: "CEO", 
        link1: "https://github.com/softy-254", 
        link2: "https://github.com/softy-254"
    },
    {
        image: pm, 
        name: "Alex Morwabe", 
        title: "Project Manager", 
        link1: "https://github.com/softy-254", 
        link2: "https://github.com/softy-254"
    }
]

const faqs = [
    {
      question: "What is Vabrise Technologies Limited?",
      answer: "Vabrise Technologies Limited is a leading technology company specializing in innovative software solutions for businesses of all sizes."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including software development, cloud computing, IT consulting, and data analytics."
    },
    {
      question: "How can I contact Vabrise Technologies Limited?",
      answer: "You can contact us through our website's contact form, or email us at info@vabrise.com or call us on +254718577070."
    },
    {
      question: "Where is Vabrise Technologies Limited located?",
      answer: "Our headquarters are located in Nakuru Town, at Bungei House, Room12, opposite Rift Valley Institute of Technology School."
    },
    {
      question: "Do you offer customized solutions?",
      answer: "Yes, we specialize in providing customized software solutions tailored to meet the unique needs of our clients."
    }
  ];

  const testimonials = [
    {
        image: avatar1,
        content: "They created our organization's website with top quality & close follow-up during the development.",
        name: "Mr. Thompson Mate",
        position: "Director, Kakamega CSO Network"
    },
    {
        image: avatar2,
        content: "I have closely worked with the team & I like how they handle their clients with care & concern.",
        name: "Sharon Mutai",
        position: "Co-Founder, Jappstech Group"
    },
    {
        image: avatar3,
        content: "I am glad for how the team is well organized & delivers quality services on time.",
        name: "Brian Gillo",
        position: "Software Engineer, Gilltech Solutions"
    }
]



export { companyFocus, teamData, faqs, testimonials }

