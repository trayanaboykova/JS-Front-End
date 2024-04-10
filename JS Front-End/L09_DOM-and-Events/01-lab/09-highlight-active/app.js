function focused() {
  const inputFields = document.getElementsByTagName("input");

  // Loop through all input fields and attach the focus and blur event listeners
  for (let i = 0; i < inputFields.length; i++) {
    const input = inputFields[i];

    // Add focus listener to highlight the input's containing div
    input.addEventListener("focus", function () {
      const containingDiv = this.parentElement;
      containingDiv.classList.add("focused");
    });

    // Add blur listener to remove the highlighting from the input's containing div
    input.addEventListener("blur", function () {
      const containingDiv = this.parentElement;
      containingDiv.classList.remove("focused");
    });
  }
}
