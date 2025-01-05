import { useParams } from "react-router-dom"

const SolutionsDetails = ({solutionDetails}) => {
    const { slug } = useParams()

    const solution = solutionDetails.find((item) => item.slug == slug) || {}
    if (!solutionDetails && loading) {
        return <p>Loading blog details...</p>;
    }
   
    return ( 
        <div className="flex items-center justify-center p-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:gap-16 gap-8 md:m-24 m-4 my-16 items-center">
                <div>
                    <img src={solution.image} alt="" />
                </div>
                <div className="md:space-y-8 space-y-4">
                    <h3 className="card-title md:text-xl">{solution.title}</h3>
                    <h4 className="font-medium text-gray-700 md:leading-widest md:tracking-wide">{solution.summary}</h4>
                    <p className="md:text-base text-sm text-gray-500 md:leading-widest md:tracking-wide">{solution.content}</p>
                    
                </div>
            </div>
        </div>
     );
}
 
export default SolutionsDetails;