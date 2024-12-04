function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen p-8">
            <h2 className="text-4xl font-bold mb-8">Écris-moi</h2>
            <form className="w-full max-w-lg space-y-6">
                {/* Ligne avec Nom et Email */}
                <div className="flex space-x-6">
                    {/* Nom */}
                    <div className="flex-1">
                        <label htmlFor="name" className="sr-only">Nom</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Ton nom"
                            className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none py-2 text-lg placeholder-gray-400 transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex-1">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ton email"
                            className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none py-2 text-lg placeholder-gray-400 transition"
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                        id="message"
                        placeholder="Ton message"
                        rows={5}
                        className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none py-2 text-lg placeholder-gray-400 transition resize-none"
                    ></textarea>
                </div>

                {/* Bouton */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-28 py-8 text-lg font-semibold hover:bg-purple-900 transition border border-white"
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
