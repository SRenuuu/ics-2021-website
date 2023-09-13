import {Col, Container, Row} from 'react-bootstrap';
import AwardCard from './AwardCard';

import firstPlacePic from '../assets/images/prizes/first-place.webp'
import secondPlacePic from '../assets/images/prizes/second-place.webp'
import thirdPlacePic from '../assets/images/prizes/third-place.webp'

const Awards = () => {
    return (
        <section id="awards" className="ud-awards aw-dark-back">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="aw-awards-title mx-auto text-center neonSt" data-aos="zoom-in">
                            <h2>Awards</h2>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center justify-content-center">

                    <AwardCard order="order-2 order-lg-1"
                               place="Second place"
                               type="ud-single-awards first-item"
                               image={secondPlacePic}
                               altText="Silver trophy"
                               prize="Rs.35,000"
                               pColor="#CBD5DB"
                               anim="fade-right"/>

                    <AwardCard order="order-1 order-lg-2"
                               place="First place"
                               type="ud-single-awards active"
                               image={firstPlacePic}
                               altText="Gold trophy"
                               prize="Rs.50,000"
                               pColor="#F9CA1A"
                               anim="fade-up"/>

                    <AwardCard order="order-3 order-lg-3"
                               place="Third place"
                               type="ud-single-awards last-item"
                               image={thirdPlacePic}
                               altText="Bronze trophy"
                               prize="Rs.25,000"
                               pColor="#E28957"
                               anim="fade-left"
                    />
                </Row>
                {/*<Row>*/}
                {/*    <Col lg={7} className="m-auto">*/}
                {/*        <h4 className="text-center aw-consolation effectHv">*/}
                {/*            Consolation awards for other participants*/}
                {/*        </h4>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Container>
        </section>
    );
}

export default Awards
