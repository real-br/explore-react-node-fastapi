import React from "react";

interface Props {
  items: string[];
}

const directionList = ({ items }: Props) => {
  return (
    <ol className="list-group list-group-numbered">
      {items.length !== 0 &&
        items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
    </ol>
  );
};

export default directionList;
