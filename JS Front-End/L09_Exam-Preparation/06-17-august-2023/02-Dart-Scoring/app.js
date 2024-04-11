window.addEventListener("load", solve);

function solve() {

  const inputSelectors = {
    playerName: document.getElementById('player'),
    playerScore: document.getElementById('score'),
    round: document.getElementById('round'),
  };

  const otherSelectors = {
    addButton: document.getElementById('add-btn'),
    form: document.getElementsByTagName('form')[0],
    sureListUl: document.getElementById('sure-list'),
    scoreBoardUl: document.getElementById('scoreboard-list'),
    clearButton : document.querySelector('.clear')

  }

  otherSelectors.addButton.addEventListener('click', getFormData);

  otherSelectors.clearButton.addEventListener('click', () => location.reload())

  function getFormData(e) {
    if (e) {
      e.preventDefault();
    }
    const playerName = inputSelectors.playerName.value;
    const playerScore = inputSelectors.playerScore.value;
    const round = inputSelectors.round.value;
    if (playerName && playerScore && round) {
      const newLi = createElements('li', '', false, otherSelectors.sureListUl, '', ['dart-item']);
      const article = createElements('article', '', false, newLi);
      const playerNamePara = createElements('p', playerName, false, article);
      const playerScorePara = createElements('p', `Score: ${playerScore}`, false, article);
      const roundPara = createElements('p', `Round: ${round}`, false, article);

      const editButton = createElements('button', 'edit', false, newLi, '', ['btn', 'edit']);
      const okButton = createElements('button', 'ok', false, newLi, '', ['btn', 'ok']);

      editButton.addEventListener('click', () => {
        inputSelectors.playerName.value = playerName;
        inputSelectors.playerScore.value = playerScore;
        inputSelectors.round.value = round;
        newLi.remove();
        otherSelectors.addButton.disabled = false;
      });

      okButton.addEventListener('click', () => {
        otherSelectors.scoreBoardUl.appendChild(newLi);
        editButton.remove();
        okButton.remove();
        otherSelectors.addButton.disabled = false;
      })
      otherSelectors.addButton.disabled = true;
      //otherSelectors.form.reset();
      inputSelectors.playerName.value = '';
      inputSelectors.playerScore.value = '';
      inputSelectors.round.value = '';

    }

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
    // {src: 'link', href : 'http'}
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