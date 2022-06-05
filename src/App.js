import "./App.css";
import MainPage from "./components/Main/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BestSellersPage from "./components/BestSellersViewAll/BestSellersPage";
import HandPicksViewAll from "./components/HandPicksViewAll.js/HandPicksViewAll";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/BestSellers" element={<BestSellersPage />} />
        <Route path="/Hand-picks" element={<HandPicksViewAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
