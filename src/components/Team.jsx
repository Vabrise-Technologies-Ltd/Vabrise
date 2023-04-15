import { FaLinkedinIn } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg"
import ceo from "../assets/CEO.jpg"
import cto from "../assets/CTO.jpg"

const Team = () => {
    const details = [
        {image: ceo, name: "Chris Khayere", post: "Founder & CEO", icon1: <FaLinkedinIn />, icon2: <CgWebsite />, link1: "https://www.linkedin.com/in/chris-khayere", link2: "https://chris.vabrisetech.co.ke/"},
        {image: cto, name: "Andrew Ochieng", post: "Co-Founder & CTO", icon1: <FaLinkedinIn />, icon2: <CgWebsite />, link1: "https://www.linkedin.com/in/andrew-ochieng-00b076180/", link2: "https://andrewoochieng.netlify.app/"}
    ]

    return ( 
        <>
            <section>
                <h2 className="section-title">Our Team</h2>
                <div className="md:flex justify-around items-around md:my-8 my-6">
                    <div></div>
                    {details.map((item) => (
                        <div className="md:my-2 my-6 flex flex-col items-center justify-center shadow-xl p-2 pb-3 rounded-xl">
                            <img className="team-img" src={item.image} alt="" />
                            <p className="font-medium">{item.name}</p>
                            <p className="text-cyan-500 text-sm">{item.post}</p>
                            <div className="flex items-center space-x-4 mt-2 md:text-lg">
                                <a href={item.link1} className='hover:text-yellow-500'>
                                    {item.icon1}
                                </a>
                                <a href={item.link2} className='hover:text-yellow-500'>
                                    {item.icon2}
                                </a>
                            </div>
                        </div>
                    ))}
                    <div></div>
                </div>
            </section>
        </>
     );
}
 
export default Team;