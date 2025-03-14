interface TodoItemProps {
    id: number;
    title: string
};
const TodoItem = ({ id, title }: TodoItemProps) => {
    return (
        <li>
            <p>{id}</p>
            <h3>{title}</h3>
        </li>
    )
}

export default TodoItem
