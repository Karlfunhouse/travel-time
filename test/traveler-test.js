import chai from 'chai';
import Traveler from "../src/traveler.js";
import travelerData from "../data/traveler-sample.js";
const expect = chai.expect;
let traveler;

describe("traveler", function() {
  beforeEach("Function", function() {
    traveler = new Traveler(travelerData.travelers[0]);
  })

  it("should be an instance of Traveler", function() {
    expect(traveler).to.be.an.instanceof(Traveler)
  });
})
