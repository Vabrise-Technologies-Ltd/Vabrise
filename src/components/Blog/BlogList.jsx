import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
// import { FaRegUser } from "react-icons/fa";
// import { AiOutlineProfile } from "react-icons/ai";

const BlogList = ({blogs, error, loading}) => {
  console.log(blogs)

    return ( 
        <>
            <div>
                <p className="text-red-500">{error}</p>
                {!blogs || loading ? (
                    <div className="flex justify-center items-center md:my-32 my-12 ">
                        <ScaleLoader
                            color="#06b6d4"
                            height={60}
                            radius={100}
                            width={4}
                        />
                    </div>
                ) : (
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