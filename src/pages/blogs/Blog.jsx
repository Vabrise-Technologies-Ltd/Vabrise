import BlogHeader from "./sections/BlogHeader";
import BlogList from "./sections/BlogList";

const Blog = ({blogs,loading,error}) => {
    return ( 
        <>  
            <BlogHeader />
            <BlogList blogs={blogs} loading={loading} error={error} />
        </>
     );
}
 
export default Blog;