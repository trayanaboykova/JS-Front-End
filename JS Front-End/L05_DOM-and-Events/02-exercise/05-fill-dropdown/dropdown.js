function addItem() {
    const newItemText = document.getElementById("newItemText").value;
    const newItemValue = document.getElementById("newItemValue").value;
    const selectMenu = document.getElementById("menu");
  
    const newOption = document.createElement("option");
    newOption.textContent = newItemText;
    newOption.value = newItemValue;
  
    selectMenu.appendChild(newOption);
  
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
  }
  