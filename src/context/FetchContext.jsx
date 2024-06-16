import React, { createContext, useState, useEffect } from "react";
import publicAxios from "../api/publicAxios";

export const FetchContext = createContext();

const FetchProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [loadingBlogs, setLoadingBlogs] = useState(true);
    const [errorBlogs, setErrorBlogs] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await publicAxios.get("/articles/");
                setBlogs(response.data);
            } catch (error) {
                setErrorBlogs(error.message || "Failed to fetch blogs");
            } finally {
                setLoadingBlogs(false);
            }
        };
        fetchBlogs();
    }, []);


    return (
        <FetchContext.Provider value={{ blogs, loadingBlogs, errorBlogs }}>
            {children}
        </FetchContext.Provider>
    );
};

export default FetchProvider;
