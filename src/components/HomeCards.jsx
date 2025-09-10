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
          <div className="w-80 h-[32rem] bg-black rounded-2xl shadow-md flex flex-col justify-between transition-transform duration-200 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col h-1/2 w-full">
              <h2 className="mt-20 text-center text-white font-bold text-xxl">
                {card.title}
              </h2>
            </div>
            <div className="h-1/2 w-full flex rounded-b-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={card.image}
                alt={card.alt || card.title}
              />
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
