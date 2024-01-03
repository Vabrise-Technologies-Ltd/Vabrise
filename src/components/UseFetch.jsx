import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                const posts = res.data
                setData(posts)
                setLoading(false)
                setError(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                setError(true)
            })
    }, [url])
    
    return ({ data, loading, error });
}
 
export default UseFetch;