import { useContext } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { FetchContext } from "../Contexts/FetchContext";
import DefaultSpinner from "../Utils/Spinner";

const BlogList = () => {
    const {blogs, errorBlogs, loadingBlogs} = useContext(FetchContext)
    console.log(blogs)

    return ( 
        <>
            <div>
                <p className="text-red-500">{errorBlogs}</p>
                {!blogs || loadingBlogs ? (
                    <div className="flex justify-center items-center md:my-32 my-12 ">
                        <DefaultSpinner />
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