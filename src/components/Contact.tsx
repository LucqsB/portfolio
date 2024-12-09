import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importer le SDK EmailJS

interface FormData {
    name: string;
    email: string;
    message: string;
}

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [statusMessage, setStatusMessage] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        // Envoi de l'email via EmailJS
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                form,
                process.env.REACT_APP_EMAILJS_USER_ID!
            )
            .then(
                (response) => {
                    setStatusMessage("Message reçu !");
                    setFormData({ name: "", email: "", message: "" }); // Réinitialiser les champs du formulaire
                },
                (error) => {
                    setStatusMessage("Échec de l'envoi du message, essaie encore.");
                }
            );
    };

    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen p-8">
            <h2 className="text-4xl font-bold mb-8">Écris-moi</h2>
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                <div className="w-full max-w-lg space-y-6">

                    {/* Nom et Email */}
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none py-2 text-lg placeholder-gray-400 transition"
                            placeholder="Ton nom"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none py-2 text-lg placeholder-gray-400 transition"
                            placeholder="Ton email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="relative mt-6">
                    <textarea
                        id="message"
                        name="message"
                        className="w-full bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none py-2 text-lg placeholder-gray-400 transition resize-none"
                        rows={5}
                        placeholder="Ton message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Bouton d'envoi */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-28 py-8 text-lg font-semibold hover:bg-purple-900 transition border-2 border-emerald-400"
                    >
                        Envoyer
                    </button>
                </div>
            </form>

            {statusMessage && (
                <p className="mt-4 text-center text-lg">{statusMessage}</p>
            )}
        </section>
    );
}

export default Contact;
