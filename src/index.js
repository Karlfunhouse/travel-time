// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/travel-icon.png'

let isTraveler = (name) => {
  if(!name.includes('traveler')) {
    return false;
  }
  let idNumber = parseInt(name.slice(8))
  if(idNumber < 1 || idNumber > 50) {
    return false
  }
    return true
}

let checkLoginCredentials = (event) => {
  event.preventDefault()
  let userName = event.target[0].value
  let password = event.target[1].value
  if(userName === 'agency') {
    console.log('yer an agent');
  } else if(isTraveler(userName)) {
    console.log('verified user');
  } else {
    alert('☠️Invalid Username☠️')
    return
  }
  if(password !== 'travel2020') {
    alert('☠️Invalid Password☠️')
    return
  } else {
    console.log('Lets GO!');
  }

//if userName !== an appropriate username or agency give error message
//else
// check password = travel2020
//if password !== travel2020 give error message
// else take user to appropriate page
}

$('#login-form').submit(checkLoginCredentials)
