import { useContext } from "react";
import { FetchContext } from "../../../context/FetchContext";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function getFirstWords(text, wordLimit) {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';  // Adding ellipsis to indicate truncation
}

export default function BlogHeader() {
    const { blogs, errorBlogs, loadingBlogs } = useContext(FetchContext);
    console.log(blogs);

    return (
        <Carousel
            autoplay={true}    
            loop={true}
            autoplayDelay={ 5000}
        >
            {blogs.map(({ image, title, body, slug}, index) => (
                <div key={index} className="relative md:h-96 h-80 w-full">
                    <img
                        src={image}
                        alt={`image ${index + 1}`}
                        className="h-full w-full object-cover "
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-11/12 pl-4  md:w-3/4 md:pl-20 md:pb-6 lg:pl-32 lg:pb-8 pb-4 py-4">
                            <Typography 
                                variant="h5"
                                className="text-cyan-600 text-base md:text-xl lg:text-2xl md:mb-6 mb-2 "
                            >
                                Featured
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-xl md:text-4xl lg:text-5xl hover:underline hover:decoration-cyan-600 duration-500 transition"
                            >
                                <Link to={`/articles/${slug}`}>{title}</Link>
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="md:mb-12 mb-8 opacity-80 lg:text-xl md: text-sm"
                            >
                                <div
                                    dangerouslySetInnerHTML={{ __html: getFirstWords(body, 30) }}
                                    className=""
                                ></div>
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
