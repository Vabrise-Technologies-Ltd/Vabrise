import ceo from "../assets/CEO.jpg"
import cto from "../assets/CTO.jpg"

const Team = () => {

    return ( 
        <>
            <section>
                <h2 className="section-title">Our Team</h2>
                <div className="md:flex justify-around items-around md:my-8 my-6">
                    <div></div>
                    <div className="md:my-2 my-6 flex flex-col items-center justify-center">
                        <img className="team-img" src={ceo} alt="" />
                        <p className="font-medium">Chris Khayere</p>
                        <p className="text-cyan-500 text-sm">Founder & CEO</p>
                    </div>
                    <div className="md:my-2 my-6 flex flex-col items-center justify-center">
                        <img className="team-img" src={cto} alt="" />
                        <p className="font-medium">Andrew Ochieng</p>
                        <p className="text-cyan-500 text-sm">Founder & CEO</p>
                    </div>
                    <div></div>
                </div>
            </section>
        </>
     );
}
 
export default Team;