import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import {Typography} from "@material-tailwind/react";
import { teamData } from "../../data";

  export function OurTeam() {
    return (
      <section className="min-h-screen py-8 px-8 lg:py-24l">
      <div className="container mx-auto flex flex-col">
        <div className="mb-16 text-center lg:mb-28">
          <Typography
            // variant="h6"
            color="cyan"
            className="text-lg font-semibold"
          >
            Meet the Team
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="my-2 !text-2xl lg:!text-4xl !text-gray-800"
          >
            Behind the Success: Our Dedicated Team
          </Typography>
          <Typography
            className="md:text-xl mx-auto w-full text-gray-600 max-w-4xl"
          >
            From visionary leadership to creative talent, and technical wizards, 
            each team member plays a pivotal role in delivering the exceptional 
            service and innovative solutions.
          </Typography>
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