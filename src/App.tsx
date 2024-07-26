import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Detailpage from "./pages/Detailpage";
import RandomProduct from "./pages/RandomProduct";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Detailpage />} />
        <Route path="/randomproduct" element={<RandomProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
