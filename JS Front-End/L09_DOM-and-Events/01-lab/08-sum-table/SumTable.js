function sumTable() {
  // Find the first table in the document
  const table = document.getElementsByTagName('table')[0];

  // Get the rows in the table body
  const rows = Array.from(table.tBodies[0].rows);

  // Initialize the sum variable
  let sum = 0;

  // Loop through each row and add the value in the last cell to the sum
  for (let i = 0; i < rows.length; i++) {
    const rowCells = Array.from(rows[i].cells);
    sum += parseFloat(rowCells[rowCells.length - 1].textContent) || 0;
  }

  // Display the sum in the element with ID "sum"
  const sumElement = document.getElementById('sum');
  sumElement.textContent = sum.toFixed(2);
}
