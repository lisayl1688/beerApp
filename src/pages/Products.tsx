import Beerlist from "../components/BeerList/BeerList";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Products.css";

const Products = () => {
  return (
    <>
      <Header />
      <section className="products">
        <Beerlist />
      </section>
      <Footer />
    </>
  );
};

export default Products;
