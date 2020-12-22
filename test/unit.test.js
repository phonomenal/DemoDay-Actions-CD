const { doesNotMatch } = require('assert');
const assert = require('assert');
const { exit } = require('process');
const Index = require('../index.js')

describe('Validate Get User', () => {
 it('Should return a valid user - james-leha', async () => {
       let userData = await Index.getUser('james-leha');
       assert(userData);
    });
 it('Should return a valid user - izzyco', async () => {
        let userData = await Index.getUser('izzyco');
        assert(userData);
     });
});

after(async () => {  
    console.log('Tests finished - exiting process...')
    process.exit()
  })
//process.exit();