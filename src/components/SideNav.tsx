import React, { useEffect, useState } from "react";

const SideNav: React.FC = () => {
    const sections = [
        { id: "bonjour", label: "Bonjour" },
        { id: "à propos", label: "À propos" },
        { id: "techStack", label: "TechStack" },
        { id: "contact", label: "Contact" },
    ];

    const [activeSection, setActiveSection] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleSectionChange = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleSectionChange, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
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
        <div className={`fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-4 ${isVisible ? 'block' : 'hidden'}`}>
            {sections.map((section) => (
                <div key={section.id} className="flex items-center space-x-2">
                    <button
                        onClick={() => scrollToSection(section.id)}
                        className={`transition-all ${
                            activeSection === section.id
                                ? "w-10 h-6 bg-purple-900 rounded-full" // Ovale actif
                                : "w-4 h-4 bg-teal-500 rounded-full hover:bg-purple-900 focus:bg-purple-900" // Rond inactif
                        }`}
                        style={{
                            marginLeft: activeSection === section.id ? "0px" : "12px", // Alignement des puces rondes
                        }}
                        title={section.label}
                    />
                    <span
                        className={`text-xs transition-transform ${
                            activeSection === section.id
                                ? "text-purple-900 scale-110 font-semibold"
                                : "text-gray-500"
                        }`}
                    >
                        {section.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default SideNav;
