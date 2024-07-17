import React from "react";
import "./How.css";
import img1 from "../imges/breadbb.png";
import img2 from "../imges/breadgg.png";
import img3 from "../imges/breadss.png";
import img4 from "../imges/breadvv.png";

const How = () => {
  return (
    <div className="how">
      <div className="container">
        <div className="child child2">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </div>
        <div className="child child1">
          <div className="centered-element">
            <h1>
              HOW WE <br /> WORK{" "}
            </h1>
            <div className="recipes">
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
              <img src={img4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
