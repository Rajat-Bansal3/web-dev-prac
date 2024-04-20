"use strict";
const users = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "Alice", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Johnson", age: 4 },
];
function ageCheck(user, agetoCheck = 18) {
    return user.filter((user) => user.age >= agetoCheck);
}
console.log(ageCheck(users));
