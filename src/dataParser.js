const dataParser = {
  fetchAllTravelers: () => {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers')
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  },

  fetchTravelerById: (id) => {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers/${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
  },

  fetchTripsData: () => {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
  },

  fetchDestinations: () => {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  },



}

export default dataParser
