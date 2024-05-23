
import { FaLinkedinIn } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg"
import ceo from "../../src/assets/team/ceo.jpg"
import cto from "../../src/assets/team/cto.jpg"
import chair from "../../src/assets/team/chair.jpg"

const icon1 = <FaLinkedinIn />
const icon2 = <CgWebsite />

const companyFocus = [
    {
        id: 1,
        name: "Vision",
        details: "To be a leader in shaping the future of technology by continuously exploring and pushing the boundaries of what is possible."
    },
    {
        id: 2,
        name: "Mission",
        details: "To provide innovative and cutting-edge technology solutions that help our customers achieve their goals and overcome challenges."
    },
    {
        id: 3,
        name: "Goals",
        details: "To consistently provide an exciting experience in software solutions which contributes to every customer’s success, resulting in high levels of satisfaction."
    }
]

const teamData = [
    {
        image: chair, 
        name: "Chris Khayere", 
        title: "Founder & Chairman", 
        icon1: icon1, 
        icon2: icon2, 
        link1: "https://www.linkedin.com/in/chris-khayere", 
        link2: "https://chris.vabrisetech.co.ke"
    },
    {
        image: ceo, 
        name: "Peter Muriuki", 
        title: "CEO", 
        icon1: icon1, 
        icon2: icon2, 
        link1: "https://github.com/softy-254", 
        link2: "https://github.com/softy-254"
    },
    {
        image: cto, 
        name: "Andrew Ochieng", 
        title: "Co-Founder & CTO", 
        icon1: icon1, 
        icon2: icon2, 
        link1: "https://www.linkedin.com/in/andrew-ochieng-00b076180", 
        link2: "https://andrew-ochieng.vercel.app"
    }
]

export { companyFocus, teamData }