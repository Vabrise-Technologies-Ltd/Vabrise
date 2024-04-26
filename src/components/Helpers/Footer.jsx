import { FaChevronUp } from "react-icons/fa6";
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return ( 
        <>
            <footer className="footer grid md:grid-cols-4 sm:grid-cols-2 md:p-10 p-4 bg-base-200 text-base-content">
                <div>
                    <img src={logo} alt="Vabrise Technologies" className="md:w-36 w-32"/>
                    <p>Vabrise Technologies LTD.<br/>Providing reliable tech to businesses, organizations & societies since 2020</p>
                </div> 
                <div>
                    <span className="footer-title">Solutions</span> 
                    <a className="link link-hover">Software Development</a> 
                    <a className="link link-hover">Web & Email Solutions</a> 
                    <a className="link link-hover">IT Support & Maintainance</a>
                    <a className="link link-hover">Training & Consultancy Services</a>
                    <a className="link link-hover">Cyber Security</a> 
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Solutions</a> 
                    <a className="link link-hover">Blogs</a> 
                    <a className="link link-hover">Contact</a>
                </div> 
                <div className="md:grid hidden">
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer> 

            <footer className="footer md:px-10 p-4 border-t bg-cyan-900 text-white border-base-300 ">
                <div className="md:flex md:flex-row flex-col justify-center items-center">
                    {/* <img className="w-28" src={logo} alt="Logo" />  */}
                    <p className="text-xs">
                        Copyright © {year} - All rights Reserved |
                        <Link className="ml-1 text-yellow-500" to='/'>Vabrise Technologies</Link>
                    </p>
                </div> 
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end md:text-lg text-base">
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
            </footer>

            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 p-3 bg-cyan-600 text-white rounded-full shadow-md focus:outline-none"
                >
                    <FaChevronUp />
            </button>
        </>
    );
}
 
export default Footer;