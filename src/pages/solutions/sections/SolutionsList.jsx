import { Link } from "react-router-dom";
import { solutionDetails } from "../data";

const SolutionsList = () => {
    
    return ( 
        <>
            {solutionDetails.map((solution) => (
                <Link to={`/Solutions/${solution.id}`} className="service-card">
                    <div className="w-full">
                        <img className="w-72" src={solution.image} alt="" />
                    </div>
                    <h2 className="font-medium text-cyan-800">{solution.title}</h2>
                    <p className="text-sm text-center">{solution.summary.slice(0,100)}...</p>
                </Link>
            ))}
        </>
     );
}
 
export default SolutionsList;