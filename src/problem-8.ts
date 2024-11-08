{
  const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
    return keys.every((key) => key in obj);
  };

  //   Sample input:1
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
