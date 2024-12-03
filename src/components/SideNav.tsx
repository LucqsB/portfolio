import React, { useEffect, useState } from "react";

const SideNav: React.FC = () => {
    const sections = [
        { id: "home", label: "Home" },
        { id: "projects", label: "Projets" },
        { id: "about", label: "À propos" },
        { id: "contact", label: "Contact" },
        { id: "footer", label: "Footer" },
    ];

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
            threshold: 0.5, // Déclenchement quand 50% de la section est visible
        });

        const sectionsToObserve = document.querySelectorAll("section");
        sectionsToObserve.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-4">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-4 h-4 rounded-full transition-all ${
                        activeSection === section.id
                            ? "bg-blue-500"
                            : "bg-gray-500 hover:bg-blue-500 focus:bg-blue-500"
                    }`}
                    title={section.label}
                />
            ))}
        </div>
    );
};

export default SideNav;
