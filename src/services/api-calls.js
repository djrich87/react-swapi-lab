const baseUrl = 'https://swapi.dev/api/'


export function getStarshipList() {
  return fetch(`${baseUrl}/api/starships/`)
  .then(res => res.json())
}

export function getStarshipDetails(apiUrl) {
  return fetch(`${baseUrl}${apiUrl}`)
  .then(res => res.json())
}