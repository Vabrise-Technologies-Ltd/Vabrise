import { motion } from "framer-motion";
import { teamData } from "../../data/about";

const Team = () => {
    

    return ( 
        <>
            <section>
                <h2 className="section-title">Our Team</h2>
                <div className="md:flex justify-around items-around md:my-8 my-6">
                    <div></div>
                    {teamData.map((item) => (
                        <motion.div 
                            whileHover={{y: -8}}
                            transition={{type: 'spring', stiffness: 80}}
                            className="md:my-2 my-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl p-2 pb-3 rounded-xl">
                            <img className="team-img max-h-56" src={item.image} alt="" />
                            <p className="font-medium">{item.name}</p>
                            <p className="text-cyan-500 text-sm font-semibold">{item.title}</p>
                            <div className="flex items-center space-x-4 mt-2 md:text-lg">
                                <a href={item.link1} className='hover:text-yellow-500'>
                                    {item.icon1}
                                </a>
                                <a href={item.link2} className='hover:text-yellow-500'>
                                    {item.icon2}
                                </a>    
                            </div>
                        </motion.div>
                    ))}
                    <div></div>
                </div>
            </section>
        </>
     );
}
 
export default Team;