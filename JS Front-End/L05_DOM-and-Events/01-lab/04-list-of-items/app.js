function addItem() {
    // Get the input field and the list
    var input = document.getElementById("newItemText");
    var list = document.getElementById("items");
    
    // Create a new list item with the input text
    var item = document.createElement("li");
    var text = document.createTextNode(input.value);
    item.appendChild(text);
    
    // Append the new list item to the list
    list.appendChild(item);
    
    // Clear the input field
    input.value = "";
  }
  