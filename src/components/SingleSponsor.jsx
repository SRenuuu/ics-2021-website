import React from 'react';
import {Col} from 'react-bootstrap';
import ReactPlayer from "react-player/lazy";

const SingleSponsor = ({
                           animation,
                           sponsor_no,
                           logo1,
                           logo1Alt,
                           logoStyles,
                           logo2,
                           logo2Alt,
                           company,
                           description,
                           link,
                       }) => {
    return (
        <Col lg={4} md={6} xs={12} data-aos={animation} className="my-2 my-lg-0 px-3 px-md-2 px-lg-2 px-xl-2">
            <section className={sponsor_no}>
                <div className="header-section px-3">
                    <div className="logo-section px-1 m-auto pt-1 pb-2 m-2">
                        <img src={logo1} alt={logo1Alt} style={logoStyles}/>
                        {logo2 && <img src={logo2} alt={logo2Alt}/>}
                    </div>
                    <div className="company-name mx-3 px-3 my-auto pb-2 pt-2">
                        <h5>{company}</h5>
                    </div>
                </div>
                <p className="ud-content py-3 px-3 mb-1 mx-2">
                    {description}
                </p>

                {/*<iframe src={link}*/}
                {/*        title="YouTube video player" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*        allowFullScreen/>*/}

                {link && <ReactPlayer light controls url={link} width="86%" height="220px"
                                      style={{margin: "auto auto 15px auto"}}/>}
            </section>
        </Col>
    );
};

export default SingleSponsor;
