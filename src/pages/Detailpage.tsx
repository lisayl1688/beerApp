import { useEffect, useState } from "react";
import { IBeer } from "../IBeer";
import { useParams } from "react-router-dom";
import "./Detailpage.css";

const Detailpage = () => {
  const [beerDataDetail, setBeerDataDetail] = useState<IBeer | null>(null);

  // Params auslesen aus URL für ID
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/ale/${id}`)
      .then((response) => response.json())
      .then((data) => setBeerDataDetail(data))
      .catch((error) => console.error("Fehler beim fetchen", error));
  }, [id]);

  console.log(beerDataDetail);

  return (
    <>
      {" "}
      <h1>Detailpage</h1>
      {/* Fragezeichen nicht vergessen! */}
      <img src={beerDataDetail?.image} alt={beerDataDetail?.name}></img>
      <h3>{beerDataDetail?.name}</h3>
      <p>{beerDataDetail?.price}</p>
    </>
  );
};

export default Detailpage;
