import "./Randomproduct.css";
import { IBeer } from "../IBeer";
import { useEffect, useState } from "react";

const RandomProduct = () => {
  const [beerDataAll, setBeerDataAll] = useState<IBeer[] | null>(null);
  const [randomBeerDetail, setRandomBeerDetail] = useState<IBeer | null>(null);

  const getRandomId = (): number => {
    if (beerDataAll && beerDataAll.length > 0) {
      const randomIndexNumber = Math.ceil(Math.random() * beerDataAll.length);
      console.log({ randomIndexNumber });
      return beerDataAll[randomIndexNumber].id;
    }
    return 0;
  };

  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/ale`)
      .then((response) => response.json())
      .then((data: IBeer[]) => {
        setBeerDataAll(data);
        console.log({ data });
      })
      .catch((error) => console.error("Fehler beim Laden der Daten.", error));
  }, []);

  useEffect(() => {
    const randomId = getRandomId();
    console.log({ randomId });
    if (beerDataAll) {
      const selectedBeer =
        beerDataAll.find((beer) => beer.id === randomId) || null;
      console.log(selectedBeer);
      setRandomBeerDetail(selectedBeer);
    }
  }, [beerDataAll]);

  return (
    <section className="single_beer">
      {randomBeerDetail ? (
        <section className="wrapper_product">
          <img src={randomBeerDetail.image} alt={randomBeerDetail.name} />
          <h3>{randomBeerDetail.name}</h3>
          <p>{randomBeerDetail.price}</p>
          <div className="reviews">
            <p>Rating: {randomBeerDetail.rating.average.toFixed(2)}</p>
            <p>Reviews: {randomBeerDetail.rating.reviews}</p>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default RandomProduct;
