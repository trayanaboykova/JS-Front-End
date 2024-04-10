function calc() {
    var num1Field = document.getElementById("num1");
    var num2Field = document.getElementById("num2");
    var sumField = document.getElementById("sum");

    var num1 = parseFloat(num1Field.value);
    var num2 = parseFloat(num2Field.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        sumField.value = sum;
    } else {
        sumField.value = "Invalid input";
    }
}
