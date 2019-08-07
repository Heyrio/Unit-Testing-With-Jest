const functions = require('./functions');

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


test('checks if null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Should be Falsey', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});
test('Should be Hamzah Amer Object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Hamzah', lastName: "Amer" });
});

test('get data axios call', () => {
    functions.getData()
        .then(data => {
            expect(data.title).toEqual('delectus aut autem');
        })
})