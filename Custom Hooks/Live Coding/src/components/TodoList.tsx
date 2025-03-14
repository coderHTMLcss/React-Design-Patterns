import { useFetch } from './hooks/useFetch';
import TodoItem from './TodoItem';

interface Todo {
    id: number;
    userId: number
    title: string;
    completed: boolean;
};

const baseUrl = `https://jsonplaceholder.typicode.com/todos`
const TodoList = () => {
    const [data, loading, error] = useFetch<Todo[]>(baseUrl);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error fetching todos: {error.message}</p>

    return (
        <ul>
            {data && data.map((item) => {
                return <TodoItem key={item.id} {...item} />;
            })}
        </ul>
    );
};

export default TodoList;
