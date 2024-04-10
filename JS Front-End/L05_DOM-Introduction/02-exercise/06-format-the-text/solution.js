function solve() {
    let textArea = document.getElementById('input');
    let outputDiv = document.getElementById('output');
    let sentences = textArea.value.split('.').filter(s => s.trim() !== '');

    outputDiv.innerHTML = '';

    for (let i = 0; i < sentences.length; i += 3) {
        let paragraphText = sentences.slice(i, i + 3).join('. ') + '.';
        let paragraphElement = document.createElement('p');
        paragraphElement.textContent = paragraphText;
        outputDiv.appendChild(paragraphElement);
    }
    textArea.value = '';
}