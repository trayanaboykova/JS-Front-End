function extract(contentId) {
    var paragraph = document.getElementById(contentId);

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
