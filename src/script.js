const getUsers = fetch => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        return {
            name: data.name
        }
    });
}

const getUsersASYNC = async fetch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return {
        name: json.name
    }
}

module.exports = {
    getUsers,
    getUsersASYNC
}