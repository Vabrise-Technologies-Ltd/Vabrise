import { FaChevronUp } from "react-icons/fa6";
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import logo from "../assets/utils/logo.png";
import { useState, useEffect } from "react";
import { solutionDetails } from "../pages/solutions/data";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Services",
    items: solutionDetails.map((item) => ({
      name: item.title,
      link: `/solutions/${item.slug}`,
    })),
  },
  {
    title: "Company",
    items: [
      { name: "About Us", link: "/about" },
      { name: "Careers", link: "#" },
      { name: "News", link: "#" },
      { name: "Contact", link: "/contact" },
    ],
  },
  {
    title: "Resource",
    items: [
      { name: "Blog", link: "/blog" },
      { name: "Newsletter", link: "#" },
      { name: "Events", link: "#" },
      { name: "Help Center", link: "#" },
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full lg:px-28 md:px-24 md:py-8 py-8 px-3 bg-gray-200">
      <div className="mx-auto w-full">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="flex-1 min-w-[200px]">
            <img src={logo} alt="Vabrise Technologies" className="w-36 mb-4" />
            <p className="text-sm text-gray-600">
              We are an ICT Consulting Company offering solutions in Web
              Development, Software Development, SaaS, Cloud Computing, Cyber
              Security, ICT Equipments & Supplies, ICT Consultancy and
              Maintenance, and Technical Mentorship.
            </p>
          </div>

          <div className="sm:flex-1 flex flex-wrap justify-between gap-8 min-w-[200px]">
            {LINKS.map(({ title, items }) => (
              <div key={title} className="w-full sm:w-auto">
                <h3 className="text-cyan-600 font-semibold mb-3">{title}</h3>
                <ul className="space-y-2">
                  {items.map(({ name, link }, idx) => (
                    <li key={idx}>
                      <Link
                        to={link}
                        className="text-sm text-gray-600 hover:text-cyan-600 focus:text-cyan-700"
                        aria-label={`Navigate to ${name}`}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            &copy; {currentYear}{" "}
            <a
              href="https://vabrisetech.com/"
              className="text-cyan-600 hover:underline"
              aria-label="Visit Vabrise Technologies website"
            >
              Vabrise Technologies
            </a>
            . All Rights Reserved.
          </p>
          <div className="flex gap-4 text-gray-700">
            <a
              href="https://www.facebook.com/profile.php?id=100068470802763"
              className="hover:text-cyan-600"
              aria-label="Visit our Facebook page"
            >
              <BsFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/vabrise-technologies-ltd/"
              className="hover:text-cyan-600"
              aria-label="Visit our LinkedIn page"
            >
              <BsLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-cyan-600" aria-label="Visit our Twitter page">
              <BsTwitter size={20} />
            </a>
            <a
              href="https://github.com/Vabrise-Technologies-Ltd"
              className="hover:text-cyan-600"
              aria-label="Visit our GitHub page"
            >
              <BsGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`${
          showButton ? "flex" : "hidden"
        } fixed bottom-4 right-4 items-center justify-center md:p-5 p-4 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 transition`}
        aria-label="Scroll to top"
      >
        <FaChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
