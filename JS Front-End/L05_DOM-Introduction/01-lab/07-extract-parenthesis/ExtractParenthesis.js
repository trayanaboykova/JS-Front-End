function extract(content) {
    var paragraph = document.getElementById(content);

    var text = paragraph.textContent;

    var regex = /\((.*?)\)/g;

    var matches = [];

    var match;
    while ((match = regex.exec(text)) !== null) {
        matches.push(match[1]);
    }
    var result = matches.join("; ");
    return result;
}




