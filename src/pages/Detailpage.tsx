import { useEffect, useState } from "react";
import { IBeer } from "../IBeer";
import { useParams } from "react-router-dom";
import "./Detailpage.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Detailpage = () => {
  // Speichern der Daten aus API
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
      <Header />
      <div className="wrapper_product">
        {/* Fragezeichen nicht vergessen! */}
        <img
          src={beerDataDetail?.image}
          alt={beerDataDetail?.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/public/Fallback_Beer.svg";
          }}
        ></img>
        <h3>{beerDataDetail?.name}</h3>
        <p>{beerDataDetail?.price}</p>
        <div className="reviews">
          <p>Rating: {beerDataDetail?.rating.average.toFixed(2)}</p>
          <p>Reviews: {beerDataDetail?.rating.reviews}</p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Detailpage;
