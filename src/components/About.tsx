import codeImage from "../assets/image-code.png";

function About() {
    return (
        <section
            id="à propos"
            className="min-h-screen flex flex-col justify-start items-center px-6 sm:px-8 lg:px-16 py-8"
        >
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Colonne Texte (2/3 de la largeur sur grand écran) */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-purple-900 text-center lg:text-left">
                        À propos de moi
                    </h2>
                    <p className="text-base sm:text-lg mb-6 leading-relaxed text-justify">
                        Je suis un développeur en pleine reconversion professionnelle, mais pas un débutant quand il
                        s'agit
                        de rigueur et de créativité. Cuisinier de formation, j'ai obtenu un BTS en
                        hôtellerie-restauration à
                        Lyon, grâce auquel j'ai pu travailler dans des établissements renommés à Lyon et à La Réunion.
                        Ce
                        parcours riche et exigeant m'a permis de développer des qualités professionnelles solides,
                        aujourd'hui directement transposables dans le domaine du développement web.
                    </p>
                    <p className="text-base sm:text-lg mb-6 leading-relaxed text-justify">
                        Dans la cuisine comme dans le code, la précision et l'attention aux détails sont essentielles.
                        J'ai
                        appris à travailler sous pression, à m'adapter rapidement à des situations imprévues et à
                        collaborer
                        efficacement avec des équipes multidisciplinaires. Ces compétences sont des atouts précieux dans
                        mon
                        travail actuel, où l'écoute, la capacité à résoudre des problèmes complexes et la recherche de
                        solutions innovantes sont primordiales.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed text-justify">
                        Aujourd'hui, je me consacre pleinement à ma nouvelle passion: concevoir et développer des
                        applications modernes et performantes. Mon objectif est de créer des expériences utilisateur
                        intuitives tout en continuant à explorer les défis techniques qui me motivent chaque jour.
                    </p>
                </div>

                {/* Colonne Image (1/3 de la largeur sur grand écran) */}
                <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full">
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <img
                            src={codeImage}
                            alt="Code"
                            className="max-w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
