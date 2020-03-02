import dataParser from './dataParser'

class Destinations {
  constructor(destinationData) {
    console.log(destinationData);
    this.id = destinationData.id;
    this.destination = destinationData.destination;
    this.estimatedLodgingCostPerDay = destinationData.travelerType;
    this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson;
    this.image = destinationData.image;
    this.alt = destinationData.alt;
  }
}

  export default Destinations;
