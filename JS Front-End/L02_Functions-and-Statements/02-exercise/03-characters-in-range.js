function charactersInRange(firstSymbol, secondSymbol) {
    let first = Math.min(firstSymbol.charCodeAt(0), secondSymbol.charCodeAt(0));
    let last = Math.max(firstSymbol.charCodeAt(0), secondSymbol.charCodeAt(0));
    let output = "";
    for (let i = first + 1; i < last; i++) {
        let currentSymbol = String.fromCharCode(i);
        output += `${currentSymbol} `;
    }
    console.log(output)
}
