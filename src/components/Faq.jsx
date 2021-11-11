import React from "react";
import {Accordion, Col, Container, Row} from 'react-bootstrap';
import FaqComponent from "./FaqComponent";

const Faq = () => {
    return (
        <>
            <section id="faq" className="ud-faq">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="ud-section-title text-center mx-auto" data-aos="zoom-in">
                                <h5>Any Questions? Answered</h5>
                                <h2>
                                    Frequently Asked Questions</h2>
                                <br/>
                            </div>
                        </Col>
                    </Row>
                    <Accordion defaultActiveKey="0">
                        <Row className="my-2">
                            <Col lg={6}>
                                <FaqComponent
                                    question="What is a CTF?"
                                    collapseId="collapseOne"
                                    answer="CTF (Capture The Flag) is a kind of information security competition that challenges contestants to solve a variety of tasks ranging from a scavenger hunt on wikipedia to basic programming exercises, to hacking your way into a server to steal data."
                                />

                                <FaqComponent
                                    question="How to register for iCS 2.0?"
                                    collapseId="collapseTwo"
                                    answer="You can register through this site (check upper right corner for the register button). There we will ask for the details of your team members and a small initial CTF will be there to test your skills."
                                />
                            </Col>

                            <Col lg={6}>
                                <FaqComponent
                                    question="Who can participate in iCS 2.0?"
                                    collapseId="collapseThree"
                                    answer="Undergraduates can participate in iCS 2.0 as teams. A team has to be no more than 4 members and no less than 3 members."
                                />

                                <FaqComponent
                                    question="Is iCS 2.0 a physical event?"
                                    collapseId="collapseFour"
                                    answer="No it is not a physical event and the event will be happening virtually due to the pandemic."
                                />
                            </Col>
                        </Row>
                    </Accordion>
                </Container>
            </section>
        </>
    );
};

export default Faq;
