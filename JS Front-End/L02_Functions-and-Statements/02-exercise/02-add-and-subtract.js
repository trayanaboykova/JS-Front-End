  function addAndSubtract(num1, num2, num3) {
    console.log(subtract(num3));

    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(num3) {
        return sum(num1, num2) - num3;
    }
}