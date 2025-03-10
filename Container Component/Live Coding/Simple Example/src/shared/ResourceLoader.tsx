import React, { ReactNode, useState, useEffect } from "react";
import axios from "axios";

interface ResourceLoaderProps {
    resourceUrl: string;
    resourceName: string;
    children: ReactNode;
}

const ResourceLoader: React.FC<ResourceLoaderProps> = ({ resourceUrl, resourceName, children }) => {
    const [data, setData] = useState<unknown>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await axios.get(`https://jsonplaceholder.typicode.com/${resourceUrl}`);
                setData(result.data);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.message || "Не вдалося завантажити дані");
                } else {
                    setError("Невідома помилка");
                }
            } finally {
                setLoading(false);
            };
        };
        fetchData();
    }, [resourceUrl]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: data });
                }
                return child;
            })}
        </>
    );
};

export default ResourceLoader;
