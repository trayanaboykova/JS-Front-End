function solve() {
    let selectMenuTo = document.getElementById('selectMenuTo');

    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    selectMenuTo.appendChild(binaryOption);

    let hexOption = document.createElement('option');
    hexOption.textContent = 'Hexadecimal';
    hexOption.value = 'hexadecimal';
    selectMenuTo.appendChild(hexOption);

    document.querySelector('button').addEventListener('click', onClickConvert);

    function onClickConvert() {
        let num = Number(document.getElementById('input').value);
        let result;

        if (selectMenuTo.value === 'binary') {
            result = num.toString(2);
        } else if (selectMenuTo.value === 'hexadecimal') {
            result = num.toString(16).toUpperCase();
        }
        document.getElementById('result').value = result;
    }
}