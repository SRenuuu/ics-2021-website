import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MapComponent from './MapComponent';
import LazyLoad from 'react-lazyload';

const ContactUs = () => {

  return (
      <>
        <section id="contact" className="ud-contact">
          <Container className="px-sm-3 px-lg-4">
            <Row>
              <Col lg={12}>
                <div className="ud-section-title text-center mx-auto" data-aos="zoom-in">
                  <h2 className="neonSt">
                    Contact Us</h2>
                  <h5>UCSC ISACA Student Group</h5>
                  <br/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <article className="ud-contact-info-wrapper mt-2">
                  <Row className="mt-2 pt-2">
                    <Col lg={6}>
                      <div className="ud-info-icon">
                        <i className="bi bi-geo-alt-fill" data-aos="fade-up"/>
                        <h4 data-aos="fade-up">OUR LOCATION</h4>
                      </div>
                      <div className="ud-info-meta one" data-aos="fade-up">
                        <p>
                          UCSC ISACA Student Group, <br/>
                          University of Colombo School of Computing, <br/>
                          35, Reid Avenue, <br/>
                          Colombo 07.
                        </p>
                      </div>
                      <br/>
                    </Col>
                    <Col lg={6}>
                      <LazyLoad once>
                        <MapComponent/>
                      </LazyLoad>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="mt-5 mt-sm-4 mt-lg-3">
                      <div className="ud-info-icon">
                        <i className="bi bi-envelope-fill" data-aos="fade-up"/>
                        <h4 data-aos="fade-up">CONTACT</h4>
                      </div>
                    </Col>
                    <Col md={12}>
                      <Row>
                        <Col md={6}>
                          <p>
                            <div className="ud-info-meta two" data-aos="fade-up">
                              <p>General</p>
                              <p>UCSC ISACA Student Group</p>
                              <p>ucsc.isg@gmail.com</p>
                            </div>
                          </p>
                          <br/>
                        </Col>
                        <Col>
                          <p>
                            <div className="ud-info-meta two" data-aos="fade-up">
                              <p>Dinendra Bandara</p>
                              <p>Vice President, UCSC ISACA Student Group</p>
                              <p>dinendradb@gmail.com</p>
                            </div>
                          </p>
                          <br/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
      </>
  );
};

export default ContactUs;
