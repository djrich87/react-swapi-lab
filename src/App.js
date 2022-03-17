import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';


function App() {
  return (
    <>
    <StarshipList />
    <Routes>
      <Route path='/starship' element={<StarshipDetails />} />
    </Routes>
    </>
  );
}


export default App;
