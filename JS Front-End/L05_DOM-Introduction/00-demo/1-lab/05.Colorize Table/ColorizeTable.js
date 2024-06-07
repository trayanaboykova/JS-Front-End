function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(2n)');

    // evenRowElements.forEach(element => element.style.backgroundColor = 'teal');

    for (const evenRow of evenRowElements) {
        evenRow.style.backgroundColor = 'teal'
    }
}
