import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = <T,>(url: string): [T | null, boolean, Error | null] => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const controller = new AbortController(); 
        const signal = controller.signal;

        const fetchingData = async () => {
            try {
                const response = await axios.get<T>(url, { signal });
                if (response.status !== 200) throw new Error('Fetching data failed');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Request canceled", error.message);
                } else {
                    setError(error as Error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchingData();

        return () => {
            controller.abort(); 
        };
    }, [url]);

    return [data, loading, error];
};
