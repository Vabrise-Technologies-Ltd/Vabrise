import client1 from "../../assets/partners/rvist.jpg"
import client2 from "../../assets/partners/taquana.png"
import client3 from "../../assets/partners/wima.jpg"
import client4 from "../../assets/partners/elkotech.png"
import client5 from "../../assets/partners/kccson.png"
import client6 from "../../assets/partners/engstan.png"
import client7 from "../../assets/partners/limotech.png"
import img1 from "../../assets/home/img1.png"
import img2 from "../../assets/home/img2.png"
import img3 from "../../assets/home/img3.png"
import img4 from "../../assets/home/img4.png"
import img5 from "../../assets/home/img5.jpg"
import img6 from "../../assets/home/img6.jpg"


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
        description: "A platform where patients can keep track of their medical appointments & history", 
        link: "https://github.com/Andrew-Ochieng/medical-zone-frontend"
    },
]


export { partners, projects }