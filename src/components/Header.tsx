import React, { useEffect, useState } from "react";
import { MdNightlight, MdWbSunny } from "react-icons/md";
import Logo from "../assets/squid1.png"; // Chemin vers votre logo SVG ou image

const Header: React.FC = () => {
    const sections = ["bonjour", "à propos", "techStack", "contact"];
    const [activeSection, setActiveSection] = useState<string>("");
    const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true); // État pour savoir si on attend la récupération du thème

    const handleSectionChange = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleSectionChange, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Déclenchement quand 50% de la section est visible
        });

        const sectionsToObserve = document.querySelectorAll("section");
        sectionsToObserve.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        if (newTheme) {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    };

    // Récupérer et appliquer le thème au premier rendu
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.add("light");
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.remove("light");
        }

        setIsLoading(false); // Mettre à jour isLoading quand la récupération du thème est terminée
    }, []); // Ce useEffect s'exécute une seule fois au premier rendu

    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault(); // Empêche le changement d'URL
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (isLoading) return null; // Attendre que le thème soit récupéré avant de faire le rendu

    return (
        <header className="sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#bonjour" // Retour en haut de la page en cliquant sur le logo
                    onClick={(event) => scrollToSection(event, "bonjour")}
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16 h-16 cursor-pointer hover:opacity-80 transition-opacity"
                    />
                </a>

                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-6">
                        {sections.map((section) => (
                            <li key={section} className="relative mt-1.5">
                                <a
                                    href="#"
                                    onClick={(event) => scrollToSection(event, section)} // Appel à la fonction de scroll sans changer l'URL
                                    className={`hover:text-purple-900 transition-all ${
                                        activeSection === section
                                            ? "text-purple-900 font-semibold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] bg-purple-900 transition-all duration-500 ${
                                        activeSection === section ? "w-full" : "w-0"
                                    }`}
                                />
                            </li>
                        ))}
                        {/* Bouton de changement de thème */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded dark:bg-gray-800 text-black dark:text-white transition-all"
                        >
                            {isDarkMode ? (
                                <MdWbSunny className="w-6 h-6 text-white" />
                            ) : (
                                <MdNightlight className="w-6 h-6 text-black" />
                            )}
                        </button>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
