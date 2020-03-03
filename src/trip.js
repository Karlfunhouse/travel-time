import dataParser from './dataParser'

class Trips {
  constructor(travelerData) {
    console.log(travelerData);
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.username = "traveler" + this.id;
    this.password = "travel2020";
  }

  export default Trips;
