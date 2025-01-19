import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FetchContext } from "../../../context/FetchContext";
import DefaultSpinner from "../../../components/Spinner";
import { FaArrowLeft } from "react-icons/fa6";

const BlogDetails = () => {
    const { blogs, loadingBlogs } = useContext(FetchContext);
    const { slug } = useParams();

    // Find the blog post based on the slug
    const blog = blogs.find((item) => item.slug === slug);

    // Show loading spinner while data is being fetched
    if (loadingBlogs) {
        return (
            <div className="flex flex-col justify-center items-center md:my-32 my-12 text-cyan-500 gap-4">
                <DefaultSpinner />
                <p>Loading blog details...</p>
            </div>
        );
    }

    // Handle case where blog is not found
    if (!blog) {
        return (
            <div className="flex flex-col justify-center items-center md:my-32 my-12 text-red-500 gap-4">
                <p>Blog not found.</p>
                <Link
                    to="/articles"
                    className="flex items-center text-cyan-500 border border-cyan-500 rounded-lg py-2 px-4 w-fit hover:bg-cyan-500 hover:text-white"
                >
                    <FaArrowLeft className="mr-2" />
                    <p>Back to Articles</p>
                </Link>
            </div>
        );
    }

    return (
        <div className="md:mx-24 mx-4 md:mt-16 mt-8 md:mb-32 mb-16">
            <div className="md:mb-16 mb-8">
                <Link
                    to="/articles"
                    className="flex items-center text-cyan-500 border border-cyan-500 rounded-lg py-2 md:px-4 px-3 w-fit hover:bg-cyan-500 hover:text-white"
                >
                    <FaArrowLeft className="mr-2" />
                    <p>Back to Articles</p>
                </Link>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative">
                    <img
                        src={blog.image}
                        alt={blog.title || "Blog Image"}
                        className="w-full h-64 md:h-96 object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <div className="md:p-6 py-3 px-1">
                    <h2 className="text-2xl font-semibold text-gray-800 md:mt-4 mt-2">
                        {blog.title}
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: blog.body }}
                        className="prose max-w-full mt-4 text-gray-700"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;