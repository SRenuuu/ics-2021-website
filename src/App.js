import {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import './assets/scss/styles-main.scss';
import loadable from '@loadable/component'

const About = loadable(() => import("./components/About"))
const Awards = loadable(() => import("./components/Awards"))
const Sponsors = loadable(() => import("./components/Sponsors"))
const FAQ = loadable(() => import("./components/Faq"))
const Gallery = loadable(() => import("./components/Gallery"))
const Timeline = loadable(() => import("./components/TimelineMain"))
const ContactUs = loadable(() => import("./components/ContactUs"))
const Footer = loadable(() => import("./components/Footer"))

const App = () => {
    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            once: true,
            duration: 800,
            ease: 'ease-in-out',
            delay: 100,
        });

    }, []);

    return (
        <main className="App">
            <NavBar/>
            <HeroSection/>
            <About/>
            <Awards/>
            <Sponsors/>
            <FAQ/>
            <Gallery/>
            <ContactUs/>
            <Timeline/>
            <Footer/>
        </main>
    );
}

export default App;
