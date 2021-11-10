import React from 'react';
import Timeline2 from './Timeline2';
import Timeline1 from './Timeline1';
import '../assets/scss/_timeline.scss';
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
            <section className="head py-5" id="timeline" style={{background: 'black'}}>
                <Container>
                    <Row>
                        <Col xs={12} data-aos="zoom-in" data-aos-once="true">
                            <h2 className="mx-auto text-center my-3 p-3">Timeline</h2>
                        </Col>
                    </Row>
                    <Row>
                        <div className="head_title">
                            <Nav variant="pills" defaultActiveKey={1}>
                                <Nav.Item>
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

                                <Nav.Item>
                                    <Nav.Link eventKey={2} onClick={() => this.handleButtonClick2()}>
                                        <div className="containers">
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
                    <Row>
                        <Col className="timeline">
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


