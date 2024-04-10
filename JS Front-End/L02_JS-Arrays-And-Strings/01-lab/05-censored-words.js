function cencoredWords(text, word) {
    let regex = new RegExp(word, 'gi');
    let count = word.length;
    let replacement = '*'.repeat(count);
    let result = text.replace(regex, replacement);
    console.log(result);
  }