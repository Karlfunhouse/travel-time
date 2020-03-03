import dataParser from './dataParser'
import Destination from './destination'

class Traveler {
  constructor(travelerData, tripsData, destinationsData) {
    console.log(travelerData);
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.username = "traveler" + this.id;
    this.password = "travel2020";
    this.trips = this.getTripsById(tripsData.trips) || []
    this.destinations = destinationsData.destinations
  }

//

 getTripsById(tripsData) {
    return tripsData.filter(trip => trip.userID === this.id)
}

 calculateTotalSpent()  {
   let totalCost = 0;
    this.trips.forEach(trip => {
     let destination = this.destinations.find(dest => trip.destinationID === dest.id)
     let travelerCost = (destination.estimatedLodgingCostPerDay * trip.duration ) + destination.estimatedFlightCostPerPerson
     let tripCost = travelerCost * trip.travelers
     totalCost += tripCost + (tripCost * .1)
   })
   console.log(totalCost);
   return totalCost
}

bookTrip() {

}
}

export default Traveler;
