import chai from 'chai';
import Traveler from "../src/traveler.js";
import travelerData from "../data/traveler-sample.js";
const expect = chai.expect;
let traveler;

describe("traveler", function() {
  beforeEach("Function", function() {
    traveler = new Traveler(travelerData.travelers[0]);
  });

  it("should be a function", function() {
    expect(Traveler).to.be.a('function')
  });

  it("should be an instance of Traveler", function() {
    expect(traveler).to.be.an.instanceof(Traveler)
  });

  it("should be able to get travelers name", function() {
    expect(traveler.name).to.equal('Ham Leadbeater')
  })

  
})
