import "./section1.css";
import Rectangle from "../imges/Rectangle.png";
import MaskGroup from "../imges/MaskGroup.png";
import bread from "../imges/bread.png";

import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";

function Section1() {
  return (
    <div className="home">
      <div className="container">
        <div className="child child1">
          <p className="title">
            PEACHY PUP <br /> BAKERY
          </p>
          <div className="centered-element">
            <h1>TASTY PASTRIES</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button> SEE MORE</button>
          </div>
          <div className="last-element">
            <div className="social-icons">
              <ImFacebook2 className="icon" />
              <FaSquareTwitter className="icon" />
            </div>
          </div>
        </div>
        <div className="child child2">
          <img src={bread} />
        </div>
      </div>
    </div>
  );
}

export default Section1;
