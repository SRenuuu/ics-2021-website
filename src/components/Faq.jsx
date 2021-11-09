import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import FaqComponent from "./FaqComponent";

const Faq = () => {
    return (
        <React.Fragment>
            <section id="faq" className="ud-faq">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="ud-section-title text-center mx-auto">
                                <span>Any Questions? Answered</span>
                                <h2 data-aos="zoom-in-up">
                                    Frequently Asked Questions</h2>
                                <br/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <FaqComponent 
                                target = "#collapseOne"
                                question = "What is a CTF?"
                                collapseid = "collapseOne"
                                answer = "CTF (Capture The Flag) is a kind of information security competition that challenges contestants to solve a variety of tasks ranging from a scavenger hunt on wikipedia to basic programming exercises, to hacking your way into a server to steal data."
                            />

                            <FaqComponent 
                                target = "#collapseThree"
                                question = "Who can participate in iCS 2.0?"
                                collapseid = "collapseThree"
                                answer = "Undergraduates can participate in iCS 2.0 as teams. A team has to be no more than 4 members and no less than 3 members."
                            />
                        </Col>

                        <Col lg={6}>
                            <FaqComponent 
                                target = "#collapseTwo"
                                question = "How to register to iCS 2.0?"
                                collapseid = "collapseTwo"
                                answer = "You can register through this site (check upper right corner for the register button). There we will ask for the details of your team members and a small initial CTF will be there to test your skills."
                            />

                            <FaqComponent 
                                target = "#collapseFive"
                                question = "Is iCS 2.0 a physical event?"
                                collapseid = "collapseFive"
                                answer =  {<p>No it is a <b>not</b> physical event and the event will be happening <b>virtually</b> due to the pandemic.</p>}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Faq;

