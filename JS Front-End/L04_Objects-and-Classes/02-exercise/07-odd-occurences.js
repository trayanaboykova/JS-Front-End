function extractOddWords(sentence) {
    const words = sentence.toLowerCase().split(' ');
    const frequencies = {};
  
    for (let word of words) {
      frequencies[word] = (frequencies[word] || 0) + 1;
    }
  
    const oddWords = [];
    for (let word in frequencies) {
      if (frequencies[word] % 2 !== 0) {
        oddWords.push(word);
      }
    }
  
    return oddWords.join(' ');
  }
  