function sumTable() {
    var table = document.querySelector("table");

    var rows = table.getElementsByTagName("tr");

    var sum = 0;

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var value = parseFloat(cells[cells.length - 1].textContent);

        if (!isNaN(value)) {
            sum += value;
        }
    }
    document.getElementById("sum").textContent = sum.toFixed(2);
}
