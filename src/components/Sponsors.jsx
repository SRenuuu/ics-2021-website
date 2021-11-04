import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleSponsor from './SingleSponsor';

import company1 from '../pictures/sponsors/1.jpg';
import company2 from '../pictures/sponsors/2.jpg';

const Sponsors = () => {
  return (
        <section id="sponsors" className="ud-sponsors">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="ud-section-title mx-auto text-center">
                  <h2 data-aos="zoom-in-down">SPONSORS</h2>
                  <div className="text">
                    {/* <p>
                      Here are the our honurable sponsors.
                    </p> */}
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <h3 className="platinum-sponsor" data-aos="flip-left">PLATINUM SPONSOR</h3>
                {/* <SingleSponsor 
                  animation = "fade-right"
                  sponsor_no = "ud-single-sponser first"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" /> */}

                <SingleSponsor 
                  animation = "zoom-in"
                  sponsor_no = "ud-single-sponser second"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" />

                {/* <SingleSponsor 
                  animation = "fade-left"
                  sponsor_no = "ud-single-sponser third"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" /> */}
            </Row>

            <Row>
              <h3 className="gold-sponsor" data-aos="flip-left">GOLD SPONSOR</h3>
                <SingleSponsor 
                  animation = "fade-right"
                  sponsor_no = "ud-single-sponser fourth"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" />

                {/* <SingleSponsor 
                  animation = "zoom-in"
                  sponsor_no = "ud-single-sponser fifth"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" /> */}

                <SingleSponsor 
                  animation = "fade-left"
                  sponsor_no = "ud-single-sponser sixth"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" />
            </Row>

            {/* <Row>
              <h3 className="silver-sponsor" data-aos="flip-left">SILVER SPONSOR</h3>
                <SingleSponsor 
                  animation = "fade-right"
                  sponsor_no = "ud-single-sponser seventh"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" />

                <SingleSponsor 
                  animation = "zoom-in"
                  sponsor_no = "ud-single-sponser eighth"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" />

                <SingleSponsor 
                  animation = "fade-left"
                  sponsor_no = "ud-single-sponser ninth"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" />
            </Row> */}

          </Container>
        </section>

  );
};

export default Sponsors;
