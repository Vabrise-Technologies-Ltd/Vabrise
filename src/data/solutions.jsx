import soft from "../assets/soft-dev.png"
import design from "../assets/design.png"
import training from "../assets/training.png"
import security from "../assets/security.png"
import { AiOutlineCloudServer } from "react-icons/ai"
import { MdDraw, MdEngineering } from "react-icons/md"
import { GrShieldSecurity } from "react-icons/gr"
import { CgWebsite } from "react-icons/cg"
import { ImEmbed2 } from "react-icons/im"

const solutions = [
    {
        id: 1,
        icon: <CgWebsite/>,
        slug: "software-sales",
        image: soft, 
        title: "Software Development", 
        summary: "We specialize in custom and generic web and mobile application development and maintainace ",
        content: "The internet has become an essential and significant part of human life. Every business requires a website to showcase its expertise, products, talents, and much more. Vabrise Technologies understands the requirements and creates stunning website and CMS systems for start-ups and businesses. We are the leading custom web development company, providing the best web and CMS solutions across the world."
    },
    {
        id: 2,
        icon: <MdDraw />,
        slug: "web-and-email-solutions",
        image: design, 
        title: "Graphics Design", 
        summary: "We have a strong branding portfolio in logos, posters, & flyers design and affirm to deliver this to all our clients.",
        content: "We have a strong branding portfolio in logos, posters, & flyers design and affirm to deliver this to all our clients."
    },
    {
        id: 3,
        icon: <ImEmbed2 />,
        slug: "it-support-and-maintainance",
        image: training, 
        title: "IOT & Embeded System", 
        summary: " Future Fast  develops networks of physical devices vehicles,buildings and other items embeded with electronics software sensors and connectivity which enables these objects to connect and exchange data.",
        content: "Future Fast has established itself as a prominent IoT app development company that assists multi-level businesses in their IoT journey. We embrace multiple business models with the prowess of Internet of Things technology, successfully delivering winning solutions across multiple domains. "
    },
    {
        id: 4,
        icon: <GrShieldSecurity />,
        slug: "cyber-security",
        image: security, 
        title: "Cyber Security", 
        summary: "We provide solutions to protect internet-connected systems from attacks,damages or unauthorized access. This can include network security,data security and threat intelligence. ",
        content: "This involves preventing cyber threats including; Network security, Endpoint security, Data security, Identity and access management and, Incident response and disaster recovery. "
    },
    {
        id: 5,
        icon: <AiOutlineCloudServer/>,
        slug: "training-and-consultancy",
        image: security,
        title: "Cloud Solutions",
        summary: "We provide a range of computing solutions such as infrastructure as a service(Iaas),Platform as a service (PaaS) and software as a service(SaaS) ",
        content: "With us, you can automate infrastructure, streamline operations, and improve communication between infrastructure, development, operations, quality assurance, and security. We assist clients in creating a frictionless operational environment and implementing secure coding practices. Our development and operations practices have been validated by the industry and are based on current industry standards. "
    },
    {
        id: 6,
        icon: <MdEngineering/>,
        slug: "training-and-consultancy",
        image: security,
        title: "AI & Automation Systems",
        summary: " We apply a combination of engineering disciplines ,techonologies and process to design ,develop and implement intergrated systems that meet the needs of a project or industry. ",
        content: "We engineer projects that use a multidisciplinary approach to optimize every step of the process, from design to operation It entails combining numerous engineering specialties, including mechanical, electrical, civil, and software engineering, to provide an all-encompassing solution that satisfies a project's criteria. Our engineering solutions combine the latest technologies with the design and construction of projects helping improve the efficiency and performance of various industries. "
    }
]


export { solutions }