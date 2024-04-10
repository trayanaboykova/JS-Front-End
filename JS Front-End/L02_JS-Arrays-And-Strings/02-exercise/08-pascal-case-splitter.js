function splitPascalCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === char.toUpperCase() && i > 0) {
        result += ', ';
      }
      result += char;
    }
    return result;
  }
  