const baseUrl = 'http://localhost:3030/jsonstore/tasks';
const loadButtonElement = document.getElementById('load-meals');
const addButtonElement = document.getElementById('add-meal');
const editButtonElement = document.getElementById('edit-meal');
const mealListElement = document.getElementById('list');
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');
const formElement = document.getElementById('form');

const loadMeals = async () => {
    try {
        // Fetch all meals
        const response = await fetch(baseUrl);
        const data = await response.json();

        // Clear meal list element
        mealListElement.innerHTML = '';

        // Create meal element for each
        for (const meal of Object.values(data)) {
            const changeButtonElement = document.createElement('button');
            changeButtonElement.textContent = 'Change';
            changeButtonElement.classList.add('change-meal');

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.textContent = 'Delete';
            deleteButtonElement.classList.add('delete-meal');

            const buttonContainerElement = document.createElement('div');
            buttonContainerElement.id = 'meal-buttons';
            buttonContainerElement.appendChild(changeButtonElement);
            buttonContainerElement.appendChild(deleteButtonElement);

            const foodH2Element = document.createElement('h2');
            foodH2Element.textContent = meal.food;

            const timeH3Element = document.createElement('h3');
            timeH3Element.textContent = meal.time;

            const caloryH3Element = document.createElement('h3');
            caloryH3Element.textContent = meal.calories;

            const mealElement = document.createElement('div');
            mealElement.classList.add('meal');
            mealElement.appendChild(foodH2Element);
            mealElement.appendChild(timeH3Element);
            mealElement.appendChild(caloryH3Element);
            mealElement.appendChild(buttonContainerElement);

            // Attach meal to dom
            mealListElement.appendChild(mealElement);

            // Attach event listeners
            changeButtonElement.addEventListener('click', () => handleEditMeal(meal));
            deleteButtonElement.addEventListener('click', () => handleDeleteMeal(meal));
        }
    } catch (error) {
        console.error('Error loading meals:', error);
    }
};

const handleEditMeal = (meal) => {
    // Save current meal id
    formElement.setAttribute('data-id', meal._id);

    // Populate input fields
    foodInputElement.value = meal.food;
    timeInputElement.value = meal.time;
    caloriesInputElement.value = meal.calories;

    // Activate edit button
    editButtonElement.removeAttribute('disabled');

    // Deactivate add button
    addButtonElement.setAttribute('disabled', 'disabled');
};

const handleDeleteMeal = async (meal) => {
    try {
        // Delete meal
        await fetch(`${baseUrl}/${meal._id}`, { method: 'DELETE' });

        // Reload meals
        await loadMeals();
    } catch (error) {
        console.error('Error deleting meal:', error);
    }
};

const handleEditButtonClick = async () => {
    try {
        // Get data from inputs
        const { food, calories, time } = getInputData();

        // Get meal id
        const mealId = formElement.getAttribute('data-id');

        // Make a PUT request
        const response = await fetch(`${baseUrl}/${mealId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ _id: mealId, food, calories, time }),
        });

        if (!response.ok) {
            throw new Error('Failed to update meal');
        }

        // Clear current meal id
        formElement.removeAttribute('data-id');

        // Clear input fields
        clearInputData();

        // Reload meals
        await loadMeals();
    } catch (error) {
        console.error('Error editing meal:', error);
    }
};

const handleAddButtonClick = async () => {
    try {
        // Get input data
        const newMeal = getInputData();

        // Create POST request
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newMeal),
        });

        if (!response.ok) {
            throw new Error('Failed to add meal');
        }

        // Clear input fields
        clearInputData();

        // Reload meals
        await loadMeals();
    } catch (error) {
        console.error('Error adding meal:', error);
    }
};

const getInputData = () => {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;
    return { food, time, calories };
};

const clearInputData = () => {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
};

// Event listeners
loadButtonElement.addEventListener('click', loadMeals);
editButtonElement.addEventListener('click', handleEditButtonClick);
addButtonElement.addEventListener('click', handleAddButtonClick);
