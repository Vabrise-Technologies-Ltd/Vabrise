import { useContext } from "react";
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
                            <Link key={blog.id} to={`/articles/${blog.slug}`} className="card h-84">
                                <div className="md:h-44 w-full">
                                    <LazyLoadImage
                                        src={blog.image}
                                        alt={`image ${index + 1}`}
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                </div>
                                <div className="card-content">
                                    <h4 className="card-title font-senibold text-base">{blog.title}</h4>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: blog.body.split(' ').slice(0, 16).join(' ') }}
                                        className="card-description"
                                    ></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default BlogList;
