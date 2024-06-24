import client1 from "../../assets/partners/img1.png"
import client2 from "../../assets/partners/img2.png"
import client3 from "../../assets/partners/img3.jpg"
import client4 from "../../assets/partners/img4.svg"
import client5 from "../../assets/partners/img5.png"
import client6 from "../../assets/partners/img6.png"
import client7 from "../../assets/partners/img7.png"
import img1 from "../../assets/home/img1.png"
import img2 from "../../assets/home/img2.png"
import img3 from "../../assets/home/img3.png"
import img4 from "../../assets/home/img4.png"
import img5 from "../../assets/home/img5.jpg"
import img6 from "../../assets/home/img6.jpg"
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";
import { BsShieldLock } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import { BsWrenchAdjustable } from "react-icons/bs";
import { MdOutlineWebStories } from "react-icons/md";



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
    {   title: "Kakamega CSO Network", 
        cover_image: img1,
        description: "The Kakamega Civil Society Organization (CSO) Network is a coalition of various civil society organizations operating within Kakamega County, Kenya. This network plays a significant role in advocating for transparency, accountability, and good governance within the region", 
        link: "https://www.kakamegacsonetwork.org"
    },
    {   title: "Vabrise Technologies", 
        cover_image: img2,
        description: "A tech company that manages your bussiness without having to worry about the the software solutions you are using. Less hustle more growth.", 
        link: "https://learn.vabrisetech.com"
    },
    {   title: "Trinity Baptist Church, Funyula", 
        cover_image: img3,
        description: "We exist to glorify God through the preaching and teaching of the Bible with the aim that sinners will be saved and that saints will grow to Christian maturity", 
        link: "https://trinitybaptistfunyula.co.ke"
    },
    {   title: "Kambi Appartments", 
        cover_image: img4,
        description: "Kambi Apartments, located in the Milimani area of Kisumu, offers a variety of accommodation options with several amenities designed to enhance comfort and convenience. Here are some details about the different apartments available in the area", 
        link: "https://kambiappartments.co.ke"
    },
    {   title: "Engstan Solutions", 
        cover_image: img5,
        description: "A branding business that helps users order branded products from the comfort of their home", 
        link: "https://engstansolutions.co.ke"
    },
    {   title: "Medical Zone", 
        cover_image: img6,
        description: "A platform where patients can keep track of their medical appointments & medical history", 
        link: "https://github.com/Andrew-Ochieng/medical-zone-frontend"
    },
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
      content: 'We prioritize your success. Our customer-centric approach ensures that your vision is at the forefront of our service delivery process, resulting in solutions that not only meet but exceed expectations.'
    },
    {
      title: 'Cutting-Edge Technologies',
      content: 'Staying ahead in the rapidly evolving tech landscape, we leverage the latest technologies to ensure your software solutions are future-proof and technologically advanced.'
    },
    {
      title: 'Continous Communication',
      content: 'Open lines of communication are crucial. We keep you informed at every stage of the service delivery process, fostering trust, transparency, and collaboration.'
    }
  ]


export { partners, projects, servicesData, whyUsData }