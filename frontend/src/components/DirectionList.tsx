import React from "react";

interface Props {
  item: string;
}

const directionList = ({ item }: Props) => {
  return (
    <div> 🚴🏽‍♂️ {item}</div>
    // <ol className="list-group list-group-numbered">
    //   {items.length !== 0 &&
    //     items.map((item) => (
    //       <li className="list-group-item" key={item}>
    //         {item}
    //       </li>
    //     ))}
    // </ol>
  );
};

export default directionList;
