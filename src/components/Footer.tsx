function Footer() {
    return (
        <footer className="py-10 bg-gray-800 text-white text-center">
            <p className="text-sm">&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="text-white hover:text-gray-400">GitHub</a>
                <a href="#" className="text-white hover:text-gray-400">LinkedIn</a>
                <a href="#" className="text-white hover:text-gray-400">Twitter</a>
            </div>
        </footer>
    );
}

export default Footer;
