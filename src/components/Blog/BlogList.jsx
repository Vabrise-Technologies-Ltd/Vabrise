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
                                    {/* <div className="md:h-56 w-full"> */}
                                        <img className="h-full w-full" src={blog.image} alt="" />
                                    {/* </div> */}
                                    <div className="card-content">
                                        <div>
                                        <p>
                                            <FaRegUser />
                                            {blog.category.length > 0 && (
                                                <>
                                                    {blog.category.map((item, index) => (
                                                        <p  key={index}>{item.name}</p>
                                                    ))}
                                                </>
                                            )}
                                        </p>
                                        </div>
                                        <h4 className="card-title">{blog.title}</h4>
                                        <p className="card-description">{blog.body.slice(0, 100)}</p>
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