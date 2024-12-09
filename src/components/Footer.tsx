function Footer() {
    return (
        <section id="footer" className="w-full h-screen flex flex-col items-center justify-center">
            <p className="text-lg font-semibold mb-6">&copy; 2024 Lucas Bacha. Tous droits réservés.</p>

            <div className="flex flex-col items-start space-y-4 text-xl">
                {/* GitHub Link */}
                <a
                    href="https://github.com/LucqsB" target="_blank" // Remplace par ton vrai lien GitHub
                    className="flex items-center space-x-2 hover:underline hover:text-purple-900"
                >
                    <i className="fab fa-github text-2xl"></i> {/* Icone GitHub */}
                    <span>GitHub</span>
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/lucasbacha/" target="_blank"// Remplace par ton vrai lien LinkedIn
                    className="flex items-center space-x-2 hover:underline hover:text-purple-900"
                >
                    <i className="fab fa-linkedin text-2xl"></i> {/* Icone LinkedIn */}
                    <span>LinkedIn</span>
                </a>

                {/* CV Download Button */}
                <a
                    href="/CV_LBA.pdf" // Lien vers le fichier PDF de ton CV
                    download
                    className="px-28 py-8 text-lg font-semibold hover:bg-purple-900 transition border-2 border-emerald-400"
                >
                    Télécharger mon CV
                </a>
            </div>
        </section>
    );
}

export default Footer;
