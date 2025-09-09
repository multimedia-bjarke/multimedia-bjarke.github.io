import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function HomeCards(data) {
  const { id } = useParams(); // 👈 grabs the ":id" from the URL
  const [card, setCard] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data/clients.json");
      const data = await response.json();
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="card">
        <a href="design.html">
          <div className="cards">
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.alt} />
          </div>
        </a>
      </div>
    </>
  );
}
