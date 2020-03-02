import dataParser from './dataParser'

class Traveler {
  constructor(travelerData) {
    console.log(travelerData);
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.username = "traveler" + this.id;
    this.password = "travel2020";
    this.trips = this.getTripsById() || []
  }

//

getTripsById() {
  return dataParser.fetchTripsData()
    .then(allTrips => {
      return allTrips.trips.filter(trip => trip.userID === this.id)
    })
}

calculateTotalSpent() {
  console.log(getTripsById());
}

bookTrip() {

}
}

export default Traveler;
