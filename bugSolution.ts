function greeter(person: string): string {
  return "Hello, " + person;
}

function greet(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];
let user2 = "John";

console.log(greeter(user2)); //This will work
console.log(greet(user)); //This will work now
console.log(greet(user2)); //This will also work