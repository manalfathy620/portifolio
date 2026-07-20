import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h5 style={{marginBottom:"10px"}}>SAY HELLO</h5>
      <h2>Get In Touch</h2>
      <div
        style={{
          width: "100px",
          margin: "auto",
          height: "2px",
          background: "#c9f31d",
          marginBottom: "20px",
        }}
      ></div>
      <p>
        Open to freelance projects, internships, and full-time opportunities.
        Let's build something great together.
      </p>

    <div className="parent2">
  {/* Left Card */}
  <div className="item">
    <h3 style={{color:"#c9f31d"}}>Manal Fathi</h3>
    <p>
      Full-Stack Developer based in Egypt. I love building elegant,
      responsive web applications and am always open to new opportunities.
    </p>

    <div className="data">
      <div className="bottom">
        <div className="icon">
          <FaLocationDot style={{ color: "#c9f31d"}}/>
        </div>

        <div className="content">
          <h6>Location</h6>
          <h4>Fayoum, Egypt</h4>
        </div>
      </div>

      <div className="bottom">
        <div className="icon">
          <MdMarkEmailRead style={{ color: "#c9f31d" }}/>
        </div>

        <div className="content">
          <h6>Email</h6>
          <h4>manalfathy620@gmail.com</h4>
        </div>
      </div>

      <div className="bottom">
        <div className="icon">
          <MdDeveloperMode style={{ color: "#c9f31d" }}/>
        </div>

        <div className="content">
          <h6>Focus</h6>
          <h4>Front-End Development</h4>
        </div>
      </div>
    </div>
  </div>

  {/* Right Card */}
  <div className="item2">
    <form style={{ display: "flex", flexDirection: "column" }}>
      <div className="inputs">
        <input type="text" placeholder="First Name" />
        <input type="text" style={{border:"1px solid #8a8a8a"}} placeholder="Last Name" />
      </div>

      <div className="inputs2">
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone No. (Optional)" />
      </div>

      <textarea placeholder="Your Message"></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
  </div>

</div>

  
  );
}
