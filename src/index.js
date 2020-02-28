// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import domUpdates from './domUpdates.js'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/travel-icon.png'

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
  if(password !== 'travel2020') {
    window.alert('☠️Invalid Password☠️')
    return 'invalid password'
  } else {
    console.log('Login Successful');
  }
}

// const userData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers')
//   .then(response => response.json())
//   .then(data => data.travelers)
//   .catch(error => console.log('travelers error'))
//
// const tripsData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips')
//   .then(response => response.json())
//   .then(data => data.trips)
//   .catch(error => console.log('trips error'))
//
// const destinationsData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations')
//   .then(response => response.json())
//   .then(data => data.destinations)
//   .catch(error => console.log('destinations error'))
//
// Promise.all([userData, tripsData, ])



$('#login-form').submit(checkLoginCredentials)
// $('.login-button').click(helper)
//
// function helper() {
//   event.preventDefault();
//   console.log('click');
//   domUpdates.showUsers();
// }
