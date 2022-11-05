import React from "react";
import "./Project.css";
import Image from "./img/proj1.png";
import Img from "./img/proj2.png";
import Pinterst from "./img/Pinterest.png"
import Indianfood from "./img/food.png"




export default function Projects() {
  return (
    <div id="projects">
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-section">
          <div className="center">

            <div className="one">
              <img src={Pinterst} alt="Pinterest" />
              <h2>Developed a clone of Pinterst website</h2>
              <p>
                About
                This project is a clone of (pinterst.com). The Pinterest is a photo and video sharing website.
              </p>
              <p>
                Along with 3 other members, build the application in 6 days. each individual page was assigned by individual person. websites which we includes Landing page with Login with OAuth, Homae page , Pins page, Create Pin page & User profile Page.
              </p>
              <p>Teck-Stack: React | Redux | Java Script | CSS | Styled Component | Material UI | Node
                | Express
                | MongoDB
                | Mongoose</p>

              <a
                href="https://pinterestclone1.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn1">Demo</button>
              </a>
              <a
                href="https://github.com/venkycoder422/pinterest-clone.git"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn1">GitHub Link</button>
              </a>
            </div>

            <div className="one">
              <img src={Indianfood} alt="Indianfood" />
              <h2>Developed a Indian food website</h2>
              <p>
                About
                This website shares the ideas about recipes, cooking
techniques and tools requirements for preparing recipes.
              </p>
              {/* <p>
              
              </p> */}
              <p>
                I build this website in span of 7 days, I build Home page with login form without login user not able to acces recipes and single recipe page with detailed information about recipes.
              </p>
              <p>
                Teck-Stack: CSS | Java Script | JSON | React | Redux
              </p>

              <a
                href="https://indianfood.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/venkycoder422/Indian-food.git"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub Link</button>
              </a>
            </div>

            <div className="one">
              <img src={Image} alt="project" />
              <h2>Developed a clone of Bewakoof website</h2>
              <p>
                About
                This project is a clone of (Bewakoof.com). Bewakoof is an Online Shopping site for Men and Women Clothing. Shop from a wide range of T-shirts, Mobile Covers, Accessories and more at the best prices.
              </p>
              <p>
                Along with 3 other members, build the application in 6 days. each individual page was assigned by individual person. websites which we includes Home page, Clothing page , Cart page & Authentication Page.
              </p>
              <p>Teck-Stack: HTML | CSS | Java Script</p>

              <a
                href="https://venkycoder422.github.io/bewakoof.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn1">Demo</button>
              </a>
              <a
                href="https://github.com/venkycoder422/bewakoof.github.io "
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn1">GitHub Link</button>
              </a>
            </div>

            <div className="one">
              <img src={Img} alt="project" />
              <h2>Developed a clone of Anthropologie website</h2>
              <p>
                About
                This project is a clone of (Anthropologie.com).Anthropologie is a website which sells women clothings and home furnitures.
              </p>
              {/* <p>
              
              </p> */}
              <p>
                Along with other 4 member, build the application in 5 days. websites which we includes the features Landing page, Signin page, Cart page, Clothing page and Shipment page.
              </p>
              <p>
                Teck-Stack: CSS | Java Script | JSON | React | Redux
              </p>

              <a
                href="https://anthropologie1.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/venkycoder422/Anthropologie/tree/venky/project"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
