interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

interface UserListProps {
    users: User[] | null;
}

const UserList = ({ users }: UserListProps) => {
    return users ? (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">User List</h1>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2 truncate max-w-[150px]">{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    ) : (
        <p className="text-center text-gray-600 text-lg">Loading users...</p>
    );
};

export default UserList;
