const axios = require('axios');

const functions = {
    add: (num1, num2) => {
        return num1 + num2;
    },
    isNull: () => {

        return null;
    },
    checkValue: (x) => {
        return x
    },
    createUser: () => {
        const user = {
            firstName: 'Hamzah',
            lastName: 'Amer'
        }
        return user;

    },
    getData: () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
            });
    }
}


module.exports = functions;