function printAddressBook(addressBook) {
    const addressBookObj = {};
    for (const entry of addressBook) {
      const [name, address] = entry.split(':');
      addressBookObj[name] = address;
    }
    const sortedEntries = Object.entries(addressBookObj).sort();
    for (const [name, address] of sortedEntries) {
      console.log(`${name} -> ${address}`);
    }
  }
  