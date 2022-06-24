import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdStar } from "react-icons/md"
import './TimeLine.css'
const TimeLine = ({ timelines = [] }) => {
    return (
        <div>
            <VerticalTimeline >
                {timelines.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'linear-gradient(108deg, rgba(2, 0, 36, 1) 0%, rgba(9, 121, 118, 0.6758053563222164) 67%, rgba(0, 212, 255, 1) 100%)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0,178,178)' }}
                        date={item.date.toString().split("T")[0]}
                        dateClassName="vertical-timeline-element-title"
                        iconStyle={{ boxShadow: 'inset 0 0 50px #fff,inset 20px 0 80px #0ff,inset -20px 0 80px #0ff,inset 20px 0 300px #0ff, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #0ff, 10px 0 80px #0ff', color: '#fff' }}
                        icon={<MdSchool />}
                    >

                        <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                        <p>
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement
                    iconStyle={{boxShadow: 'inset 0 0 50px #fff,inset 20px 0 80px #0ff,inset -20px 0 80px #0ff,inset 20px 0 300px #0ff, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #0ff, 10px 0 80px #0ff', color: '#fff'  }}
                    icon={<MdStar />}
                />

            </VerticalTimeline>
        </div>
    );
};

export default TimeLine;
