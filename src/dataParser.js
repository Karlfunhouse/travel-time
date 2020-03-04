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

  // postDestination: () => {
  //   let options = {
  //     method: 'POST',
  //     body: {
  //       {id: 234,
  //       destination: "Over The Rainbow",
  //       estimatedLodgingCostPerDay: 33.33,
  //       estimatedFlightCostPerPerson: 11.11,
  //       image: "https://previews.123rf.com/images/kristynavagnerova/kristynavagnerova1901/kristynavagnerova190100372/121528845-rainbow-vector-illustration-with-somewhere-over-the-rainbow-colorful-rainbow-with-white-cloud-on-blu.jpg",
  //       alt: "over the rainbow"
  //       }
  //     }
  //   }
  //   return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations`, options)
  // }



}

export default dataParser
