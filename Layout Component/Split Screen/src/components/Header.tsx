const Header = () => {
    return (
        <header className="bg-teal-500  text-white p-4 flex justify-between items-center">
            <h1 className="text-xl">My Dashboard</h1>
            <div className="flex items-center space-x-4">
                <button className="bg-teal-700 p-2 rounded-lg">Profile</button>
                <button className="bg-teal-700 p-2 rounded-lg">Logout</button>
            </div>
        </header>
    )
}

export default Header
