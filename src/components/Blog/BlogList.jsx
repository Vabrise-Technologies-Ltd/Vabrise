import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
// import { AiOutlineProfile } from "react-icons/ai";

const BlogList = ({blogs, error, loading}) => {
  console.log(blogs)

    return ( 
        <>
            <div>
                <p className="text-red-500">{error}</p>
                {loading ? <p>Loading blogs...</p> : (
                    <div className="card-container">
                        {blogs && blogs.map((blog) => (
                            <Fade bottom>
                                <Link to={`/articles/${blog.slug}`} key={blog.id} className="card">
                                    <div className="md:h-56 w-full">
                                        <img src={blog.image} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title">{blog.title}</h4>
                                        {/* <p className="card-description">{blog.body.slice(0, 100)}...</p> */}
                                        <div
                                            dangerouslySetInnerHTML={{ __html: blog.body.slice(0,100) }}
                                            className="card-description"
                                        ></div>
                                    </div>
                                </Link>
                            </Fade>
                        ))}
                    </div>
                )}
            </div>
            
        </>
     );
}
 
export default BlogList;