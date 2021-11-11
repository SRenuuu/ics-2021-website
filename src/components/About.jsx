import React, {Col, Container, Row} from 'react-bootstrap';
import '../assets/scss/_about.scss';

const About = () => {

    return (
        <section id="about" className="ud-about pt-1 pt-lg-0 pb-4 my-5">
            <Container>
                <Row>
                    <Col xs={12} data-aos="zoom-in">
                        <h2 className="mx-auto text-center my-3 p-3">What is iCS Hack The World?</h2>
                    </Col>
                    <Col xs={12}>
                        <h4 className="text-center m-2 mt-3 text-light" data-aos="zoom-in-up">
                            iCS Hack the World is a 24-hour Capture the Flag competition that will put your hacking
                            skills
                            to the ultimate test!
                        </h4>
                    </Col>
                </Row>

                <Row className="my-4 py-2 pb-3">
                    <Col xs={12}>
                        <div className="aw-about card animated fadeInDown py-2">
                            <div className="card-group">
                                <div className="card mb-4 border-0">
                                    <div className="card-body">
                                        <div data-aos="fade-right">
                                            <h3 className="card-title">Who is it for?</h3>
                                            <p className="card-text">Undergraduates from both state universities and
                                                private
                                                higher education institutes in Sri Lanka.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4 border-0">
                                    <div className="card-body">
                                        <div data-aos="fade-right">
                                            <h3 className="card-title">When is it?</h3>
                                            <p className="card-text">On the 16th January 2021 from 8 am onwards.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4 border-0">
                                    <div className="card-body">
                                        <div data-aos="fade-right">
                                            <h3 className="card-title">Can I bring backup?</h3>
                                            <p className="card-text">It is for teams of 4 so you'd better.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-group">
                                <div className="card mb-4 border-0">
                                    <div className="card-body">
                                        <div data-aos="fade-right">
                                            <h3 className="card-title">Where will it take place?</h3>
                                            <p className="card-text">Ever heard of Facebook CTF platform?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4 border-0">
                                    <div className="card-body">
                                        <div data-aos="fade-right">
                                            <h3 className="card-title">No experience?</h3>
                                            <p className="card-text">We'll lend a hand. Join the sessions conducted by
                                                our
                                                sponsors on the 9th January 2021 via the online stream. But that's all
                                                the
                                                help you're gonna get from our end!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4 border-0">
                                    <div className="card-body">
                                        <div data-aos="fade-right">
                                            <h3 className="card-title">Will we win anything?</h3>
                                            <p className="card-text">Of course! Loads of gifts coming your way</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h4 data-aos="fade-up m-3 my-4 pb-3">
                            So put together a team, have a little pep talk, and get ready to start hacking!
                        </h4>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default About
