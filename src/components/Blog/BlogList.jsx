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
                        {blogs && blogs.articles.map((blog) => (
                            <Fade bottom>
                                <Link to={`/articles/${blog.slug}`} key={blog.id} className="card">
                                    <div className="card-content">
                                        {/* <img src={blog.image} alt="" /> */}
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