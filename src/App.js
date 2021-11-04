//import logo from './logo.svg';
import './assets/scss/styles-main.scss';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Prizes from "./components/Prizes";
import Faq from "./components/Faq";
import Sponsors from './components/Sponsors';
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer"
import Timeline from "./components/TimelineMain";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
    AOS.init();
    return (
        <div className="App">
            <NavBar/>
            <HeroSection/>
            <About/>
            <Prizes/>
            <Sponsors/>
            <Faq/>
            <ContactUs/>
            <Timeline/>
            <Footer/>
        </div>
    );
}

export default App;
