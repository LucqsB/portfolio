import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import Skills from "./components/Skills";

function App() {
    return (
        <div>
            <Header/>
                <main>
                    <Home/>
                    <About/>
                    <Skills/>
                    <Contact/>
                    <Footer/>
                    <SideNav />
                </main>
        </div>
    );
}

export default App;
