import React, { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [tab, settab] = useState("Allprojects");

  return (
    <div className="projects" id="projects">
      <h5>My Work</h5>
      <h2>Featured Projects</h2>
      <div
        style={{
          width: "100px",
          margin: "auto",
          height: "2px",
          background: "#c9f31d",
          marginBottom: "20px",
        }}
      ></div>
      <p className="par1">
        Real-world applications built with modern technologies and best
        practices.
      </p>
      <button
        className="rounded all"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <button
          style={{ border: "none", outline: "none" }}
          className={`btn btnn ${tab === "Allprojects" ? "active" : ""}`}
          onClick={() => settab("Allprojects")}
        >
          Allprojects
        </button>
        <button
          style={{ border: "none", outline: "none" }}
          className={`btn btnn ${tab === "Jsapps" ? "active" : ""}`}
          onClick={() => settab("Jsapps")}
        >
          JsApps
        </button>
        <button
          style={{ border: "none", outline: "none" }}
          className={`btn ${tab === "Portfolio" ? "active" : ""}`}
          onClick={() => settab("Portfolio")}
        >
          Portfolio
        </button>
      </button>

      {tab === "Allprojects" && (
        <div
          className="parent"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div className="item">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/html1.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://manalfathy620.github.io/p-perfume/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Perfume Haven – Fragrance Store</h2>
              <p>
              
An elegant perfume e-commerce platform featuring luxury fragrances, curated collections, secure shopping, customer reviews, and a seamless online shopping.
              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Css</button>
                {/* <button>Js</button> */}
              </div>
            </div>
          </div>

          <div className="item">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/html5.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://manalfathy620.github.io/coffee1/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Coffee House – Café Website</h2>
              <p>
              
A modern coffee shop website featuring handcrafted beverages, delicious desserts, an interactive menu, online reservations, and a warm, inviting user experience.
              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Css</button>
                <button>Html5</button>
                  <button>Css3</button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/shoess.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://manalfathy620.github.io/shoess/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Sneaker Hub – Footwear Store</h2>
              <p>
                
A modern footwear e-commerce platform featuring trendy sneakers, casual and formal shoes, detailed product pages, secure shopping, and a seamless user experience.
              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Css</button>
                <button>Js</button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/tailwind3.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://manalfathy620.github.io/tailwindproject/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Digital Success – Marketing Agency</h2>
              <p>
                
A modern digital marketing platform helping businesses grow through creative branding, web solutions, SEO, social media marketing, and data-driven strategies.
              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Html5</button>
                <button>Tailwind</button>
                {/* <button>Js</button> */}
              </div>
            </div>
          </div>

          <div className="item">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/js-flor.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://stupendous-hamster-516722.netlify.app/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Flower Boutique – Floral Store</h2>
              <p>
              
A modern flower e-commerce platform offering fresh bouquets, gift collections, personalized arrangements, and a seamless online shopping experience.
              </p>
              <div className="allbtn">
                <button>Html</button>
              
                <button>Html5</button>
              
                <button>Tailwind</button>
                <button>Js</button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/port.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://github.com/manalfathy620/portifolio", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Personal Portfolio – Developer Website</h2>
              <p>
              
A modern portfolio website showcasing professional projects, technical skills, work experience, and contact information with a clean, responsive design.

              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Html5</button>
                <button>Css</button>
                  <button>Css3</button>
                <button>Js</button>
                <button>React</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "Jsapps" && (
        <div className="web"
          style={{
            display: "flex",
          
            gap: "10px",
            flexWrap:"wrap"
            
          }} 
        >

                     <div className="item it1">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/adan.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://admirable-shortbread-bf47bc.netlify.app/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Prayer Times App</h2>
              <p>
              
 An interactive application that displays accurate daily prayer times based on the user's location. It offers a clean, responsive interface with multilingual support and an easy-to-use experience.
              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Css</button>
                  <button>Js</button>
                
              </div>
            </div>
          </div>


          {/* /// */}

           <div className="item it1">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/weather2.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://heroic-brigadeiros-112f33.netlify.app/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Weather App</h2>
              <p>
              
 A modern weather application that displays real-time weather information, hourly and daily forecasts, supports multiple languages, dynamic themes, and location-based weather updates with a responsive and intuitive user interface.
              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Css</button>
                  <button>Js</button>
                
              </div>
            </div>
          </div>


          {/*  */}
          <div className="item it1">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/todo.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open(" https://manalfathy620.github.io/p-todo/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Task Manager – To-Do List App</h2>
              <p>
              
An interactive task management application featuring task creation, editing, completion tracking, priority organization, and a clean, user-friendly interface.
              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Css</button>
                  <button>Js</button>
                
              </div>
            </div>
          </div>

          <div className="item it1">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/jss.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://manalfathy620.github.io/cruds/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Product Management – CRUD Application</h2>
              <p>
              
An interactive CRUD application for managing products with create, read, update, and delete functionality, advanced search, and a clean, user-friendly interface.
              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Html5</button>
                <button>Css</button>
                <button>Css3</button>
                <button>Js</button>
              
              </div>
            </div>
          </div>

          {/* /////////// */}
          {/* <div className="item">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/calc.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://manalfathy620.github.io/calculator/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Simple Calculator – Math Tool</h2>
              <p>
                
A responsive calculator application with a clean design, supporting basic arithmetic operations, real-time calculations, error handling, and an intuitive user experience
              
    </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Html5</button>
                <button>Css</button>
                <button>Css3</button>
                <button>Js</button>
              
              </div>
            </div>
          </div> */}

          {/* ////////////// */}

          <div className="item it1">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/upload.png"></img>
              <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://manalfathy620.github.io/p-filterimage/", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Image Filter – Gallery Application</h2>
              <p>
              
An interactive image gallery featuring dynamic filtering, category-based browsing, responsive layouts, and a smooth, user-friendly experience.
              </p>
              <div className="allbtn">
                <button>Html</button>
                <button>Css</button>
                <button>Js</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "Portfolio" && (
        <div className="port" style={{ display: "flex", justifyContent: "left", gap: "10px" }}>
          <div className="item it2">
            <div className="img" style={{ position: "relative" }}>
              <img src="/images/port.png"></img>
                <button
                className="btn-image"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                Completed
              </button>

              <button
                className="btn-image2"
                onClick={() => window.open("https://github.com/manalfathy620/portifolio", "_blank")}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid #c9f31d",
                  color: "wheat",
                }}
              >
                View Project
              </button>
            </div>
            <div className="content">
              <h2 style={{fontSize:"18px"}}>Personal Portfolio – Developer Website</h2>
              <p>
                A modern portfolio website showcasing professional projects, technical skills, work experience, and contact information with a clean, responsive design.
              </p>
              <div className="allbtn">
                <button>Html</button>
                  <button>Html5</button>
                <button>Css</button>
                  <button>Css3</button>
                <button>Js</button>
                  <button>React</button>
              </div>
            </div>
          </div>

          
        </div>
      )}
    </div>
  );
}
