function printPhoneBook(phoneBook) {
    const phoneBookObj = {};
    for (const entry of phoneBook) {
      const [name, number] = entry.split(' ');
      phoneBookObj[name] = number;
    }
    for (const [name, number] of Object.entries(phoneBookObj)) {
      console.log(`${name} -> ${number}`);
    }
  }
  