function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Mon Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                        <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
