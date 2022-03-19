import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import StarshipList from "./pages/StarshipList.js/StarshipList";
import StarshipDetails from "./pages/StarshipDetails/StarshipsDetails";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/starship" element={<StarshipList />} />
        <Route path="/starship-details" element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
