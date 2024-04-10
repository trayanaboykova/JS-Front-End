function solve() {
    let tableElement = document.querySelector('table');
    let checkParagraphElement = document.querySelector('#check p');
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let quickCheckButton = document.querySelector('tfoot tr td button');
    let clearButton = Array.from(document.querySelectorAll('tfoot tr td button'))[1];

    quickCheckButton.addEventListener('click', function(){
        let columns = [[], [], []];
        let correctSum = true;

        for (let i = 0; i < rows.length; i++) {
            let inputs = Array.from(rows[i].querySelectorAll('td input'));
            let rowValues = inputs.map(input => Number(input.value));
            let rowSum = rowValues.reduce((a, b) => a + b, 0);

            if (rowSum !== 6) {
                correctSum = false;
                break;
            }

            for (let j = 0; j < rowValues.length; j++) {
                columns[j].push(rowValues[j]);
            }
        }

        columns.forEach(column => {
            let columnSum = column.reduce((a, b) => a + b, 0);

            if (columnSum !== 6) {
                correctSum = false;
            }
        });

        if (correctSum) {
            tableElement.style.border = "2px solid green";
            checkParagraphElement.textContent = "You solve it! Congratulations!";
            checkParagraphElement.style.color = "green";
        } else {
            tableElement.style.border = "2px solid red";
            checkParagraphElement.textContent = "NOP! You are not done yet...";
            checkParagraphElement.style.color = "red";
        }
    });

    clearButton.addEventListener('click', function() {
        rows.forEach(row => {
            let currInput = Array.from(row.querySelectorAll('td input'));
            currInput.forEach(input => input.value = '');
        });

        tableElement.style.border = '';
        checkParagraphElement.textContent = '';
    });
}