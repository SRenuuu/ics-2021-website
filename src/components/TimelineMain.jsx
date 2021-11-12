import React from 'react';
import Timeline2 from './Timeline2';
import Timeline1 from './Timeline1';
import Nav from 'react-bootstrap/Nav';
import {Col, Container, Row} from "react-bootstrap";

class Timeline extends React.Component {

    state = {
        div1Shown: true,
        div2Shown: false,
    }

    handleButtonClick() {
        this.setState({
            div1Shown: true,
            div2Shown: false,
        });
    }

    handleButtonClick2() {
        this.setState({
            div2shown: true,
            div1Shown: false,
        })
    }

    render() {
        return (
            <section className="head py-4 ud-timeline" id="timeline">
                <Container fluid="sm" className="px-3 px-md-4">
                    <Row className="mt-2 p-1">
                        <Col xs={12}>
                            <div data-aos="zoom-in">
                                <h2 className="mx-auto text-center my-3 p-3 pb-4 neonSt">Timeline</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-2 p-1">
                        <div className="head_title" data-aos="fade-up">
                            <Nav variant="pills" defaultActiveKey={1}>
                                <Nav.Item className="mx-lg-3" data-aos="zoom-in">
                                    <Nav.Link eventKey={1} onClick={() => this.handleButtonClick()}>
                                        <div className="containers" id="#target">
                                            <div className="group">
                                                <span className='bot' id="top"/>
                                                <div className="box">
                                                    <div className="item">DAY 1</div>
                                                </div>
                                                <span className='bot' id="bottom"/>
                                            </div>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="mx-2 mx-lg-3">
                                    <Nav.Link eventKey={2} onClick={() => this.handleButtonClick2()}>
                                        <div className="containers" data-aos="zoom-in">
                                            <div className="group">
                                                <span className='bot' id="top"/>
                                                <div className="box">
                                                    <div className="item">DAY 2</div>
                                                </div>
                                                <span className='bot' id="bottom"/>
                                            </div>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Row>
                    <Row className="px-md-3 px-lg-0">
                        <Col className="timeline p-3 mt-4 mb-4">
                            {
                                this.state.div1Shown ?
                                    (<Timeline1/>)
                                    : (<Timeline2/>)
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Timeline;


