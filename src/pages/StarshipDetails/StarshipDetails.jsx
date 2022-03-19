import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { getStarshipDetails } from '../../services/api-calls';


const StarshipDetails = () => {
  const [starshipDetails, setStarShipDetails] = useState([])
  let location = useLocation()


  useEffect(()=> {
    getStarshipDetails(location.state.starshipCard.url)
    .then(ListData => setStarShipDetails(listData))
  }, [])
  
  return (  
<div className='icon-container'>
  

</div>

    <div>
      <h1>Star Wars Starship</h1>
      <div className='ship-card'>
      
      </div>
    </div>
  );
}

export default StarshipDetails;