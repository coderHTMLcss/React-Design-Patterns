interface Todo {
    id: string,
    title: string,
    completed: boolean
};

interface TodoProps {
    todo: Todo
}

const MyComponent = ({ todo }: TodoProps) => {
    console.log(todo);

    return (
        <div>
            {todo.title}
        </div>
    )
}

export default MyComponent
