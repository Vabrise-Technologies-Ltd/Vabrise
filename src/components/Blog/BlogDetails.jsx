import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogDetails = ({blogs, loading, error}) => {
    const { slug } = useParams()
    console.log(blogs)

    const blog = blogs.find((item) => item.slug == slug) || {}

     // Check if blogs is defined and has the articles property
    if (!blogs && loading) {
        return <p>Loading blog details...</p>;
    }

    return ( 
        <div className="md:mx-24 mx-4 md:my-32 my-16">
            <div >
                <img src={blog.image} alt="" />
                <h2 className="card-title md:mt-4 mt-2">{blog.title}</h2>
                <div
                    dangerouslySetInnerHTML={{ __html: blog.body }}
                    className="normal-case font-light md:text-base text-sm"
                ></div>
            </div> 
            <div className="md:mt-6 mt-4">
                <Link to='/articles' className="btns ">
                    Back
                </Link>
            </div>               
        </div>
    );
}
 
export default BlogDetails;