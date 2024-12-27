import client1 from "../../assets/partners/partner-1.png"
import client2 from "../../assets/partners/partner-2.jpg"
import client3 from "../../assets/partners/partner-3.png"
import client4 from "../../assets/partners/partner-4.jpg"
import client5 from "../../assets/partners/partner-5.jpg"
import client6 from "../../assets/partners/partner-6.png"
import client7 from "../../assets/partners/partner-7.jpg"
import client8 from "../../assets/partners/partner-8.png"
import client9 from "../../assets/partners/partner-9.png"
import img1 from "../../assets/home/img1.png"
import img2 from "../../assets/home/img2.png"
import img3 from "../../assets/home/img3.png"
import img4 from "../../assets/home/img4.png"
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";
import { BsShieldLock } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import { BsWrenchAdjustable } from "react-icons/bs";
import { MdOutlineWebStories } from "react-icons/md";
import { FiUserCheck, FiCpu } from 'react-icons/fi';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"


const partners = [
    {cover_image: client1},
    {cover_image: client2},
    {cover_image: client3},
    {cover_image: client4},
    {cover_image: client5},
    {cover_image: client6},
    {cover_image: client7},
]

const projects = [
    {   title: "Ng'ara Maisha Sacco", 
        cover_image: img1,
        description: "Ng’ara Maisha Sacco is a cooperative society committed to improving the financial well-being of its members through innovative and member-centric financial solutions. The Sacco emphasizes the values of cooperation, mutual aid, and community development, aiming to provide a range of financial services to its members.", 
        link: "https://nmsacco.co.ke"
    },
    {   title: "Savanna School", 
        cover_image: img2,
        description: "Savanna School is a tech training bootcamp by Vabrise Technologies in Kenya. This program started off in 2023 as a program to equip young people in tertiary insttutions with skills to help them be self-reliant.", 
        link: "https://savannaacademy.com"
    },
    {   title: "CCABO Kenya", 
        cover_image: img3,
        description: "A CBO that works with and supports vulnerable community members to attain quality livelihoods through trainings and other innovative development innitiatives.", 
        link: "https://ccabokenya.or.ke"
    },
    {   title: "Savanna Africa", 
      cover_image: img4,
      description: "An ecommerce platform for tech-related businesses in Kenya ", 
      link: "https://shop.vabrisetech.com"
  }
]


const servicesData = [
    {
      icon: <div className="bg-pink-500 md:-left-5 -left-3 md:rounded-r-xl rounded-r-lg text-white md:py-5 py-4 md:pr-2 pr-1">
              <IoIosLaptop className="md:w-11 md:h-11 w-8 h-8 " />
            </div>,
      title: "Software Development",
      description: "Our broad spectrum of Software products have been designed, created, tested, maintained & implemented in all corners of the World."
    },
    {
      icon: <div className="bg-orange-500 md:-left-5 -left-3 md:rounded-r-xl rounded-r-lg text-white md:py-5 py-4 md:pr-2 pr-1">
              <IoCloudDownloadOutline className="md:w-11 md:h-11 w-8 h-8 " />
            </div>,
      title: "Software As A Service (SAAS)",
      description: "We deploy cloud-based software delivery models by developing & maintaining cloud application software & providing automatic software updates."
    },
    {
      icon: <div className="bg-teal-500 md:-left-5 -left-3 md:rounded-r-xl rounded-r-lg text-white md:py-5 py-4 md:pr-2 pr-1">
              <BsShieldLock className="md:w-11 md:h-11 w-8 h-8 " />
            </div>,
      title: "Cybersecurity",
      description: "Tech platforms rely on Critical Infrastructure Security, Network Security, Cloud Security, Application Security & Internet of Things (IoT) Security."
    },
    {
      icon: <div className="bg-green-500 md:-left-5 -left-3 md:rounded-r-xl rounded-r-lg text-white md:py-5 py-4 md:pr-2 pr-1">
              <MdOutlineWebStories className="md:w-11 md:h-11 w-8 h-8 " />
            </div>,
      title: "Web Design",
      description: "Our Software Engineers efficiently design Adaptive, Dynamic & Responsive websites with emphasis on User Experience (UX) & Search Engine Optimization."
    },
    {
      icon: <div className="bg-yellow-600 md:-left-5 -left-3 md:rounded-r-xl rounded-r-lg text-white md:py-5 py-4 md:pr-2 pr-1">
              <BiServer className="md:w-11 md:h-11 w-8 h-8 " />
            </div>,
      title: "Cloud Computing",
      description: "Cloud services will allow your employees to work remotely on projects from any location. This is especially useful to companies that operate in multiple locations."
    },
    {
      icon: <div className="bg-blue-500 md:-left-5 -left-3 md:rounded-r-xl rounded-r-lg text-white md:py-5 py-4 md:pr-2 pr-1">
              <BsWrenchAdjustable className="md:w-11 md:h-11 w-8 h-8 " />
            </div>,
      title: "IT Consulting & Maintenance",
      description: "We assess the needs of a business to determine which IT pathway would be best for them based on their goals. We also assist to deploy selected IT Services & maintain them."
    },
  ];



const whyUsData = [
  {
    title: 'Customer-Centric Approach',
    content: 'Our customer-centric approach ensures that your vision is at the forefront of our service delivery process, resulting in solutions that not only meet but exceed expectations.',
    icon: <FiUserCheck />, 
  },
  {
    title: 'Cutting-Edge Technologies',
    content: 'Staying ahead in the rapidly evolving tech landscape, we leverage the latest technologies to ensure your software solutions are future-proof and technologically advanced.',
    icon: <FiCpu />, 
  },
  {
    title: 'Continuous Communication',
    content: 'Open lines of communication are crucial. We keep you informed at every stage of the service delivery process, fostering trust, transparency, and collaboration.',
    icon: <IoChatbubbleEllipsesOutline />, 
  },
]


export { partners, projects, servicesData, whyUsData }