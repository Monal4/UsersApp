const fetch = require('node-fetch');
const users = require('./script');


it('calls api for users', () => {
    users.getUsers(fetch).then(data => {
        expect(data.name).toBeGreaterThan(0)
    })
})

it('calls async api for users', () => {
    users.getUsersASYNC(fetch).then(data => {
        expect(data.name).toBeGreaterThan(0)
    })
})