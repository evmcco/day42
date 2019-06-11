const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised).should();

const User = require('../models/users');

describe('User model tests', () => {
    //user can be found in the DB  
    it('can be found in the database', async () => {
        const userInstance = new User(null, null, null, 'test@june11th.com', null);
        const theUser = await userInstance.getUserByEmail();
        console.log("theUser:", theUser)
        expect(theUser.id).to.not.be.an('undefined');
    })

    //user is an object
    it('returns a valid object', async () => {
        const userInstance = new User(null, null, null, 'test@june11th.com', null);
        const theUser = await userInstance.getUserByEmail();
        expect(theUser).to.be.an('object');
    })

    //get all users returns >0 users
    it('should not return an empty list', async () => {
        const allUsers = await User.getAllUsers();
        expect(allUsers.length).to.be.greaterThan(0);
    })
})