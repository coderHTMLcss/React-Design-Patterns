// https://jsonplaceholder.typicode.com/todos;
import React from "react";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
interface Todo {
    id: number,
    title: string,
    completed: boolean
};

interface ChildComponentProps {
    todos: Todo | null;
};

interface SingleTodoLoaderProps {
    children: ReactNode;
    todoId: string,
}
const SingleTodoLoader = ({ todoId, children }: SingleTodoLoaderProps) => {
    const [todos, setTodos] = useState<Todo | null>(null);


    useEffect(() => {
        const fetchingTodos = async () => {
            try {
                const result = await axios.get<Todo>(
                    `https://jsonplaceholder.typicode.com/todos/${todoId}`
                );
                setTodos(result.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchingTodos();
    }, []);

    return (
        <div>
            {React.Children.map(children, (child) => {
                if (React.isValidElement<ChildComponentProps>(child)) {
                    return React.cloneElement(child, { todos });
                };
                return child;
            })};
        </div>
    );
};

export default SingleTodoLoader;
