import { useNavigate, useParams } from "react-router-dom"

const SolutionsDetails = ({solutions}) => {
    const navigate = useNavigate()
    const { slug } = useParams()
    console.log(slug)
    console.log(solutions)

    const solution = solutions.find((item) => item.slug == slug) || {}
    console.log(solution)
     // Check if solutions is defined and has the articles property
    if (!solutions && loading) {
        return <p>Loading blog details...</p>;
    }
   
    return ( 
        <>
            <div className="grid md:grid-cols-2 md:m-24 m-4 my-16">
                <div>
                    <img src={solution.image} alt="" />
                </div>
                <div className="md:space-y-8 space-y-4">
                    <h3 className="card-title">{solution.title}</h3>
                    <h4 className="font-medium text-gray-700">{solution.summary}</h4>
                    <p className="md:text-base text-sm text-gray-500">{solution.content}</p>
                    
                </div>
            </div>
        </>
     );
}
 
export default SolutionsDetails;