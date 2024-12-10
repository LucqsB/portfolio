import codeImage from "../assets/image-code.png";

function About() {
    return (
        <section
            id="à propos"
            className="relative py-20 overflow-hidden"
        >
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Colonne Texte */}
                <div>
                    <h2 className="text-4xl font-extrabold mb-6 text-purple-900">
                        À propos de moi
                    </h2>
                    <p className="text-lg mb-6">
                        Je suis un développeur en pleine reconversion professionnelle, mais pas un débutant quand il s'agit
                        de rigueur et de créativité. Cuisinier de formation, j'ai obtenu un BTS en hôtellerie-restauration à
                        Lyon, grâce auquel j'ai pu travailler dans des établissements renommés à Lyon et à La Réunion. Ce
                        parcours riche et exigeant m'a permis de développer des qualités professionnelles solides,
                        aujourd'hui directement transposables dans le domaine du développement web.
                    </p>
                    <p className="text-lg mb-6">
                        Dans la cuisine comme dans le code, la précision et l'attention aux détails sont essentielles. J'ai
                        appris à travailler sous pression, à m'adapter rapidement à des situations imprévues et à collaborer
                        efficacement avec des équipes multidisciplinaires. Ces compétences sont des atouts précieux dans mon
                        travail actuel, où l'écoute, la capacité à résoudre des problèmes complexes et la recherche de
                        solutions innovantes sont primordiales.
                    </p>
                    <p className="text-lg">
                        Aujourd'hui, je me consacre pleinement à ma nouvelle passion: concevoir et développer des
                        applications modernes et performantes. Mon objectif est de créer des expériences utilisateur
                        intuitives tout en continuant à explorer les défis techniques qui me motivent chaque jour.
                    </p>
                </div>

                {/* Colonne Image */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={codeImage}
                        alt="Code"
                        className="rounded-lg shadow-md max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
