import {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import './assets/scss/styles-main.scss';
import LazyLoad from 'react-lazyload';

import About from "./components/About";
import Awards from "./components/Awards";
import FAQ from "./components/Faq";
import Sponsors from './components/Sponsors';

import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Timeline from "./components/TimelineMain";
import ContactUs from "./components/ContactUs";

// const About = loadable(() => import("./components/About"))
// const Awards = loadable(() => import("./components/Awards"))
// const Sponsors = loadable(() => import("./components/Sponsors"))
// const FAQ = loadable(() => import("./components/Faq"))
// const Gallery = loadable(() => import("./components/Gallery"))
// const Timeline = loadable(() => import("./components/TimelineMain"))
// const ContactUs = loadable(() => import("./components/ContactUs"))
// const Footer = loadable(() => import("./components/Footer"))

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
            <LazyLoad once offset={200}>
                <Timeline/>
            </LazyLoad>
            <LazyLoad once offset={200}>
                <Awards/>
            </LazyLoad>
            <LazyLoad once offset={200}>
                <Sponsors/>
            </LazyLoad>
            <LazyLoad once offset={200}>
                <Gallery/>
            </LazyLoad>
            <LazyLoad once offset={200}>
                <FAQ/>
            </LazyLoad>
            <LazyLoad once offset={200}>
                <ContactUs/>
            </LazyLoad>
            <Footer/>
        </main>
    );
}

export default App;
