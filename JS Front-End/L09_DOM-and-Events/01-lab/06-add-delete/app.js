function addItem() {
  const newItemText = document.getElementById("newItemText");
  const items = document.getElementById("items");

  const newItem = document.createElement("li");
  newItem.textContent = newItemText.value;

  const deleteLink = document.createElement("a");
  deleteLink.textContent = "[Delete]";
  deleteLink.setAttribute("href", "#");
  deleteLink.addEventListener("click", function () {
    this.parentNode.remove();
  });

  newItem.appendChild(deleteLink);
  items.appendChild(newItem);

  newItemText.value = "";
}
