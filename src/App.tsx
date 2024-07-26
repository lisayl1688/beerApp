import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Detailpage from "./pages/Detailpage";
import RandomProduct from "./pages/RandomProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Detailpage />} />
        <Route path="/randomproduct" element={<RandomProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
