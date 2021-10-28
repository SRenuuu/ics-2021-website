import './assets/scss/styles-main.scss';
import './App.css';
import 'aos/dist/aos.css';
import Prizes from "./components/Prizes";
import SampleSection from "./components/SampleSection";
import HeroSection from "./components/HeroSection";

function App() {
  // AOS.init();
  return (
    <div className="App">

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <HeroSection/>
      <Prizes/>
      <SampleSection/>
    </div>
  );
}

export default App;
