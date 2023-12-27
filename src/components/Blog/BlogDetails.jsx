import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogDetails = ({blogs, loading, error}) => {
    const { slug } = useParams()

     // Check if blogs is defined and has the articles property
     if (!blogs || !blogs.articles) {
        return <p>Loading blog details...</p>;
    }

    console.log(blogs)
    const blog = blogs.articles.find((item) => item.slug == slug) || {};

    return ( 
        <>
            <div className="md:mx-24 mx-4 md:my-32 my-16">
                <div >
                    <h2 className="content-title">{blog.title}</h2>
                    <p className="normal-case font-light md:text-base text-sm">{blog.body}</p>
                </div>
                <div className="md:mt-6 mt-4">
                    <Link to='/articles' className="btns ">
                        Back
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default BlogDetails;