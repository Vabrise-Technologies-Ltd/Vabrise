import { useContext } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { FetchContext } from "../../../context/FetchContext";
import DefaultSpinner from "../../../components/Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";

function getFirstWords(text, wordLimit) {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';  // Adding ellipsis to indicate truncation
}

const BlogList = () => {
    const { blogs, errorBlogs, loadingBlogs } = useContext(FetchContext);
    console.log(blogs);

    return (
        <>
            <div>
                <p className="text-red-500">{errorBlogs}</p>
                {!blogs || loadingBlogs ? (
                    <div className="flex flex-col justify-center items-center md:my-32 my-12 text-cyan-500 gap-4">
                        <DefaultSpinner />
                        <p>Loading blogs...</p>
                    </div>
                ) : (
                    <div className="card-container">
                        {blogs && blogs.map((blog, index) => (
                            <Fade bottom key={blog.id}>
                                <Link to={`/articles/${blog.slug}`} className="card">
                                    <div className="md:h-52 w-full">
                                        <LazyLoadImage
                                            src={blog.image}
                                            alt={`image ${index + 1}`}
                                            className="h-full w-full"
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title">{blog.title}</h4>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: getFirstWords(blog.body, 12) }}
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
