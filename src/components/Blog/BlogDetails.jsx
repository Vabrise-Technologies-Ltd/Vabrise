import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogDetails = ({blogs, loading, error}) => {
    const { id } = useParams()
    const paramsId = Number(id)
    console.log(blogs)

    let blog = {}
    if (blog) {
        let arr = blogs.filter((item) => item.id == paramsId)
        blog = arr[0]
        // console.log(blog)
    } else {
        blog = {}
    }
    return ( 
        <>
            {loading ? <p>Loading blog details...</p> : (
                <div className="md:mx-24 mx-4 md:my-32 my-16">
                    <div >
                        <h2 className="content-title">{blog.title}</h2>
                        <p className="normal-case font-light md:text-base text-sm">{blog.body}</p>
                    </div>
                    <Link to='/' className="btn md:mt-6 mt-4">
                        Back
                    </Link>
                </div>

            )}
        </>
     );
}
 
export default BlogDetails;