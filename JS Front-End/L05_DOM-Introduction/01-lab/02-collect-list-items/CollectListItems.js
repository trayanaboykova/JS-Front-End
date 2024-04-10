function extractText() {
    var list = document.getElementById("items");

    var items = list.getElementsByTagName("li");

    var resultTextarea = document.getElementById("result");

    var text = "";

    for (var i = 0; i < items.length; i++) {
        text += items[i].textContent + "\n";
    }
    resultTextarea.textContent = text;
}
