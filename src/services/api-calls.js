const baseUrl = 'https://swapi.dev'


export function getStarshipList() {
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}

export function getStarshipDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}