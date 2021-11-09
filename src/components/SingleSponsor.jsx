import React from 'react';
import { Col } from 'react-bootstrap';

const SingleSponsor = ({ animation, sponsor_no, logo1, logo2, company, description,link }) => {
  return (
        <Col lg={4} md={6} xs={12} data-aos={animation}>
          <section className={sponsor_no}>
            <div className="header-section">
              {/* <div className="logo-section" >
                <img src={logo1} alt="Logo" />
                <img src={logo2} alt="Logo" />
              </div> */}

              <div className="logo11">  
                <img src={logo1} alt="Logo" />
              </div>

              {/* <div className="logo22">  
              <img src={logo2} alt="Logo" />
              </div> */}

              {/* <div className="company">  
                <h5>Company</h5>
              </div> */}

              <div className="company">
                <h5>{company}</h5>
              </div>
            </div>
            <p className="ud-content">
              <font>{description}</font>
            </p>
            {/* <iframe  src="https://www.youtube.com/embed/IbeH6orxo_4"></iframe> */}
            <iframe width="300" height="200" src={link}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            </section>
        </Col>
  );
};

export default SingleSponsor;
