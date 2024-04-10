function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', function() {
        let text = textAreas[0].value;
        let encodedText = '';

        for (let i = 0; i < text.length; i++) {
            encodedText += String.fromCharCode(text[i].charCodeAt(0) + 1);
        }

        textAreas[0].value = '';
        textAreas[1].value = encodedText;
    });

    buttons[1].addEventListener('click', function() {
        let text = textAreas[1].value;
        let decodedText = '';

        for (let i = 0; i < text.length; i++) {
            decodedText += String.fromCharCode(text[i].charCodeAt(0) - 1);
        }

        textAreas[1].value = decodedText;
    });
}