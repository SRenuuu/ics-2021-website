import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <React.Fragment>
      <section id="contact" className="ud-contact">
        <Container>
          <Col xl={12} lg={12}>
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title">
                <h2 data-aos="zoom-in-up">Contact UCSC ISACA Student Group</h2>
              </div>
              <div className="ud-contact-info-wrapper">
                <Row>
                  <Col lg={6}>
                    <div className="ud-info-icon">
                      <i class="bi bi-geo-alt-fill" data-aos="fade-up"></i>
                      <h4 data-aos="fade-up">OUR LOCATION</h4>
                    </div>
                    <div className="ud-info-meta one" data-aos="fade-up">
                      <p>
                        UCSC ISACA Student Group, <br />
                        University of Colombo School of Computing, <br />
                        35, Reid Avenue, <br />
                        Colombo 07.
                      </p>
                    </div>
                    <br />
                  </Col>
                  <Col lg={6}>
                    <div className="map-wrapper">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.902976854159!2d79.85896421472043!3d6.90220549501267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing!5e0!3m2!1sen!2slk!4v1636031795046!5m2!1sen!2slk" className="map"></iframe>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="ud-info-icon">
                      <i className="bi bi-envelope-fill" data-aos="fade-up"></i>
                      <h4 data-aos="fade-up">CONTACT</h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <p>
                      <div className="ud-info-meta two" data-aos="fade-up">
                        <p>Name</p>
                        <p>Position, UCSC ISACA Student group</p>
                        <p>contact@yourdomain.com</p>
                      </div>
                    </p>
                    <br />
                    <p>
                      <div className="ud-info-meta two" data-aos="fade-up">
                        <p>Name</p>
                        <p>Position, UCSC ISACA Student group</p>
                        <p>contact@yourdomain.com</p>
                      </div>
                    </p>
                    <br />
                  </Col>
                  <Col>
                    <p>
                      <div className="ud-info-meta two" data-aos="fade-up">
                        <p>Name</p>
                        <p>Position, UCSC ISACA Student group</p>
                        <p>contact@yourdomain.com</p>
                      </div>
                    </p>
                    <br />
                    <p>
                      <div className="ud-info-meta two" data-aos="fade-up">
                        <p>Name</p>
                        <p>Position, UCSC ISACA Student group</p>
                        <p>contact@yourdomain.com</p>
                      </div>
                    </p>
                    <br />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
