import loadable from '@loadable/component'
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import './assets/scss/styles-main.scss';

const About = loadable(() => import("./components/About"))
const Awards = loadable(() => import("./components/Awards"))
const Sponsors = loadable(() => import("./components/Sponsors"))
const FAQ = loadable(() => import("./components/Faq"))

function App() {
    AOS.init({duration:800,ease:'ease-in-out'});
    return (
        <div className="App">
            <NavBar/>
            <HeroSection/>
            <About/>
            <Awards/>
            <Sponsors/>
            <FAQ/>
            {/*<Timeline/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
