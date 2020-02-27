class Traveler() {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.username = "traveler" + this.id;
    this.password = "travel2020";
  }
}
