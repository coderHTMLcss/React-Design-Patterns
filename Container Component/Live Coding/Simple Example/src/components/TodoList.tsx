interface Todo {
    id: number;
    title: string;
    completed: string;
}

interface TodoListProps {
    todo: Todo | null;
}

const TodoList = ({ todo }: TodoListProps) => {

    const { id, title } = todo || {};

    return todo ? (
        <div>
            <p>
                <strong>Todo ID:</strong> {id}
            </p>
            <h1>
                <strong>Todo Title:</strong> {title}
            </h1>
        </div>
    ) : (
        <p>Loading...</p>
    );

    // return todos?.map((todo) => (
    //     <div key={todo.id}>
    //         <p>
    //             <strong>Todo ID:</strong> {todo.id}
    //         </p>
    //         <h1>
    //             <strong>Todo Title:</strong> {todo.title}
    //         </h1>
    //     </div>
    // ));
};

export default TodoList;