import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import StarshipList from "./pages/StarshipList/StarshipList";
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<StarshipList />} />
        <Route path="/starship" element={<StarshipList />} />
        <Route path="/starship-details" element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
