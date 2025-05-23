import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepagelayout from "./Homepagelayout";
import Homepage from "./Homepage";
import ItemsLayout from "./ItemsLayout";
import HotCoffee from "./HotCoffee";
import IceCoffee from "./IceCoffee";
import HotDrink from "./HotDrink";
import Mocktail from "./Mocktail";
import Smoothie from "./Smoothie";
import MilkShake from "./MilkShake";
import Cake from "./Cake";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepagelayout />}>
          <Route index element={<Homepage />} />
          <Route path="items" element={<ItemsLayout />}>
            <Route path="hotCoffee" element={<HotCoffee />} />
            <Route path="icecoffee" element={<IceCoffee />} />
            <Route path="hotDrink" element={<HotDrink />} />
            <Route path="mocktail" element={<Mocktail />} />
            <Route path="smoothie" element={<Smoothie />} />
            <Route path="milkshake" element={<MilkShake />} />
            <Route path="cake" element={<Cake />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
