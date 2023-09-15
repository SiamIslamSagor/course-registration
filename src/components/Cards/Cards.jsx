import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

// import { FaYoutube, FaTwitter } from "react-icons";

const Cards = ({ handleClick }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    // <div className="bg-sky-400 w-3/4">
    <div className=" basis-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* <h2>This is Cards</h2> */}
      {cards.map((card) => (
        <Card key={card.id} card={card} handleClick={handleClick}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Cards;
