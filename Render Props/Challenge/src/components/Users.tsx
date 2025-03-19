import DataFetcher from './FetchData';

interface User {
    id: string;
    name: string;
}

const Users = () => {
    return (
        <DataFetcher<User[]>
            url="https://jsonplaceholder.typicode.com/users"
            render={(data, isLoading, error) => {

                if (isLoading) return <p>Loading...</p>
                if (error) return <p>Error fetching data: {error}</p>

                return (
                    <ul>
                        {data?.map((user) => {
                            return <li key={user.id}>{user.name}</li>
                        })}
                    </ul>
                )
            }}
        />
    )
}

export default Users
