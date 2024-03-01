function findSpecialWords(input) {
    const words = input.split(" ");
    const specialWords = words.filter(word => word.startsWith("#") && /^[a-zA-Z]+$/.test(word.slice(1)));
    const result = specialWords.map(word => word.slice(1));
    console.log(result.join("\n"));
  }