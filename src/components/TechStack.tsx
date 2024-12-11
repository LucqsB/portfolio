import React from "react";
import HTML5Logo from "../assets/html5.svg";
import CSS3Logo from "../assets/css3.svg";
import JSLogo from "../assets/javascript.svg";
import ReactLogo from "../assets/react.svg";
import TailwindLogo from "../assets/tailwindcss.svg";
import JavaLogo from "../assets/java.svg";
import SpringbootLogo from "../assets/springboot.svg";
import PHPLogo from "../assets/php.svg";
import SymfonyLogo from "../assets/symfony.svg";
import SQLLogo from "../assets/mysql.svg";

const frontEndTechs = [
    { name: "HTML5", logo: HTML5Logo },
    { name: "CSS3", logo: CSS3Logo },
    { name: "JavaScript", logo: JSLogo },
    { name: "React", logo: ReactLogo },
    { name: "TailwindCSS", logo: TailwindLogo },
];

const backEndTechs = [
    { name: "Java", logo: JavaLogo },
    { name: "Spring Boot", logo: SpringbootLogo },
    { name: "PHP", logo: PHPLogo },
    { name: "Symfony", logo: SymfonyLogo },
    { name: "SQL", logo: SQLLogo },
];

function TechStack() {
    return (
        <section
            id="techStack"
            className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">TechStack</h2>
            {/* Front-End */}
            <div className="mb-16 w-full max-w-4xl">
                <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">
                    Front-End
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
                    {frontEndTechs.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center group transform transition-transform hover:scale-105"
                        >
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="tech-logo w-16 sm:w-20"
                            />
                            <span
                                className="text-sm sm:text-base font-medium group-hover:text-purple-900 transition-colors">
                        {tech.name}
                    </span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Back-End */}
            <div className="w-full max-w-4xl">
                <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">
                    Back-End
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
                    {backEndTechs.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center group transform transition-transform hover:scale-105"
                        >
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="tech-logo w-16 sm:w-20"
                            />
                            <span
                                className="text-sm sm:text-base font-medium group-hover:text-purple-900 transition-colors">
                        {tech.name}
                    </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default TechStack;
