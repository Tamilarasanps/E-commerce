import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero from "../Assets/hero_image.png";
const Mainfile = () => {
  return (
    <div className="main d-flex">
      <div>
        <div>
          <h2>New Arraivals only</h2>
        </div>
        <div>
          <p>New</p>
          <img src={hand_icon} alt="img" />
        </div>

        <div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div>
          Latest collection
          <img src={arrow_icon} alt="img" />
        </div>
      </div>

      <div>
        <img src={hero} alt="" style={{ width: "500px", height: "500px" }} />
      </div>
    </div>
  );
};

export default Mainfile;
