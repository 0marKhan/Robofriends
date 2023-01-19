import React from "react";
import Cards from "./components/Cards";

function CardsList({ robots }) {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Cards
            key={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
}

export default CardsList;
