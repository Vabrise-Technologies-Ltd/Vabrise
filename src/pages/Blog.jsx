import BlogHeader from "../components/Blog/BlogHeader";
import BlogList from "../components/Blog/BlogList";

const Blog = ({blogs,loading,error}) => {
    return ( 
        <>  
            <BlogHeader />
            <BlogList blogs={blogs} loading={loading} error={error} />
        </>
     );
}
 
export default Blog;