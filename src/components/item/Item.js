import React from "react";

const Item = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
      <div className="itemprice">
        <div className="new-price">
          {props.new_price}
          <div className="old-price">
            {props.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
