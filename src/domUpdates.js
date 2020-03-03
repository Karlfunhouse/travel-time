import dataParser from './dataParser.js';
import Traveler from './traveler'
import $ from 'jquery';
let destinationIds = [];

const domUpdates = {
  showUsers: async () => {
    console.log(await dataParser.fetchAllTravelers());
  },

  displayTravelerDashboard: async (traveler) => {
    $('#login-form').hide()
    await traveler.getTripsById()
    .then(trips => trips.forEach(trip => {
     $('body').append(`<div class='trip-card'>
      <h5>Trip ID:${trip.id}</h5>
      <h5>Destination ID:${trip.destinationID}</h5>
      <h5># of Travelers: ${trip.travelers}</h5>
      <h5>Trip Start Date:${trip.date}</h5>
      <h5>Trip Length: ${trip.duration}</h5>
      <h5>Status:${trip.status}</h5>
      </div>`)
      destinationIds.push(trip.destinationID);
      console.log(destinationIds);
    })
  )
  .then()
    await ($('.welcome-traveler').append(`Welcome ${traveler.name}`))
    // destinationIds.reduce((totalSpent, tripCost))
    await($('.total-spent').append(`Total Spent this Year:$`))

    // $('logout-button').show()
  }
}

export default domUpdates;
