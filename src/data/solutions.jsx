import soft from "../assets/soft-dev.png"
import design from "../assets/design.png"
import training from "../assets/training.png"
import security from "../assets/security.png"
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
        title: "Web & Email Solutions", 
        summary: "Whether you are looking for a custom website design, enhancing your existing site or creating a unique logo design for your business, our Web design and development experts can help.",
        content: "We base all of our graphic, interface and user experience design principles on evidence-based studies of the way web users tend to think and act. Consequently, our work invariably features smart designs that accommodate users’ demand for simple, attractive, efficient, credible and engaging online experiences. We offer a variety of solutions including We offer a variety of solutions including Web Design and Development, E-Mail Solutions, Branding and Design, Web Audit/Analysis, Web Hosting, Dedicated Hosting, Web Maintenance, Corporate Email Solutions, Domain Names, SSL Certificates."
    },
    {
        id: 3,
        icon: <ImEmbed2 />,
        slug: "it-support-and-maintainance",
        image: training, 
        title: "IT Suppport & Maintainance", 
        summary: "Professional, certified, experienced, fast on site desktop computer repairs (often same day onsite computer repair).",
        content: "Specializing in residential computer support, small business computer support, mobile computer repair, and remote PC support. Computers and gadgets are an integral part of modern day-to-day life. There’s nothing more frustrating than a computer error that prevents you from accessing the internet or a total system failure that erases your saved documents or when your child locks your pc and infects it with a virus while googling nasties…..Fortunately, any computer problem you encounter today can be fixed by Vabrise Technologies ."
    },
    {
        id: 4,
        icon: <GrShieldSecurity />,
        slug: "cyber-security",
        image: security, 
        title: "Cyber Security", 
        summary: "A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.",
        content: "Firewalls have been a first line of defense in network security for over 25 years. They establish a barrier between secured and controlled internal networks that can be trusted and untrusted outside networks, such as the Internet. A firewall can be hardware, software, or both. We are authorized installers and channel partners for Sophos and Mikrotik."
    },
    {
        id: 5,
        icon: <MdEngineering/>,
        slug: "training-and-consultancy",
        image: security,
        title: "Training & Consultancy Services",
        summary: "Our industry experienced training consultants have helped our clients simplify the learning process and assist in the execution of new products, services and software. Through our experts in the field of ICT, we work alongside our clients to provide top-notch services.",
        content: "For over 3 years, Vabrise has been delivering full-scale consulting services in information technology and security. We help our customers to protect their IT environments by proactively identifying security threats and gaps. We have also been providing independent IT & Telecommunication consulting services to private and public sector organizations to help them take advantage of the technologies changing the business world today."
    }
]


export { solutions }