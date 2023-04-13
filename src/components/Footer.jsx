// import logo from "../assets/logo.png"
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs"


const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()


    return ( 
        <>
            <footer className="footer flex md:flex-row flex-col justify-around items-center p-4 bg-cyan-900 text-neutral-content">
                <div className="md:flex md:flex-row flex-col justify-center items-center">
                    {/* <img className="w-28" src={logo} alt="Logo" />  */}
                    <p className="text-xs">Copyright © {year} - All rights Reserved</p>
                </div> 
                <div className="grid-flow-col gap-4  md:place-self-center md:justify-self-end md:text-lg text-base">
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
        </>
    );
}
 
export default Footer;