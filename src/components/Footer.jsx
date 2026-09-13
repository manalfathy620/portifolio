import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="foot">
      <div className="footer1">
        <div className="f1">
          <h2>Stay Updated</h2>
          <p style={{color:"#8a8a8a"}}>Subscribe to see my latest projects & articles.</p>
        </div>

        <div className="ff1">
          <input type="text" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer2">
        <div className="f2">
          <div className="logof" >
            <img src="/images/logo_icon.png" style={{width:"30px",height:"30px"}}></img>
            <h2>Portfolio</h2>
          </div>

          <p>Full-Stack Developer building beautiful, responsive web experiences with modern front-end technologies.</p>
          <nav>

            <ul className="nav2">
                    <li className="qq" style={{border:"1px solid #c9f31d",width:"40px",height:"40px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <a href="">
                        <FaLinkedin className="q" />
                      </a>
                    </li>
                    <li className="qq" style={{border:"1px solid #c9f31d",width:"40px",height:"40px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <a href="https://www.facebook.com/manal.fathy.756"  target="_blank">
                        <FaFacebookSquare className="q" />
                      </a>
                    </li>
                    <li className="qq" style={{border:"1px solid #c9f31d",width:"40px",height:"40px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <a href="">
                        <FaInstagramSquare className="q" />
                      </a>
                    </li>
                    <li className="qq" style={{border:"1px solid #c9f31d",width:"40px",height:"40px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <a href="https://github.com/manalfathy620"  target="_blank">
                      <FaGithubSquare className="q" />
                      </a>
                    </li>
                    
                  </ul>
                
                </nav>

        </div>
        <div className="ff2">
          <h2>Navigation</h2>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="fff2">
          <h2>What I Do</h2>
          <ul>
            <li>Front-End Development</li>
            <li>Responsive Web Design</li>
            <li>React & Tailwind Projects</li>
            <li>Component Architecture</li>
          </ul>
        </div>
      </div>

      <div className="footer3">
        <p style={{fontSize:"13px",color:"#8a8a8a"}}>© 2026 Manal Fathi <FaHeart className="heart"/> - All Rights Reserved</p>
      </div>
    </div>
  );
}
