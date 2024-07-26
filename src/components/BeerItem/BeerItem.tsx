import "./BeerItem.css";
import { IBeer } from "../../IBeer";
import { Link } from "react-router-dom";

// Schnittstelle, beschreibt, wie Objekt aussehen muss, Struktur der Probs wird definiert

interface IBeerItemProps {
  beer: IBeer;
}

// ein generischer Typ von React, der es ermöglicht, deine Komponenten mit Props zu typisieren.
// Man kann entweder props übergeben, dann schreibe ich alles mit {props.beer,name}
// Alternativ: Destructuring: man übergibt ({ beer }) => dann fällt props weg
// Zusammenfassung
// (props): Du bekommst die ganze Box und greifst auf einzelne Dinge darin zu.
// Destructuring: Du nimmst nur die benötigten Teile der Box heraus und arbeitest direkt damit.

const BeerItem: React.FC<IBeerItemProps> = ({ beer }) => {
  return (
    <div className="single_beer">
      <Link to={`/products/${beer.id}`} className="beeritem">
        <img src={beer.image} alt={beer.name} />
        <h3>{beer.name}</h3>
      </Link>
      <p>{beer.price}</p>
      <div className="reviews">
        <p>Rating: {beer.rating.average.toFixed(2)}</p>
        <p>Reviews: {beer.rating.reviews}</p>
      </div>
    </div>
  );
};

export default BeerItem;
