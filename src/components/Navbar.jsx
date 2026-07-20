import React, { useState } from "react";
import "./Navbar.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import '../App.css';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
 
export default function Navbar() {
  const [showmenu,setshowmenu] = useState(false)
  const navigate = useNavigate()
  return (
    <header className={"navbar"}>
      <div className="logo">
        <img src="/images/logo_icon.png"></img>
        <h2>Portfolio</h2>
      </div>

      <FaBars className="hum" onClick={()=>setshowmenu(!showmenu)} />
      
      <ul className={`mobile-menu ${showmenu ? "show" : ""}`}>
    <li className="k1"><a href="#home">Home</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li className="k1"><a href="#contact">Contact</a></li>
  </ul>

    
      <nav>
        <ul className="nav1" >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="nav2">
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/manal.fathy.756"  target="_blank">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a href="https://github.com/manalfathy620"  target="_blank">
              <FaGithubSquare />
            </a>
          </li>
            <li className="divlink">
        <a className="link" style={{cursor:"pointer" ,textDecoration:"none"}} href="#contact">Let's Contact</a>
      </li>
        </ul>
      
      </nav>
  
    </header>
  );
}


