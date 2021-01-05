const { doesNotMatch } = require("assert");
const assert = require("assert");
const { exit } = require("process");
const Index = require("../index.js");

describe("Validate Get User", () => {
  it("Should return a valid user - james-leha", async () => {
    const userData = await Index.getUser("james-leha");
    assert(userData);
  });
  it("Should return a valid user - izzyco", async () => {
    const userData = await Index.getUser("izzyco");
    assert(userData);
  });
});

// describe('Return 404 Page', () => {
//    it('Should return an invalid user - james-doesnotmakesense010101', async () => {
//          // let userData = await Index.getUser('james-doesnotmakesense010101');
//          // console.log(userData)
//          // assert(userData);
//          // assert.throw(() => { Index.getUser('james-doesnotmakesense010101') }, Error);
//          try {
//             await Index.getUser('james-doesnotmakesense010101'); // this should fail
//             assert.fail('expected exception not thrown'); // this throws an AssertionError
//           } catch (e) { // this catches all errors, those thrown by the function under test
//                         // and those thrown by assert.fail
//             if (e instanceof AssertionError) {
//               // bubble up the assertion error
//               throw e;
//             }
//             assert.equal(e.message, 'Invalid Arguments');
//           }
//       });
//   });

after(async () => {
  console.log("Test(s) finished - exiting process...");
  process.exit();
});
// process.exit();
