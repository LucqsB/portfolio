function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold mb-10">Mes Projets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/300" alt="Project 1" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">Projet 1</h3>
                            <p className="text-gray-600 mb-4">Description courte du projet, des technologies utilisées, et des objectifs.</p>
                            <a href="#" className="text-blue-500 hover:text-blue-700">Voir le projet</a>
                        </div>
                    </div>

                    {/* Répéter le même modèle pour plus de projets */}

                </div>
            </div>
        </section>
    );
}

export default Projects;
