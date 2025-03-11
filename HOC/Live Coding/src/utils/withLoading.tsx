interface WithLoadingProps {
    isLoading: boolean;
    [key: string]: unknown;
}

export const withLoading = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
    return function WithLoading({ isLoading, ...props }: WithLoadingProps) {
        if (isLoading) return <p>Loading...</p>;

        return <WrappedComponent {...(props as T)} />
    };
};