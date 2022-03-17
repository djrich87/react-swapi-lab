import { useEffect, useState } from 'react';
import { getStarshipDetails } from '../../services/api-calls';
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getStarshipDetails()
    .then(listData => setStarships(listData.results))
  }, [])

  return ( 
    <div>
      This is a Starship
    </div>
  );
}

export default StarshipList;