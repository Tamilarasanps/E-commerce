import React from "react";
import data_product from "../Assets/data";
import Item from "../item/Item";

const Popularpg = () => {
  return (
    <div>
      <h1>Popular in Women</h1>
      <hr />
      <div>
        {data_product.map((item,i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popularpg;
