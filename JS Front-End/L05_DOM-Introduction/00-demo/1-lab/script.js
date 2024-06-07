console.log('Hello from an external javascript!');

const textInputElement = document.getElementById('uName');
console.log(textInputElement);

setTimeout(() => {
    textInputElement.value = 'Ivaylo'
}, 2000);

const fancyInputElements = document.getElementsByClassName('fancy-input');
console.log(fancyInputElements);

// Get first input type text
const firstInputTextElement = document.querySelector('.fancy-input[type=text]');
console.log(firstInputTextElement);

// Get all input type text elements
const inputTextElements = document.querySelectorAll('.fancy-input[type=text]');
console.log(inputTextElements);

// NodeList vs HTMLCollection
console.log(' NodeList vs HTMLCollection');
const contentStaticNodeList = document.querySelectorAll('#content > *');
const contentElement = document.getElementById('content');
const contentLiveNodeList = contentElement.childNodes;
const contentLiveHtmlCollection = contentElement.children;
console.log(contentStaticNodeList);
console.log(contentLiveNodeList);
console.log(contentLiveHtmlCollection);

// Remove element TO BE CONTINUE...
setTimeout(() => {
    // console.log(contentLiveHtmlCollection[1]);
    // contentLiveNodeList[1] = firstInputTextElement;
    // contentStaticNodeList
}, 3000);

// Iterate collections
console.log('Iterate html collection');
for (const htmlElement of contentLiveHtmlCollection) {
    console.log(htmlElement);
}

console.log('ITerate node list');
for (const nodeElement of contentLiveNodeList) {
    console.log(nodeElement);
}

// Use foreach
contentLiveNodeList.forEach(nodeElement => console.log(nodeElement));

// Convert htmlCollection to array
let htmlElementsArray = Array.from(contentLiveHtmlCollection)
// let htmlElementsArray = [...contentLiveHtmlCollection];
console.log(htmlElementsArray);

// Convert nodeList to array
// let htmlNodesArray = Array.from(contentLiveNodeList);
let htmlNodesArray = [...contentLiveNodeList];
console.log(htmlNodesArray);


// Get parent
console.log(firstInputTextElement.parentElement);
console.log(firstInputTextElement.parentNode);
