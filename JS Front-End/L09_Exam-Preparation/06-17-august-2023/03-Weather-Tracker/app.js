window.addEventListener('load', solve);

function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const inputSelectors = {
        locationInput: document.getElementById('location'),
        temperatureInput: document.getElementById('temperature'),
        dateInput: document.getElementById('date'),
    }

    const otherSelectors = {
        loadHistoryButton: document.getElementById('load-history'),
        addWeatherButton: document.getElementById('add-weather'),
        editWeatherButton: document.getElementById('edit-weather'),
        listDiv: document.getElementById('list')
    }

    otherSelectors.loadHistoryButton.addEventListener('click', loadHistory);
    otherSelectors.addWeatherButton.addEventListener('click', addWeather);
    otherSelectors.editWeatherButton.addEventListener('click', editWeather);

    let editWeatherButtonId = null;

    function loadHistory(e) {
        if (e) {
            e.preventDefault();
        }
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                otherSelectors.listDiv.innerHTML = '';
                for (const { location, temperature, date, _id } of Object.values(data)) {
                    const containerDiv = createElements('div', '', false, otherSelectors.listDiv, _id, ['container']);
                    const townH2 = createElements('h2', location, false, containerDiv);
                    const dateH3 = createElements('h3', date, false, containerDiv);
                    const temperatureH3 = createElements('h3', temperature, false, containerDiv, 'celsius');
                    const buttonsContainer = createElements('div', '', false, containerDiv, '', ['buttons-container']);
                    const changeButton = createElements('button', 'Change', false, buttonsContainer, '', ['change-btn']);
                    const deleteButton = createElements('button', 'Delete', false, buttonsContainer, '', ['delete-btn']);
                    otherSelectors.editWeatherButton.disabled = true;

                    changeButton.addEventListener('click', (e) => {
                        inputSelectors.locationInput.value = location;
                        inputSelectors.temperatureInput.value = temperature;
                        inputSelectors.dateInput.value = date;
                        editWeatherButtonId = e.currentTarget.parentElement.parentElement.id;
                        containerDiv.remove();
                        otherSelectors.editWeatherButton.disabled = false;
                        otherSelectors.addWeatherButton.disabled = true;

                    });

                    deleteButton.addEventListener('click', (e)=>{
                        const id = e.currentTarget.parentElement.parentElement.id;
                        const httpHeaders = {
                            method : 'DELETE'
                        };
                        fetch(`${BASE_URL}${id}`, httpHeaders)
                            .then((res)=> res.json())
                            .then(()=> loadHistory())
                    })


                }
            })
    }

    function addWeather(e) {
        if (e) {
            e.preventDefault();
        }
        const { locationInput, temperatureInput, dateInput } = inputSelectors;

        if (Object.values(inputSelectors).every(x => x.value !== '')) {

            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({
                    location: locationInput.value,
                    temperature: temperatureInput.value,
                    date: dateInput.value
                })
            }

            fetch(BASE_URL, httpHeaders)
                .then((res) => res.json())
                .then(() => loadHistory())

            Object.values(inputSelectors).map(x => x.value = '');
        }

    }

    function editWeather(e) {
        if (e) {
            e.preventDefault();
        }
        const { locationInput, temperatureInput, dateInput } = inputSelectors;
        if (Object.values(inputSelectors).every(x => x.value !== '')) {
            const httpHeaders = {
                method: 'PUT',
                body: JSON.stringify({
                    location : locationInput.value,
                    temperature: temperatureInput.value,
                    date : dateInput.value,
                    _id : editWeatherButtonId
                })
            };

            fetch(`${BASE_URL}${editWeatherButtonId}`, httpHeaders)
                .then((res)=> res.json())
                .then(()=> loadHistory())

            otherSelectors.editWeatherButton.disabled = true;
            otherSelectors.addWeatherButton.disabled = false;

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