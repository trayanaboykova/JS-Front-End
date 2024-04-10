function deleteByEmail() {
    // Get the input field value and the table
    var input = document.querySelector('input[name="email"]');
    var table = document.getElementById("customers");
    
    // Loop through each row in the table
    for (var i = 1; i < table.rows.length; i++) {
      var row = table.rows[i];
      
      // Get the email value in the current row
      var email = row.cells[1].textContent.trim();
      
      // If the email matches the input value, delete the row and set the result message
      if (email === input.value) {
        table.deleteRow(i);
        document.getElementById("result").textContent = "Deleted.";
        return;
      }
    }
    
    // If the email was not found, display an error message
    document.getElementById("result").textContent = "Not found.";
  }
  