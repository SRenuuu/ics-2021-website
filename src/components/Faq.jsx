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
                            <div className="ud-section-title text-center mx-auto">
                                <h5>Any Questions? Answered</h5>
                                <h2 data-aos="zoom-in-up">
                                    Frequently Asked Questions</h2>
                                <br/>
                            </div>
                        </Col>
                    </Row>
                    <Accordion defaultActiveKey="0">
                        <Row className="my-2">
                            <Col lg={6}>
                                <FaqComponent
                                    question="Question 01"
                                    collapseId="collapseOne"
                                    answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />

                                <FaqComponent
                                    question="Question 02"
                                    collapseId="collapseTwo"
                                    answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />

                                <FaqComponent
                                    question="Question 03"
                                    collapseId="collapseThree"
                                    answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />
                            </Col>

                            <Col lg={6}>
                                <FaqComponent
                                    question="Question 04"
                                    collapseId="collapseFour"
                                    answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />

                                <FaqComponent
                                    question="Question 05"
                                    collapseId="collapseFive"
                                    answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />

                                <FaqComponent
                                    question="Question 06"
                                    collapseId="collapseSix"
                                    answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
