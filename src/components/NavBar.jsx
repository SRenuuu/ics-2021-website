import React, {useState} from 'react'
import logo from '../assets/images/ics-2.0-logo.webp'
import {Col, Container, Navbar, Row} from 'react-bootstrap';
import {FaChevronUp} from "react-icons/all";

const NavBar = () => {
    const [scrollStyle, setScrollStyle] = useState("ud-header");
    const [isActive, setActive] = useState(false);
    const [isBackToTopShown, setIsBackToTopShown] = useState(false);

    window.onscroll = () => {
        if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
            setScrollStyle("ud-header sticky");
            setIsBackToTopShown(true);

        } else {
            setScrollStyle("ud-header")
            setIsBackToTopShown(false);
        }
    }

    const navbarToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/*eslint-disable-next-line*/}
            <a href="#" className="back-to-top" style={isBackToTopShown ? {opacity: 1} : {opacity: 0}}>
                <FaChevronUp/>
            </a>
            <header className={scrollStyle}>
                <Container>
                    <Row>
                        <Col xs={12} data-aos="fade-down">
                            <Navbar className="navbar" expand="lg">
                                <Navbar.Brand className="navbar-brand" href="#">
                                    <img src={logo} alt="logo"/>
                                </Navbar.Brand>
                                <button className={isActive ? "navbar-toggler active" : "navbar-toggler"}
                                        onClick={navbarToggle}>
                                    <span className="toggler-icon"> </span>
                                    <span className="toggler-icon"> </span>
                                    <span className="toggler-icon"> </span>
                                </button>
                                <div className={isActive ? "navbar-collapse show" : "navbar-collapse"}>
                                    <ul id="nav" className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <a className="ud-menu-scroll" href="#about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="ud-menu-scroll" href="#timeline">Timeline</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="ud-menu-scroll" href="#awards">Awards</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="ud-menu-scroll" href="#sponsors">Sponsors</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="ud-menu-scroll" href="#gallery">Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="ud-menu-scroll" href="#faq">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="ud-menu-scroll" href="#contact">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-btn d-none d-sm-inline-block mx-3">
                                    {/*eslint-disable-next-line*/}
                                    <a className="ud-main-btn ud-white-btn"
                                       href="https://register.icsctf.cf/register"
                                       target="_blank" rel="prefetch">
                                        Register
                                    </a>
                                </div>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default NavBar
