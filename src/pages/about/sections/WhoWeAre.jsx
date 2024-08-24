import work from "../../../assets/about/us.svg"

const WhoWeAre = () => {
    return ( 
        <>
            <div className="lg:mb-32 md:mb-16 mb-8">
                <div className="grid md:grid-cols-2 md:gap-16 gap-8">
                    <div>
                        <img src={work} alt="" />
                    </div>
                    <div className="md:text-base text-sm text-gray-600 text-justify"> 
                    <p>
                        We are an ICT Consulting Company offering solutions in
                        Web Development, Software Development, Software As A Service, 
                        Cloud Computing, Cyber Security, ICT Equipments & Supplies,
                        ICT Consultancy and Maintainance, and Technical Mentorship.
                        The scope of our work is primarily focused on developing & maintaining tested & secured 
                        custom software and web design solutions. Our team of experts has accumilated extensive
                        experience over the years in developing production applications. 
                    </p>
                    {/* <p className="md: hidden mt-4">
                        Recognizing a client’s custom application needs and consistently 
                        exceeding their expectations is what sets us apart from the rest. 
                        We therefore focus not only on developing and maintaining the products 
                        and services we offer, but also on building long term relationships.
                        Established in the year 2021, Vabrise Technologies offers bespoke solutions 
                        to technological impediments so that entrepreneurs, 
                        techpreneurs, and organizations can harness to the maximum ROI 
                        on their businesses.
                    </p> */}
                    <p className="md:flex mt-2">
                        Whether you’re a small startup or a large enterprise,
                        our customized ict-related solutions will help you stand out 
                        in the digital landscape. Reach out today to discuss your project and 
                        take the first step towards a successful online presence.
                    </p>
                </div>
                </div>
            </div>
            
        </>
     );
}
 
export default WhoWeAre;