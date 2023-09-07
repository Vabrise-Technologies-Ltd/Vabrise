import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const BlogList = ({blogs, error, loading}) => {
//   console.log(blogs)

    return ( 
        <>
            <div>
                <p className="text-red-500">{error}</p>
                {loading ? <p>Loading blogs...</p> : (
                    <div className="card-container">
                        {blogs && blogs.slice(10,16).map((blog, index) => (
                            <Fade bottom>
                                <Link to={`/blogs/${blog.id}`} key={index} className="card">
                                    <div className="card-content">
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