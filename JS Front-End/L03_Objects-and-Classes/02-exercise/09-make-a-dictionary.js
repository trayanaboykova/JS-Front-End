function parseDictionary(input) {
    let dictionary = {};
  
    for (let i = 0; i < input.length; i++) {
      let obj = JSON.parse(input[i]);
  
      for (let key in obj) {
        dictionary[key] = obj[key];
      }
    }
  
    let terms = Object.keys(dictionary).sort();
  
    for (let i = 0; i < terms.length; i++) {
      let term = terms[i];
      let definition = dictionary[term];
      console.log(`Term: ${term} => Definition: ${definition}`);
    }
  
    if (terms.length === 0) {
      console.log('The dictionary is empty.');
    }
  }
  