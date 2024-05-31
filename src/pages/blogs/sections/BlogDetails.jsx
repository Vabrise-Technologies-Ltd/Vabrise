import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FetchContext } from "../../../context/FetchContext";
import DefaultSpinner from "../../../components/Spinner";

const BlogDetails = () => {
    const {blogs, errorBlogs, loadingBlogs} = useContext(FetchContext)
    const { slug } = useParams()

    const blog = blogs.find((item) => item.slug == slug) || {}

    if (!blogs || loadingBlogs) {
        return (
            <div className="flex flex-col justify-center items-center md:my-32 my-12 text-cyan-500 gap-4 ">
                <DefaultSpinner />
                <p>Loading blog details...</p>
            </div>
        );
    }

    return ( 
        <div className="md:mx-24 mx-4 md:my-32 my-16">
            <div >
                <img src={blog.image} alt="" />
                <h2 className="card-title md:mt-4 mt-2">{blog.title}</h2>
                <div
                    dangerouslySetInnerHTML={{ __html: blog.body }}
                    className=""
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