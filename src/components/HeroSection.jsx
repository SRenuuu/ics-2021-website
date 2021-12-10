import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo from "../assets/images/ics-2.0-logo.webp"
import ReactRotatingText from "react-rotating-text/lib/ReactRotatingText";

const HeroSection = () => {
    return (
        <section id="home" className="ud-hero">
            <Container>
                <Row>
                    <Col lg={12} className="mb-5 pb-4">
                        <div className="ud-hero-content m-auto">
                            <div className="" data-aos="fade-down">
                                <img src={logo} alt="ISG Logo"
                                     className="mb-3 mb-md-2 mb-lg-1 mb-xxl-2 p-0 ud-hero-logo"/>
                            </div>
                            <h1 className="ud-hero-title my-3 mb-4 mb-lg-2 glitch" data-text="iCS - Hack The World 2.0"
                                data-aos="fade-down">
                                iCS - Hack The World 2.0
                            </h1>
                            <h3 className="ud-hero-subtitle pt-1 pb-lg-1 my-3 my-md-2 mb-xxl-3 px-4" data-aos="fade-up">
                                <ReactRotatingText
                                    items={['24-hour Capture The Flag (CTF) Competition', 'Organized by ISACA Student Group of UCSC']}/>
                            </h3>
                            <p className="ud-hero-desc mt-4 mt-lg-2 mt-xxl-4 pt-4 pb-3" data-aos="fade-up">
                                <i>Registration is now closed</i>
                                <br/>
                                <span
                                    className="desc-text-special mt-2 mt-xxl-3 mb-2 p-2">Get ready for the Final Competition!</span>
                            </p>
                            <div className="ud-hero-buttons my-2 mt-4 mt-sm-3 mt-lg-3 mt-xxl-4" data-aos="fade-up">
                                {/*<a href="/" rel="nofollow noopener" target="_blank"*/}
                                {/*   className="ud-main-btn ud-white-btn mx-3">*/}
                                {/*  Register Now*/}
                                {/*</a>*/}

                                {/*<FlipCountdown*/}
                                {/*    theme="dark"*/}
                                {/*    hideYear*/}
                                {/*    hideMonth*/}
                                {/*    endAtZero*/}
                                {/*    titlePosition="bottom"*/}
                                {/*    dayTitle='Days'*/}
                                {/*    hourTitle='Hours'*/}
                                {/*    minuteTitle='Minutes'*/}
                                {/*    secondTitle='Seconds'*/}
                                {/*    endAt={"2021-11-23 00:00:00"} // Date/Time*/}
                                {/*    data-aos="fade-up"*/}
                                {/*/>*/}

                            </div>
                        </div>
                        {/*<div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">*/}
                        {/*                <img src="assets/images/hero/hero-image.svg" alt="hero-image" />*/}
                        {/*                <img*/}
                        {/*                  src="assets/images/hero/dotted-shape.svg"*/}
                        {/*                  alt="shape"*/}
                        {/*                  class="shape shape-1"*/}
                        {/*                />*/}
                        {/*                <img*/}
                        {/*                  src="assets/images/hero/dotted-shape.svg"*/}
                        {/*                  alt="shape"*/}
                        {/*                  class="shape shape-2"*/}
                        {/*                />*/}
                        {/*</div>*/}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
