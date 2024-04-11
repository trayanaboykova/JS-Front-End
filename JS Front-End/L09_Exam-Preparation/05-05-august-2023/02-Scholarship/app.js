window.addEventListener("load", solve);

function solve() {

  const inputSelectors = {
    studentNameInput: document.getElementById('student'),
    universityInput: document.getElementById('university'),
    scoreInput: document.getElementById('score')
  };

  const otherSelectors = {
    previewUl: document.getElementById('preview-list'),
    candidatesUl: document.getElementById('candidates-list'),
    nextButton: document.getElementById('next-btn')
  }
  otherSelectors.nextButton.addEventListener('click', getFormInfo);

  function getFormInfo(e) {
    const studentName = inputSelectors.studentNameInput.value;
    const university = inputSelectors.universityInput.value;
    const score = inputSelectors.scoreInput.value;
    if (studentName && university && score) {
      const newLi = createElements('li', '', false, otherSelectors.previewUl, '', ['application']);
      const article = createElements('article', '', false, newLi);
      const h4 = createElements('h4', studentName, false, article);
      const universityPara = createElements('p', `University: ${university}`, false, article);
      const scorePara = createElements('p', `Score: ${score}`, false, article);
      const editButton = createElements('button', 'edit', false, newLi, '', ['action-btn', 'edit']);
      const applyButton = createElements('button', 'apply', false, newLi, '', ['action-btn', 'apply']);

      editButton.addEventListener('click', () => {
        inputSelectors.studentNameInput.value = studentName;
        inputSelectors.universityInput.value = university;
        inputSelectors.scoreInput.value = score;
        newLi.remove();
        otherSelectors.nextButton.disabled = false;
      });

      applyButton.addEventListener('click', () => {
        otherSelectors.candidatesUl.appendChild(newLi);
        editButton.remove();
        applyButton.remove();
        otherSelectors.nextButton.disabled = false;
      })
    }
    inputSelectors.studentNameInput.value = '';
    inputSelectors.universityInput.value = '';
    inputSelectors.scoreInput.value = '';
    e.currentTarget.disabled = true;
  }

  function createElements(type, contentOrValue, useInnerHTML, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);
    if (contentOrValue && useInnerHTML) {
      htmlElement.innerHTML = contentOrValue;
    }
    else {
      if (contentOrValue && type === 'input') {
        htmlElement.value = contentOrValue;
      }
      if (contentOrValue && type !== 'input') {
        htmlElement.textContent = contentOrValue;
      }
    }

    if (id) {
      htmlElement.id = id;
    }
    if (classes) {
      htmlElement.classList.add(...classes)
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key])
      }
    }
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
    return htmlElement;
  }

}