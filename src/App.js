import loadable from '@loadable/component'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import './assets/scss/styles-main.scss';

const About = loadable(() => import("./components/About"))
const Awards = loadable(() => import("./components/Awards"))

function App() {
    // AOS.init();
    return (
        <div className="App">
            <NavBar/>
            <HeroSection/>
            <About/>
            <Awards/>
            {/*<Sponsors/>*/}
            {/*<Faq/>*/}
            {/*<Timeline/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
