function solve() {
    let text = document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value;
    let resultField = document.getElementById('result');

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    text = text.toLowerCase().split(" ");
    if(namingConvention === "Camel Case"){
        text[0] = text[0].toLowerCase();
        for(let i = 1; i < text.length; i++){
            text[i] = toTitleCase(text[i]);
        }
    }
    else if(namingConvention === "Pascal Case"){
        for(let i = 0; i < text.length; i++){
            text[i] = toTitleCase(text[i]);
        }
    }
    else {
        resultField.textContent = "Error!";
        return;
    }

    resultField.textContent = text.join("");
}