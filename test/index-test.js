import index from '../src/index.js';
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

// describe('checkLoginCredentials', function() {
//
//   it('should check if user login is invalid', function() {
//     chai.spy.on(window, 'alert')
//     const mockEvent = {
//       preventDefault: () => {},
//       target: [
//         {
//           value: 'invalid username'
//         },
//         {
//           value: 'password'
//         }
//       ]
//     }
//     index.checkLoginCredentials(mockEvent);
//     //call checkLoginCredentials method with an argument
//     expect(window.alert.callCount).is.equal(1);
//     expect(window.alert.call[0].args[0].length).equals(25)
//     // depending on that argument check to see if a specific function was called with a certain argument
//
//     //spy on that function to watch it
//   })
// })
