function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold mb-10">Contactez-moi</h2>
                <form action="#" method="POST" className="max-w-lg mx-auto">
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre Nom"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre Email"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Votre Message"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                        required
                    />
                    <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Envoyer
                    </button>
                </form>
                <div className="mt-10">
                    <p className="text-lg">Ou retrouvez-moi sur :</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                        <a href="#" className="text-blue-500 hover:text-blue-700">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
