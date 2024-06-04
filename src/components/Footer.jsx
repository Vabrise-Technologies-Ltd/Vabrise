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
    <footer className="relative w-full p-8 bottom-0 bg-gray-200">
      <div className="mx-auto w-full max-w-7xl ">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div>
                <img src={logo} alt="Vabrise Technologies" className="md:w-36 w-32 "/>
                <Typography className="mb-6 pt-4" color="gray">
                    Vabrise specializes in technological and IT-related 
                    services such as product engineering, 
                    systems integration, web design & development, 
                    mobile applications, APIs, etc. We put a strong 
                    focus on the needs of your business to figure out 
                    solutions that best fits your demand and nail it.
                </Typography>
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} 
            <a href="https://vabrisetech.com/" className="text-cyan-600 pl-1">Vabrise Technologies</a>. 
            All Rights Reserved.
          </Typography>
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
        className="fixed bottom-8 right-8 md:p-3 p-2 bg-cyan-500 text-white rounded-full shadow-md focus:outline-none"
        >
            <FaChevronUp className="md:text-base text-sm" />
        </button>
    </footer>
  );
}

export default Footer;