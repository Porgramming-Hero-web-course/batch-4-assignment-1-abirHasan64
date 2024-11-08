Union type:
Union types allow a variable to hold multiple types making the code adaptable. Use the pipe (|) operator to specify a variable that can be one of several types. This is perfect for scenerios where data might vary but still need to enforce type safety.

<!-- Example code for union type -->

function greet(person: string | string[]) {
return typeof person === "string" ? `Hello, ${person}!` : `Hello, ${person.join(" and ")}!`;
}

Intersection type:
Intersection types marked by the ampersand (&), lets us combine multiple types into one. This ensures that a value has all the properties from the types it intersects; making it ideal for scenarios where an object needs to meet multiple criteria.

<!-- Example code for intersection type -->

interface Person {
name: string;
age: number;
}

interface Address {
street: string;
city: string;
}

type PersonWithAddress = Person & Address;

const john: PersonWithAddress = { name: "Alice", age: 30, street: "123 Main", city: "New York" };
