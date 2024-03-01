function extractText() {
    // Get the list and the textarea
    var list = document.getElementById("items");
    var textarea = document.getElementById("result");
    
    // Loop through each list item and add its text to the textarea
    for (var i = 0; i < list.children.length; i++) {
      var item = list.children[i];
      var text = item.textContent || item.innerText;
      textarea.value += text.trim() + "\n";
    }
  }
  