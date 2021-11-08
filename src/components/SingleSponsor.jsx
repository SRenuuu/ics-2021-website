import React from 'react';
import {Col} from 'react-bootstrap';
import ReactPlayer from "react-player/lazy";

const SingleSponsor = ({animation, sponsor_no, logo1, logo2, company, description, link}) => {
    return (
        <Col lg={4} md={6} xs={12} data-aos={animation} className="my-2 my-lg-0 px-3 px-md-2 px-lg-3">
            <section className={sponsor_no}>
                <div className="header-section px-2">
                    <div className="logo-section px-1 py-1 my-auto">
                        <img src={logo1} alt="Logo1"/>
                        <img src={logo2} alt="Logo2"/>
                    </div>
                    <div className="company-name mx-3 px-2 my-auto pt-2 pt-md-0">
                        <h5>{company}</h5>
                    </div>
                </div>
                <p className="ud-content py-3 px-3 mb-1">
                    {description}
                </p>

                {/*<iframe src={link}*/}
                {/*        title="YouTube video player" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*        allowFullScreen/>*/}

                <ReactPlayer light controls url={link} width="88%" height="220px" style={{margin: "auto"}}/>
            </section>
        </Col>
    );
};

export default SingleSponsor;
