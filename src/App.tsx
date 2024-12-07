import React, { useState } from "react";
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

    const validWords = ["bonjour", "salut", "wesh", "salutations", "hello", "hola", "coucou"]; // Mots autorisés

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validWords.includes(inputValue.toLowerCase())) {
            setIsAuthorized(true);
        } else {
            alert("Pas assez poli.");
        }
    };

    return (
        <>
            {!isAuthorized ? (
                // Écran d'accueil
                <div id="welcome-screen">
                    <form onSubmit={handleFormSubmit}>
                        <h1>Bonjour !</h1>
                        <p>Seules les personnes polies peuvent entrer:</p>
                        <input
                            type="text"
                            placeholder="Mot magique..."
                            value={inputValue}
                            onChange={handleInputChange}
                            className="welcome-input"
                        />
                        <br/>
                        <button type="submit" className="welcome-button">
                            Entrer ?
                        </button>
                    </form>
                </div>
            ) : (
                // Contenu principal
                <div>
                    <Header />
                    <main>
                        <Home />
                        <About />
                        <TechStack />
                        <Contact />
                        <Footer />
                        <SideNav />
                    </main>
                </div>
            )}
        </>
    );
}

export default App;
