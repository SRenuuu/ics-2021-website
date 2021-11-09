import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleSponsor from './SingleSponsor';

import company1 from '../pictures/sponsors/zincat logo.png';
import company2 from '../pictures/sponsors/CSW_logo.png';
import company3 from '../pictures/sponsors/Logo_TekSek.png';
import company4 from '../pictures/sponsors/JIT Logo - White.png';

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
                  
                  company = "Zincat"
                  description = "Zincat is a leading IT & software development company with over a decade of experience and providing solutions and value additions to our customers ensuring high customer satisfaction."
                  link = "https://www.youtube.com/embed/kRR0guEEwjY" />

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
              <Col lg={4} md={6} xs={12} data-aos="fade-left">
          <section className="ud-single-sponser fourth">
            <div className="header-section">
              <div className="logo11">  
                <img className="logoteksek" src={company3} alt="Logo" />
              </div>

              <div className="company">  
                <h5>TekSek Cyber Security</h5>
              </div>

            </div>
            <p className="ud-content">
              <font>"TekSek Cyber Security provides powerful service offerings to dramatically improve the effectiveness & efficiency of cyber security teams. They serve clients in the telecommunications, banking & technology sectors in partnership with Cyber Security Works, Securin, Zuggand & RiskSense (acquired by Ivanti)."</font>
            </p>
            {/* <iframe width="300" height="200" src="https://www.youtube.com/embed/gqhOH4jkpVI"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/> */}


            <div className="header-section">
              <div className="logo11">  
                <img className="logocsw" src={company2} alt="Logo" />
              </div>

              <div className="company">  
                <h5>Cyber Security Works</h5>
              </div>
               
            </div>
            <p className="ud-content">
              <font>"Founded in 2008, the CSW team now numbers over 150. Headquartered in Albuquerque, New Mexico, USA with offices in India, UAE & Singapore CSW serves 100+ active clients in North America, Middle East, South & Southeast Asia. CSW specializes in Vulnerability Management as a Service (VMaaS), Attack Surface Management (ASM) & PCI Compliance services. CSW is a US Department of Homeland Security sponsored CVE Numbering Authority (CNA) with over 50 zero-days to their name. CSW commenced engaging Sri Lankan clients in 2020 with support from their local partner, TekSek Cyber Security."</font>
            </p>
            </section>
        </Col>

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
                  
                  logo1 = {company4}
                  company = "Just In Time Group"
                  description = "Just In Time Group (JIT) is a leading ICT Systems and Solutions Integrator, of over 25 years, being a strategic front-runner of the concept of ‘Integrated Solutions’ in Sri Lanka’s ICT sector is mission. JIT has a strong focus in the areas of strategic agile ICT Solutions such as Systems Integration Services, Geographical Information systems-based Software Solutions, Information Security Solutions, Data Analytics, Infrastructure Solutions and IT Resource Outsourcing targeting – Banking, Telecommunications, Government, Defence and Enterprise sectors"
                  link = "https://www.youtube.com/embed/IbeH6orxo_4" />
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
