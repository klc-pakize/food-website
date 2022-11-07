import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Food from "./pages/food/Food";
import FoodDetail from "./pages/food/FoodDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route index element={<About />} />
        <Route path="food" element={<Food />} />
        <Route path="food/:id" element={<FoodDetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
