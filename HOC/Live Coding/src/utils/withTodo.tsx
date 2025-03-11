import axios from "axios";
import { useEffect, useState, ComponentType } from "react";


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


interface WithTodoProps {
    todo: Todo | null;
}


export const withTodo = <P extends object>(
    Component: ComponentType<P & WithTodoProps>,
    todoId: string
) => {
    const WrappedComponent: React.FC<Omit<P, keyof WithTodoProps>> = (props) => {
        const [todo, setTodo] = useState<Todo | null>(null);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);

        useEffect(() => {
            const fetchingTodo = async () => {
                try {
                    const response = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
                    setTodo(response.data);
                } catch (error) {
                    if (error as Error) {
                        setError("Failed to fetch data.");
                    }
                } finally {
                    setLoading(false);
                }
            };
            fetchingTodo();
        }, []);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return <Component {...(props as P)} todo={todo} />;
    };

    return WrappedComponent;
};
