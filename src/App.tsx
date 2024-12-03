import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";

function App() {
    return (
        <div className="font-sans text-gray-800">
            <Header/>
                <main>
                    <Home/>
                    <Projects/>
                    <About/>
                    <Contact/>
                    <Footer/>
                    <SideNav />
                </main>
        </div>
    );
}

export default App;
