import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/api-calls';


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] =
    useState({})
  let location = useLocation()
  console.log(starshipDetails)

  useEffect(() => {
    getStarshipDetails(location.state.starshipCard.url)
      .then(listData => setStarshipDetails(listData))
  }, [])

  return (
    <div className='icon-container'>
      {starshipDetails.length ?

        <div className='ship-card'>
          <h3>Name: {starshipDetails.name}</h3>
          <h3>Model: {starshipDetails.model}</h3>
          <Link to='/starship' >Return</Link>
        </div>
        : <h2>loading</h2>}
    </div>
  );
}

export default StarshipDetails;