import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdStar } from "react-icons/md"

const Experience = ({ experiences = [] }) => {
  return (
    <VerticalTimeline >
      {experiences.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(108deg, rgba(2, 0, 36, 1) 0%, rgba(9, 121, 118, 0.6758053563222164) 67%, rgba(0, 212, 255, 1) 100%)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={item.date.toString().split("T")[0]}
          iconStyle={{ boxShadow: 'inset 0 0 50px #fff,inset 20px 0 80px #0ff,inset -20px 0 80px #0ff,inset 20px 0 300px #0ff, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #0ff, 10px 0 80px #0ff', color: '#fff' }}
          icon={<MdWork />}
        >
          {item.image ? <img width="200" height="90" style={{ float: "right" }} src={item.image.url} alt="" /> : <img src="" alt="" />}

          <h3 className="vertical-timeline-element-title">{item.job}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>

          <p style={{ whiteSpace: 'pre-line' }}>
            {item.description.split("*")
              .map((item, i) => `* ${item}\n`)}</p>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={{ boxShadow: 'inset 0 0 50px #fff,inset 20px 0 80px #0ff,inset -20px 0 80px #0ff,inset 20px 0 300px #0ff, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #0ff, 10px 0 80px #0ff', color: '#fff' }}
        icon={<MdStar />}
      />

    </VerticalTimeline>
  );
}

export default Experience;
