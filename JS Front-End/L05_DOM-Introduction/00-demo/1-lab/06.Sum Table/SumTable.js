function sumTable() {
    const tdCostElements = document.querySelectorAll('tr td:last-of-type:not(#sum)');
    const tdSumElement = document.getElementById('sum');

    tdSumElement.textContent = Array
        .from(tdCostElements)
        .reduce((sum, element) => sum + Number(element.textContent), 0);
}


