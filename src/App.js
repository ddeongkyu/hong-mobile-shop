import "./App.css";
import MainPage from "./components/Main/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BestSellersPage from "./components/BestSellersViewAll/BestSellersPage";
import HandPicksViewAll from "./components/HandPicksViewAll/HandPicksViewAll";
import ProductDetails from "./components/List";
import Favorites from "./components/Favorites/Favorites";
import ShoppingBasket from "./components/ShoppingBasket/ShoppingBasket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/BestSellers" element={<BestSellersPage />} />
        <Route path="/Hand-picks" element={<HandPicksViewAll />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/ShoppingBasket" element={<ShoppingBasket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
