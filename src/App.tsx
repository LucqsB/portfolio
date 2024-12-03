import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="font-sans text-gray-800">
            <Header/>
            <main>
                <section id="about" className="h-screen bg-gray-100">À propos</section>
                <section id="projects" className="h-screen bg-gray-200">Projets</section>
                <section id="contact" className="h-screen bg-gray-300">Contact</section>
            </main>
            <Home/>
            <Projects/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
