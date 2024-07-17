import "./section2.css";
import chef from "../imges/chef.png";
function section2() {
  return (
    <div className="about">
      <div className="container">
        <div className="left child">
          <p className="title"> ABOUT <br/> US</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <button className="btn">Read More</button>
        </div>
        <div className="right child">
          <img src={chef} alt="" />
        </div>
      </div>
    </div>
  );
}

export default section2;
