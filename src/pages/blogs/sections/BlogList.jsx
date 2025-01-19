import { useContext } from "react";
import { Link } from "react-router-dom";
import { FetchContext } from "../../../context/FetchContext";
import DefaultSpinner from "../../../components/Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaArrowRight } from "react-icons/fa6";

function getFirstWords(text, wordLimit) {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';  // Adding ellipsis to indicate truncation
}

const BlogList = () => {
    const { blogs, loadingBlogs } = useContext(FetchContext);

    return (
        <>
            <div>
                {!blogs || loadingBlogs ? (
                    <div className="flex flex-col justify-center items-center md:my-32 my-12 text-cyan-500 gap-4">
                        <DefaultSpinner />
                        <p>Loading blogs...</p>
                    </div>
                ) : (
                    <div className="card-container max-w-7xl mx-auto px-4">
                        {blogs && blogs.map((blog, index) => (
                            <div key={blog.id} className="card h-84">
                                <Link className="md:h-44 w-full" to={`/articles/${blog.slug}`}>
                                    <LazyLoadImage
                                        src={blog.image}
                                        alt={`image ${index + 1}`}
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                </Link>
                                <div className="card-content">
                                    <h4 className="card-title font-senibold text-base">{blog.title}</h4>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: blog.body.split(' ').slice(0, 16).join(' ') + '...' }}
                                        className="card-description"
                                    ></div>
                                    <Link
                                        to={`/articles/${blog.slug}`}
                                        className="flex items-center text-cyan-500 border border-cyan-500 mt-4 rounded-lg py-2 px-4 w-fit hover:bg-cyan-500 hover:text-white"
                                    >
                                        <p>Read More</p>
                                        <FaArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default BlogList;
