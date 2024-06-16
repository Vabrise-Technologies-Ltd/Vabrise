import { FaChevronUp } from "react-icons/fa6";
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs"
import logo from "../assets/utils/logo.png"
import { Typography } from "@material-tailwind/react";
 
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];
 
const currentYear = new Date().getFullYear();
 
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    };

  return (
    <footer className="relative w-full lg:px-28 md:px-24 md:py-8 py-8 px-3 bottom-0 bg-gray-200">
      <div className="mx-auto w-full max-w-7xl ">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div>
                <img src={logo} alt="Vabrise Technologies" className="md:w-36 w-32 "/>
                <p className="mb-6 pt-4  text-sm text-gray-600 md:max-w-lg" >
                  We are an ICT Consulting Company offering solutions in
                  Web Development, Software Development, Software As A Service, 
                  Cloud Computing, Cyber Security, ICT Equipments & Supplies,
                  ICT Consultancy and Maintainance, and Technical Mentorship.
                </p>
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p
                  className="mb-3 font-medium text-cyan-500"
                >
                  {title}
                </p>
                {items.map((link) => (
                  <li key={link} className="md:my-3 my-1 md:text-base text-sm">
                    <a
                      href="#"
                      className=" text-gray-600 transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="md:mt-12 mt-8 flex w-full flex-col items-center justify-center border-t border-blue-gray-50  md:flex-row md:justify-between">
          <p
            className="md:text-base text-xs mb-2 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} 
            <a href="https://vabrisetech.com/" className="text-cyan-600 pl-1">Vabrise Technologies</a>. 
            All Rights Reserved.
          </p>
            <div className="flex gap-4 text-gray-700 sm:justify-center">
                <a href="https://www.facebook.com/profile.php?id=100068470802763">
                    <BsFacebook />
                </a>
                <a href="https://www.linkedin.com/company/vabrise-technologies-ltd/">
                    <BsLinkedin />
                </a>
                <a href="#">
                    <BsTwitter />
                </a>
                <a href="https://github.com/Vabrise-Technologies-Ltd">
                    <BsGithub />
                </a> 
            </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 md:p-3 p-2 bg-cyan-500 text-white rounded-full shadow-md focus:outline-none"
        >
            <FaChevronUp className="md:text-base text-sm" />
        </button>
    </footer>
  );
}

export default Footer;