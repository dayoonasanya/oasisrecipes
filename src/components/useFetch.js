import { useState, useEffect } from 'react';

function useFetch(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, SetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1' + url);
                const result = await response.json();
                SetData(result);
                setIsLoading(false);
            } catch (error) {
                setIsError(error.message);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url])

    return [isLoading, isError, data];
}

export default useFetch;