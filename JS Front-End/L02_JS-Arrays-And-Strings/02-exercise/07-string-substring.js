function findWord(word, text) {
    const words = text.toLowerCase().split(' ');
    for (const w of words) {
      if (w.toLowerCase() === word.toLowerCase()) {
        console.log(word);
        return;
      }
    }
    console.log(`${word} not found!`);
  }
  