/* import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function DesignCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("./data/designCards.json");
      const json = await response.json();
      setCards(json);
    }
    fetchData();
  }, []);

  return (
    <>
      {cards.map((card, index) => (
        <Link to={card.link} key={index}>
          <div className="w-[70%] max-w-[249px] bg-black rounded-2xl shadow-md flex flex-col justify-between transition-transform duration-200 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col h-1/2 w-full">
              <h2 className="mt-20 text-center text-white font-bold text-xxl">
                {card.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
} */

import { useEffect, useState } from "react";
import { Link } from "react-router";
import ShortCard from "./ShortCard";
import MediumCard from "./MediumCard";
import LongCard from "./LongCard";

export default function DesignCards() {
  return (
    <>
      <ShortCard />
      <MediumCard />
      <LongCard />
    </>
  );
}
