import dataParser from './dataParser'
import Traveler from './traveler'

class Agent {
  constructor(travelerData, tripsData, destinationsData) {
    this.travelers = travelerData;
    this.trips = tripsData;
    this.destinations = destinationsData;
    // console.log(this.travelers.travelers);
  }

  calculateTotalEarned() {
    const agent10 = this.travelers.travelers.reduce((acc, curr) => {
      const traveler = new Traveler(curr, this.trips, this.destinations)
      const totalTravel = traveler.calculateTotalSpent()
      console.log(totalTravel);
      const agentCut = (totalTravel * .1)
      console.log(agentCut);
      acc += (totalTravel * .1)
      return acc
    }, 0)
    console.log(agent10);
    return agent10.toFixed(2)
  }
}

export default Agent;
