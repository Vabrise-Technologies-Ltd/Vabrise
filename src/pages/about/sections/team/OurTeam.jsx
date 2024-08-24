import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import {Typography} from "@material-tailwind/react";
import { teamData } from "../../data";

  export function OurTeam() {
    return (
      <section className="min-h-screen py-8 lg:py-12">
      <div className="container mx-auto flex flex-col">
        <div className="lg:mb-16 md:mb-16 mb-16 text-center ">
          <h5 className="md:text-lg font-semibold text-gray-500">
            Meet the Team
          </h5>
          <h2 className="section-title">
            Behind the Success: Our Dedicated Team
          </h2>
          <p
            className=" mx-auto w-full text-gray-700 md:max-w-4xl font-light"
          >
            From visionary leadership to creative talent, and technical wizards, 
            each member plays a pivotal role in delivering the exceptional 
            service and innovative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {teamData.map((member, key) => (
            <motion.div 
              whileHover={{y: -8}}
              transition={{type: 'spring', stiffness: 80}}>
              <TeamCard key={key} member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
  }
  
  export default OurTeam;