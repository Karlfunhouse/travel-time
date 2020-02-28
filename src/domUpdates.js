import dataParser from './dataParser.js'

const domUpdates = {
  showUsers: async () => {
    console.log(await dataParser.fetchAllTravelers());
  }
}

export default domUpdates;
