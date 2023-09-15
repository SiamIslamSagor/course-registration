import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleClick }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className=" basis-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      {cards.map((card, index) => (
        <Card key={index} card={card} handleClick={handleClick}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Cards;
