import React from "react";
import "./Home.css";
import "../App.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="home"  id="home">
      <div className="part1">
        <ul>
          <li>• Available for opportunities</li>
        </ul>
        <h2>Hi! I'm <span>Manal</span> Fathi</h2>
        <h3>
          <TypeAnimation
            sequence={[
              "Front-End Developer",
              1000,
              "React Engineer",
              1000,
              "Full-Stack Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h3>
      
        <p>
          Crafting beautiful, responsive web applications with modern front-end
          technologies. Passionate about clean code, elegant UI, and delightful
          user experiences.
        </p>
        <div className="btns">
          <button>View My Projects</button>
          <button>Get In Touch</button>
        </div>
      </div>

      <div className="part2" style={{ borderRadius: "10px" }}>
        <img
          src="/images/carbon.png"
          alt=""
          style={{ width: "400px", height: "450px", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}
