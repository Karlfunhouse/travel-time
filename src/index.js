// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import domUpdates from './domUpdates'
import dataParser from './dataParser'
import Traveler from './traveler'
import Destinations from './destination'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/travel-icon.png'

let traveler;


export const isTraveler = (name) => {
  if(!name.includes('traveler')) {
    return false;
  }
  let idNumber = parseInt(name.slice(8))
  if(idNumber < 1 || idNumber > 50) {
    return false
  }
    return true
}

export const checkLoginCredentials = (event) => {
  event.preventDefault()
  let userName = event.target[0].value
  let password = event.target[1].value
  let id = parseInt(userName.slice(8))
  if (userName === 'agency' && password === 'travel2020') { //valid agent
    console.log('yer an agent');
    domUpdates.showUsers();
    //load agent dashboard
  } else if (userName === 'agency' && password !== 'travel2020') {//invalid
    window.alert('☠️Invalid Password☠️')
    return 'invalid password'
  } else if (isTraveler(userName) && password === 'travel2020') {//valid
    console.log('verified user');
    // debugger

    const userData = dataParser.fetchTravelerById(id)
    const tripsData = dataParser.fetchTripsData()
    const destinationsData = dataParser.fetchDestinations()
    let foundUserData = {}
    let foundTripsData = {}
    let foundDestinationsData = {}
    Promise.all([userData, tripsData, destinationsData])
      .then(data => {
        foundUserData = data[0];
        foundTripsData = data[1];
        foundDestinationsData = data[2];
      })
      .then(() => {
        traveler = new Traveler(foundUserData, foundTripsData, foundDestinationsData)
        console.log(foundUserData);
        console.log(foundTripsData);
        console.log(foundDestinationsData);
      })
      .then(() => traveler.getTripsById(foundTripsData.trips))
      .then(() => {traveler.calculateTotalSpent()})
      .then(() => {domUpdates.displayTravelerDashboard(traveler)})



    //
    // Promise.all([dataParser.fetchTravelerById(id), dataParser.fet)
    //   .then((travelerData) => {
    //
    //     traveler = new Traveler(travelerData)
    //     console.log(travelerData)
    //   })
    //   // debugger
    //   .then(() => domUpdates.displayTravelerDashboard(traveler))
    //   .then(() => traveler.calculateTotalSpent())

  } else if (isTraveler(userName) && password !== 'travel2020'){//invalid
    window.alert('☠️Invalid Password☠️')
    return 'invalid password'
    //fetch all trips that match that user's id

    //fetch all destinations that currently exist
    //instantiate new Traveler
    //load traveler dashboard
  } else {
    window.alert('☠️Invalid Username☠️')
    return 'invalid user'
  }
  // if(password !== 'travel2020') {
  //   window.alert('☠️Invalid Password☠️')
  //   return 'invalid password'
  // } else {
  //   console.log('Login Successful');
  // }
}





$('#login-form').submit(checkLoginCredentials)
// $('.login-button').click(helper)
//
// function helper() {
//   event.preventDefault();
//   console.log('click');
//   domUpdates.showUsers();
// }
