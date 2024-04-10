function calc() {
    // Get the values of the two input fields
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    
    // Add the numbers together
    var sum = num1 + num2;
    
    // Display the sum in the third input field
    document.getElementById("sum").value = sum;
  }
  