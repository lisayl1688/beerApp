import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div>
        <Link to="/products">
          <img src="/allbeers.jpg" alt="allbeers" />
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.
        </p>
      </div>
      <div>
        <Link to="/randomproduct">
          <img src="/beers.png" alt="beers" />
          <h2>Random Beer</h2>
        </Link>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.
        </p>
      </div>
    </section>
  );
};

export default Home;
