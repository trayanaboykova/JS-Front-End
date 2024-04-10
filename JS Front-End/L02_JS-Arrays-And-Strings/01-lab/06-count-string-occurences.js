function countStringOccurrences(text, word) {
    let regex = new RegExp('\\b' + word + '\\b', 'gi');
    let matches = text.match(regex);
    let count = matches ? matches.length : 0;
    console.log(count);
  }
