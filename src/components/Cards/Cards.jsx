import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    // <div className="bg-sky-400 w-3/4">
    <div className=" basis-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {/* <h2>This is Cards</h2> */}
      {cards.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
