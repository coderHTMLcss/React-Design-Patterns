import React, { useEffect } from 'react';

interface DataSourceProps {
    getDataFunc: () => void;
    children: React.ReactNode;
    resourceName: string;
}

const DataSource = ({
    getDataFunc = () => { },
    children,
    resourceName
}: DataSourceProps) => {
    const [state, setState] = React.useState<unknown>(null);
    const [error, setError] = React.useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getDataFunc();
                setState(data);
            } catch (error) {
                if (error as Error) {
                    setError("Failed to fetch data.");
                }
            }
        })();
    }, [getDataFunc]);

    return (
        <> {error ? (
            <p style={{ color: "red" }}>{error}</p>
        ) : (
            React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        [resourceName]: state,
                    });
                }
                return child;
            })
        )}
        </>
    );
};

export default DataSource;
