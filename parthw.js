// EXERCISE 1:

const bobsCar = {
    make: 'Subaru',
    model: 'Impreza',
    info: {
        color: 'blue',
        mileage: 0,
    }
}

if (bobsCar.info.mileage === 0) {
    console.log('Bob owns Subaru Impreza and it is brand new!');
} else if (bobsCar.info.mileage < 1000) {
    console.log('Bob owns Subaru Impreza and it is almost new!');
} else {
    console.log('Bob owns Subaru Impreza and it is old!');
}


// EXERCISE 2:

const bob = {
    name: 'Bob',
    surname: 'Smith',
    age: 10
}

if (bob.age < 12) {
    console.log('This is Bob Smith and he is a child!');
} else if (bob.age < 18) {
    console.log('This is Bob Smith and he is a teenager!');
} else if (bob.age >= 18) {
    console.log('This is Bob Smith and he is a adult!');
}


// EXERCISE 3:

let x = -5;

if (x > 0) {
    console.log('X is positive number');
} else if (x < 0) {
    console.log('X is negative number');
} else {
    console.log('X is equal zero');
}

let y = 10;

if (y > 0) {
    console.log('Y is positive number');
} else if (y < 0) {
    console.log('Y is negative number');
} else {
    console.log('Y is equal zero');
}

x = -x;
console.log(x + y);

x = -2;
y = -3;

x = -x;
y = -y;

console.log(x + y);


// EXERCISE 4:

const registry = {
    owner: {
        name: 'Mary Gold',
        age: 45
    },
    property: {
        type: 'House',
        bedrooms: 4,
        address: {
            country: 'England',
            city: 'London',
            street: 'Fulton rd.',
            houseNumber: 30

        }
    }
}

const registry2 = JSON.parse(JSON.stringify(registry));
const jsonString = '{"owner":{"name":"Mary Gold","age":45},"property":{"type":"House","bedrooms":4,"address":{"country":"England","city":"London","street":"Fulton rd.","houseNumber":30}}}';

registry2.owner.name = 'Jack Smith';
registry2.owner.age = 50

console.log(registry);
console.log(registry2);