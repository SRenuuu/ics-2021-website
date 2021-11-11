import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline2 = () => {

    return (
        <div className="timeline2">
            <div className="vertical">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        iconStyle={{background: '#ff6600', color: '#fff'}}
                        icon={<i className="bi bi-x-diamond-fill"/>}
                    />
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"

                        date="08.30 AM"
                        iconStyle={{background: '#ff6600', color: '#fff'}}
                        icon={<i className="bi-alarm"/>}

                    >
                        <h5 className="vertical-timeline-element-title">Opening ceremony</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="08.45 AM"
                        iconStyle={{background: '#ff6600', color: '#fff'}}
                        icon={<i className="bi bi-table"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Address by representative from platinum
                            partner</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="09.00 AM"
                        iconStyle={{background: '#ff6600', color: '#fff'}}
                        icon={<i className="bi bi-layers-half"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Address by representative from gold partner</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="09.30 AM"
                        iconStyle={{background: '#ff6600', color: '#fff'}}
                        icon={<i className="bi bi-stickies"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Event commencement</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="11.30 AM"
                        iconStyle={{background: '#ff6600', color: '#fff'}}
                        icon={<i className="bi bi-check-square"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Leader-board peek</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="03.30 PM"
                        iconStyle={{background: '#ff6600', color: '#fff'}}

                        icon={<i className="bi bi-card-checklist"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Leader-board peek</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="05.30 PM"
                        iconStyle={{background: '#ff6600', color: '#fff'}}
                        icon={<i className="bi bi-front"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Event closes</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="06.00 PM"
                        iconStyle={{background: '#ff6600', color: '#fff'}}
                        icon={<i className="bi bi-award-fill"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Announce winners</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{background: '#ff6600', color: '#fff'}}
                        icon={<i className="bi bi-snow"/>}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );

}
export default Timeline2;
