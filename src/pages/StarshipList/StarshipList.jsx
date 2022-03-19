import { useEffect, useState } from 'react';
import { getStarshipList } from '../../services/api-calls';
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getStarshipList()
    .then(listData => setStarships(listData.results))
  }, [])

  return ( 
    <div>
      <div className='icon-container'>

      {starships.map((starshipCard, index) => (
        <Link to='/starship-details' state={{starshipCard}} key={index}>
      <div className='ship-card'>
        {starshipCard.name}
    </div>
    </Link>
    ))}
    </div>
    :

    </div>
  );
}

export default StarshipList;