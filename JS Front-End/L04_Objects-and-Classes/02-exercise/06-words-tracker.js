function countWords(input) {
    const [words, ...text] = input;
    const wordCounts = {};
  
    words.split(" ").forEach((word) => {
      wordCounts[word] = 0;
    });
  
    text.forEach((sentence) => {
      sentence.split(" ").forEach((word) => {
        if (word in wordCounts) {
          wordCounts[word]++;
        }
      });
    });
  
    const result = Object.entries(wordCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([word, count]) => `${word} - ${count}`)
      .join("\n");
  
    console.log(result);
  }
  