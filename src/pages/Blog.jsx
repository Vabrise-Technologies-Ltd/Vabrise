import BlogList from "../components/Blog/BlogList";

const Blog = ({blogs,loading,error}) => {
    console.log(blogs)
    return ( 
        <>
            <BlogList blogs={blogs} loading={loading} error={error} />
        </>
     );
}
 
export default Blog;