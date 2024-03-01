function solve() {
  const inputField = document.getElementById('input');
  const formatButton = document.getElementById('formatItBtn');
  const outputDiv = document.getElementById('output');

  formatButton.addEventListener('click', () => {
    const inputText = inputField.value.trim();
    const sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);

    outputDiv.innerHTML = '';
    let i = 0;
    while (i < sentences.length) {
      const paragraphsHTML = [];

      for (let j = i; j < i + 3 && j < sentences.length; j++) {
        paragraphsHTML.push(`<span>${sentences[j].trim()}</span>`);
      }

      const paragraph = document.createElement('p');
      paragraph.innerHTML = paragraphsHTML.join('. ') + '.';
      outputDiv.appendChild(paragraph);

      i += 3;
    }

    inputField.value = '';
  });
}
