// src/functions.ts
function sayHello({ firstName, lastName, age }) {
  console.log("Hello!");
  console.log(`Your first name is ${firstName}`);
  if (lastName) {
    console.log(`You last name is ${lastName}`);
  }
  if (age) {
    console.log(`Your age is ${age}`);
  }
}
export {
  sayHello
};
