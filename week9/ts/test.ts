interface User {
  firstName: string;
  lastName: string;
  age: number;
}
const users: User[] = [
  { firstName: "John", lastName: "Doe", age: 30 },
  { firstName: "Alice", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Johnson", age: 4 },
];
function ageCheck(user: User[], agetoCheck: number = 18): User[] {
  return user.filter((user) => user.age >= agetoCheck);
}
console.log(ageCheck(users));
