import React, { createContext, useState, useEffect } from "react";

export const FetchContext = createContext();

const FetchProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [loadingBlogs, setLoadingBlogs] = useState(true);
    const [errorProducts, setErrorProducts] = useState(null);
    const [errorBlogs, setErrorBlogs] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost/api/products/");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setErrorProducts(error.message);
            } finally {
                setLoadingProducts(false);
            }
        };

        const fetchBlogs = async () => {
            try {
                const response = await fetch("http://localhost/api/articles/");
                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                setErrorBlogs(error.message);
            } finally {
                setLoadingBlogs(false);
            }
        };

        fetchProducts();
        fetchBlogs();
    }, []);

    return (
        <FetchContext.Provider value={{ products, blogs, loadingProducts, loadingBlogs, errorProducts, errorBlogs }}>
            {children}
        </FetchContext.Provider>
    );
};

export default FetchProvider;
