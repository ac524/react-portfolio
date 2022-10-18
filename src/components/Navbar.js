export const Navbar = () => {
    return (
        <div className="bg-sky-500 text-white flex">
            <h1 className="p-3 font-bold">Anthony's Portfolio</h1>
            <nav className="ml-auto flex">
                <a href="#profile" className="p-3 hover:bg-sky-700">Profile</a>
                <a href="#portfolio" className="p-3 hover:bg-sky-700">Portfolio</a>
                <a href="#contact" className="p-3 hover:bg-sky-700">Contact</a>
            </nav>
        </div>
    )
}