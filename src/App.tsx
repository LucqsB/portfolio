import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import TechStack from "./components/TechStack";
import "./index.css";

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [fadeInClass, setFadeInClass] = useState("hidden"); // Classe initiale

    const validWords = ["bonjour", "salut", "wesh", "salutations", "hello", "hola", "coucou"]; // Mots autorisés

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validWords.includes(inputValue.toLowerCase())) {
            setIsAuthorized(true);

            // Ajout de la classe fade-in après un court délai
            setTimeout(() => setFadeInClass("fade-in"), 50);
        } else {
            alert("Pas assez poli.");
        }
    };

    return (
        <>
            {!isAuthorized ? (
                // Écran d'accueil
                <div id="welcome-screen" className="min-h-screen flex items-center justify-center">
                    <form onSubmit={handleFormSubmit} className="text-center p-8 shadow-lg rounded-lg">
                        <h1 className="text-3xl font-bold mb-4">Bonjour !</h1>
                        <p className="mb-6">Seules les personnes polies peuvent entrer:</p>
                        <input
                            type="text"
                            placeholder="Mot magique..."
                            value={inputValue}
                            onChange={handleInputChange}
                            className="welcome-input border rounded p-2 mb-4 w-full"
                        />
                        <br />
                        <button type="submit" className="welcome-button bg-purple-600 px-4 py-2 rounded hover:bg-purple-800">
                            Entrer ?
                        </button>
                    </form>
                </div>
            ) : (
                // Contenu principal
                <div className={`${fadeInClass}`}>
                    <Header />
                    <main className="space-y-16">
                        {/* Ajout de classes de marges pour éviter le chevauchement */}
                        <section id="home" className="py-16 mt-20">
                            <Home />
                        </section>
                        <section id="about" className="py-16 mt-20">
                            <About />
                        </section>
                        <section id="techstack" className="py-16 mt-20">
                            <TechStack />
                        </section>
                        <section id="contact" className="py-16 mt-20">
                            <Contact />
                        </section>
                        <Footer />
                    </main>
                    <SideNav />
                </div>
            )}
        </>
    );
}

export default App;
