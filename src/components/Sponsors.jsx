import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import SingleSponsor from './SingleSponsor';
import SingleSponsorGroup from "./SingleSponsorGroup";

import zincat_logo from '../assets/images/sponsors/zincat-logo.png'
import teksek_logo from '../assets/images/sponsors/teksek-logo.png'
import csw_logo from '../assets/images/sponsors/csw-logo.png'
import jit_logo from '../assets/images/sponsors/jit-group-logo.png'
import zone24x7_logo from '../assets/images/sponsors/zone24x7-logo.png'

const Sponsors = () => {
    return (
        <section id="sponsors" className="ud-sponsors">
            <Container className="px-4 px-lg-2">
                <Row className="mt-0">
                    <Col xs={12}>
                        <div className="aw-sponsors-title" data-aos="zoom-in">
                            <h2 className="mx-auto text-center neonSt">Sponsors</h2>
                            <div className="text">
                                {/* <p>
                                Here are the our honorable sponsors.
                                </p> */}
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <h4 className="platinum-sponsor my-3 my-lg-4 py-1 py-lg-2" data-aos="flip-left">PLATINUM
                        SPONSOR</h4>

                    <SingleSponsor
                        animation="zoom-in"
                        sponsor_no="ud-single-sponsor platinum-border platinum-sponsor"
                        logo1={zincat_logo}
                        logo1alt="Zincat Logo"
                        logoStyles={{objectFit: "cover", width: "255px"}}
                        logo2={null}
                        logo2alt=""
                        company="Zincat"
                        description="Zincat is a leading IT & software development company with over a decade of experience and providing solutions and value additions to our customers ensuring high customer satisfaction."
                        link={null}/>

                    {/* <SingleSponsor
                  animation = "fade-left"
                  sponsor_no = "ud-single-sponsor third"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" /> */}
                </Row>

                <Row className="mt-2 pt-2 justify-content-center">
                    <h4 className="gold-sponsor my-3 my-lg-4 py-1 py-lg-2 pt-lg-3" data-aos="flip-left">GOLD
                        SPONSORS</h4>

                    <SingleSponsorGroup

                        animation="zoom-in"
                        sponsor_no="ud-single-sponsor gold-border"
                        logo1={teksek_logo}
                        logo1alt="Teksek Logo"
                        logoStyles={{objectFit: "contain", width: "230px", display: "inline-block", margin: "4px 10px"}}
                        logo2={csw_logo}
                        logo2alt="CSW Logo"
                        company1="Teksek Cyber Security"
                        company2="Cyber Security Works"
                        description1="TekSek Cyber Security provides powerful service offerings to dramatically improve the effectiveness & efficiency of cyber security teams. They serve clients in the telecommunications, banking & technology sectors in partnership with Cyber Security Works, Securin, Zuggand & RiskSense (acquired by Ivanti)."
                        description2="Founded in 2008, the CSW team now numbers over 150. Headquartered in Albuquerque, New Mexico, USA with offices in India, UAE & Singapore CSW serves 100+ active clients in North America, Middle East, South & Southeast Asia. CSW specializes in Vulnerability Management as a Service (VMaaS), Attack Surface Management (ASM) & PCI Compliance services. CSW is a US Department of Homeland Security sponsored CVE Numbering Authority (CNA) with over 50 zero-days to their name. CSW commenced engaging Sri Lankan clients in 2020 with support from their local partner, TekSek Cyber Security."
                        link={null}/>

                    <SingleSponsor

                        animation="zoom-in"
                        sponsor_no="ud-single-sponsor gold-border"
                        logo1={jit_logo}
                        logo1alt="Just In Time Group Logo"
                        logoStyles={{objectFit: "cover", width: "170px"}}
                        logo2={null}
                        logo2alt=""
                        company="Just In Time Group"
                        description="Just In Time Group (JIT) is a leading ICT Systems and Solutions Integrator, of over 25 years, being a strategic front-runner of the concept of ‘Integrated Solutions’ in Sri Lanka’s ICT sector is mission. JIT has a strong focus in the areas of strategic agile ICT Solutions such as Systems Integration Services, Geographical Information systems-based Software Solutions, Information Security Solutions, Data Analytics, Infrastructure Solutions and IT Resource Outsourcing targeting – Banking, Telecommunications, Government, Defence and Enterprise sectors."
                        link={"https://youtu.be/IbeH6orxo_4"}/>
                </Row>

                <Row className="mt-2 pt-2 justify-content-center">
                    <h4 className="silver-sponsor my-3 my-lg-4 py-1 py-lg-2 pt-lg-3" data-aos="flip-left">SILVER
                        SPONSOR</h4>

                    <SingleSponsor
                        animation="zoom-in"
                        sponsor_no="ud-single-sponsor silver-border silver-sponsor"
                        logo1={zone24x7_logo}
                        logo1alt="Zone24x7 Logo"
                        logoStyles={{objectFit: "contain", width: "240px"}}
                        logo2={null}
                        logo2alt=""
                        company="Zone24x7"
                        description="Zone24x7 is a digital transformation partner to a wide range of organizations from technology startups to Fortune 500 organizations. Headquartered in San Jose, California with the main technology center based in Colombo, Sri Lanka since 2004. The company is offering technology solutions with their expertise in Big Data & Data Science Engineering, Embedded Systems Engineering, Remote Monitoring & IoT, Cognitive Vision, and Robotics. Zone24x7 promotes a culture of customer-centric innovation, continuous learning, professionalism, caring for oneself and others, and integrity to create a diverse, inclusive, and thriving workplace for all its associates."
                        link={"https://youtu.be/Gc_voMe8qwA"}/>

                    {/* <SingleSponsor
                  animation = "fade-left"
                  sponsor_no = "ud-single-sponsor third"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" /> */}
                </Row>


                {/* <Row>
              <h3 className="silver-sponsor" data-aos="flip-left">SILVER SPONSOR</h3>
                <SingleSponsor 
                  animation = "fade-right"
                  sponsor_no = "ud-single-sponsor seventh"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" />

                <SingleSponsor 
                  animation = "zoom-in"
                  sponsor_no = "ud-single-sponsor eighth"
                  logo1 = {company1}
                  logo2 = {company2}
                  company = "ABC COMPANY"
                  description = "Developments in digital technologies, from advancement in data, robotics, 3D printing and artificial intelligence, is at the core of Sandvik."
                  link = "https://www.youtube.com/embed/gqhOH4jkpVI" />

                <SingleSponsor 
                  animation = "fade-left"
                  sponsor_no = "ud-single-sponsor ninth"
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
