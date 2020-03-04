import dataParser from './dataParser.js';
import Traveler from './traveler'
import Agent from './agent'
import $ from 'jquery';

const domUpdates = {
  showUsers: async () => {
    console.log(await dataParser.fetchAllTravelers());

  },

  displayTravelerDashboard: (traveler) => {
    $('#login-form').hide()
    traveler.trips.forEach(trip => {
     $('body').append(`<div class='trip-card ${trip.status}'>
      <h5>Location:${trip.id}</h5>
      <h5>Destination ID:${trip.destinationID}</h5>
      <h5># of Travelers: ${trip.travelers}</h5>
      <h5>Trip Start Date:${trip.date}</h5>
      <h5>Trip Length: ${trip.duration}</h5>
      <h5>Status:${trip.status}</h5>
      </div>`)
    })

    $('.welcome-traveler').append(`Welcome ${traveler.name}`)
    $('.total-spent').append(`You've spent $${traveler.calculateTotalSpent()} on travel this year.`)

    // $('logout-button').show()
  },

  displayAgentDashboard: (agent) => {
    $('#login-form').hide()
    $('.welcome-traveler').append(`Welcome Agent.`)
    $('.total-spent').append(`You've made $${agent.calculateTotalEarned()} this year.`)
  }
}

export default domUpdates;
