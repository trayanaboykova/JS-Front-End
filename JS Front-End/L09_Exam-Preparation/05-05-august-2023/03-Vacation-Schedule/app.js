window.addEventListener('load', solve);

function solve() {

    BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const inputSelectors = {
        nameInput: document.getElementById('name'),
        numDaysInput: document.getElementById('num-days'),
        fromDateInput: document.getElementById('from-date'),
    }

    const otherSelectors = {
        loadVacationButton: document.getElementById('load-vacations'),
        addVacationButton: document.getElementById('add-vacation'),
        editVacationButton: document.getElementById('edit-vacation'),
        listDiv: document.getElementById('list')
    };

    otherSelectors.loadVacationButton.addEventListener('click', loadAllCourses);

    otherSelectors.addVacationButton.addEventListener('click', addVacation);
    otherSelectors.editVacationButton.addEventListener('click', editVacation);


    let editVacationButtonId = null;
    function loadAllCourses(e) {
        if (e) {
            e.preventDefault();
        }
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                otherSelectors.listDiv.innerHTML = '';
                for (const { name, days, date, _id } of Object.values(data)) {

                    const containerDiv = createElements('div', '', false, otherSelectors.listDiv, _id, ['container']);
                    const nameH2 = createElements('h2', name, false, containerDiv);
                    const dateH3 = createElements('h3', date, false, containerDiv);
                    const daysH3 = createElements('h3', days, false, containerDiv);
                    const changeButton = createElements('button', 'Change', false, containerDiv, '', ['change-btn']);
                    const doneButton = createElements('button', 'Done', false, containerDiv, '', ['done-btn']);
                    otherSelectors.editVacationButton.disabled = true;

                    changeButton.addEventListener('click', (e) => {
                        inputSelectors.nameInput.value = name;
                        inputSelectors.numDaysInput.value = days;
                        inputSelectors.fromDateInput.value = date;
                        editVacationButtonId = e.currentTarget.parentElement.id;
                        containerDiv.remove();
                        otherSelectors.editVacationButton.disabled = false;
                        otherSelectors.addVacationButton.disabled = true;

                    });

                    doneButton.addEventListener('click', (e) => {
                        const id = e.currentTarget.parentElement.id;
                        console.log(id)
                        httpHeaders = {
                            method: 'DELETE'
                        }
                        fetch(`${BASE_URL}${id}`, httpHeaders)
                            .then((res) => res.json())
                            .then(() => loadAllCourses())
                    })

                }
            })
            .catch((err) => console.log(err));




    }

    function addVacation(e) {
        if (e) {
            e.preventDefault();
        }
        const { nameInput, numDaysInput, fromDateInput } = inputSelectors;
        console.log(numDaysInput.value)
        if (Object.values(inputSelectors).every(x => x.value !== '')) {

            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({
                    name: nameInput.value,
                    days: numDaysInput.value,
                    date: fromDateInput.value,
                })
            };

            fetch(BASE_URL, httpHeaders)
                .then((res) => res.json())
                .then(() => loadAllCourses())

            Object.values(inputSelectors).map(x => x.value = '');
        }

    }

    function editVacation(e) {
        if (e) {
            e.preventDefault();
        }
        const { nameInput, numDaysInput, fromDateInput } = inputSelectors;
        if (Object.values(inputSelectors).every(x => x.value !== '')) {
            const httpHeaders = {
                method: 'PUT',
                body: JSON.stringify({
                    name: nameInput.value,
                    days: numDaysInput.value,
                    date: fromDateInput.value,
                    _id : editVacationButtonId
                })
            }
            fetch(`${BASE_URL}${editVacationButtonId}`, httpHeaders)
                .then((res) => res.json())
                .then(() => loadAllCourses())
            otherSelectors.editVacationButton.disabled = true;
            otherSelectors.addVacationButton.disabled = false;

            Object.values(inputSelectors).map(x => x.value = '');
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