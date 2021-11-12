import {Col} from 'react-bootstrap';

const AwardCard = ({place, prize, image, altText, type, pcolor, anim}) => {
    return (
        <Col lg={4} md={6} sm={10} data-aos={anim}>
            <div className={type}>
                <span className="ud-awards-header">
                    <h3 className="aw-card-header h3">
                        {place}
                    </h3>
                </span>
                <div className="ud-awards-body">
                    <img className="aw-img borders" src={image} alt={altText}/>
                    {/* This div is for image */}
                </div>
                <h4 className="aw-prize h4" style={{color: pcolor,}}>
                    {prize}
                </h4>
            </div>
        </Col>
    )
}

export default AwardCard;
