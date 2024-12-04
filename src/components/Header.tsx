import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
    const sections = ["bonjour", "à propos", "compétences", "contact"];
    const [activeSection, setActiveSection] = useState<string>("");

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
            threshold: 0.5, // Déclenchement à 50% de visibilité
        });

        const sectionsToObserve = document.querySelectorAll("section");
        sectionsToObserve.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">LBA</h1>
                <nav>
                    <ul className="flex space-x-4">
                        {sections.map((section) => (
                            <li key={section} className="relative">
                                <a
                                    href={`#${section}`}
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
                                        activeSection === section
                                            ? "w-full"
                                            : "w-0"
                                    }`}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;