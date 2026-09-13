import React from 'react';
import "./Skills.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useInView } from "react-intersection-observer";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { id: 1, name: "HTML", value: 95,color:"#F97316" },
  { id: 2, name: "CSS", value: 90 ,color:"#3B82F6"},
  { id: 3, name: "JavaScript", value: 85 ,color:"#EAB308"},
  { id: 4, name: "React", value: 80,color:"#06B6D4" },
  { id: 5, name: "Redux", value: 75,color:"#8B5CF6" },
  { id: 6, name: "Tailwind", value: 90,color:"#10B981" },
];

export default function Skills() {
  const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});
  return (
    <div className='skills' id="skills" ref={ref}>
      <h5>Technical Expertise</h5>
      <h2>Front-End Skills</h2>
      <div style={{width:"100px",margin:"auto",height:"2px",background:"#c9f31d",marginBottom:"20px"}}></div>
      <p>The front-end technologies I use to build modern, responsive web experiences</p>
         <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={4}
      spaceBetween={10} 
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {skills.map((skill) => (
        <SwiperSlide key={skill.id}>
          <div className="skill-card">
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={inView ? skill.value : 0}
                text={inView ? `${skill.value}%`:"0%"}
                styles={buildStyles({
                  pathColor: `${skill.color}`,
                  textColor: "#fff",
                  trailColor: "#333",
                   pathTransitionDuration: 2,// مدة الحركة بالثواني
                })}
              />
            </div>

            <h3>{skill.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    </div>
  )
}
