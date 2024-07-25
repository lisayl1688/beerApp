import "./Randomproduct.css";
import { IBeer } from "../IBeer";
import { useEffect } from "react";

const RandomProduct = () => {
  const [randomBeerDataDetail, setRandomBeerDataDetail] =
    useState<IBeer | null>(null);

  // Params auslesen aus URL für ID

  function getRandomId() {
    let randomNumber = Math.floor() * randomBeerDataDetail.length;
    console.log(randomNumber);
  }

  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/ale/${id}`)
      .then((response) => response.json())
      .then((data) => setRandomBeerDataDetail(data))
      .catch((error) => console.error("Fehler beim fetchen", error));
  }, []);

  return (
    <>
      <h1>Randomproduct</h1>
    </>
  );
};

export default RandomProduct;
