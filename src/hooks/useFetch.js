
import { useEffect, useState } from 'react';

export default function useFetch(url) {

    // const abortCont = new AbortController();
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    // console.log(res);
                    if (res.ok) {
                        return res.json();
                    } else {
                        setError("Couldn't fetch data from the server.")
                    }
                })
                .then((data) => {
                    // console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(null)
                })
                .catch((error) => {
                    
                        setIsLoading(false);
                        setError(error.message)
                    
                })
        }, 200)
        // return () => {
        //     return abortCont.abort();
        // }
    }, [url]);

    return {data, isLoading, error}
}
