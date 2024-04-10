function printPersonJSON(firstName, lastName, hairColor) {
    const person = {
      name: firstName,
      lastName: lastName,
      hairColor: hairColor
    };
    const json = JSON.stringify(person);
    console.log(json);
  }