import { useEffect, useState } from "react";

export default function HomeCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("./data/homeCards.json");
      const json = await response.json();
      setCards(json);
    }
    fetchData();
  }, []);

  return (
    <>
      {cards.map((card, index) => (
        <a href={card.link} key={index}>
          <div className="card">
            <h2>{card.title}</h2>
            <img src={card.image} alt={card.alt || card.title} />
          </div>
        </a>
      ))}
    </>
  );
}
