const baseUrl = 'http://localhost:3030/jsonstore/games';
const loadButtonElement = document.getElementById('load-games');
const addButtonElement = document.getElementById('add-game');
const editButtonElement = document.getElementById('edit-game');
const gamesListElement = document.getElementById('games-list');
const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');
const formElement = document.querySelector('form');

const loadGames = async () => {
    try {
        // Fetch all games
        const response = await fetch(baseUrl);
        const data = await response.json();

        // Clear games list element
        gamesListElement.innerHTML = '';

        // Create game element for each
        for (const game of Object.values(data)) {
            const changeButtonElement = document.createElement('button');
            changeButtonElement.textContent = 'Change';
            changeButtonElement.classList.add('change-btn');

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.textContent = 'Delete';
            deleteButtonElement.classList.add('delete-btn');

            const buttonContainerElement = document.createElement('div');
            buttonContainerElement.id = 'game-buttons';
            buttonContainerElement.appendChild(changeButtonElement);
            buttonContainerElement.appendChild(deleteButtonElement);

            const namePElement = document.createElement('p');
            namePElement.textContent = game.name;

            const typePElement = document.createElement('p');
            typePElement.textContent = game.type;

            const playersPElement = document.createElement('p');
            playersPElement.textContent = game.players;

            const gameElement = document.createElement('div');
            gameElement.classList.add('board-game');
            gameElement.appendChild(namePElement);
            gameElement.appendChild(typePElement);
            gameElement.appendChild(playersPElement);
            gameElement.appendChild(buttonContainerElement);

            // Attach game to DOM
            gamesListElement.appendChild(gameElement);

            // Attach event listeners
            changeButtonElement.addEventListener('click', () => handleEditGame(game));
            deleteButtonElement.addEventListener('click', () => handleDeleteGame(game));
        }
    } catch (error) {
        console.error('Error loading games:', error);
    }
};

const handleEditGame = (game) => {
    // Save current game id
    formElement.setAttribute('data-id', game._id);

    // Populate input fields
    nameInputElement.value = game.name;
    typeInputElement.value = game.type;
    playersInputElement.value = game.players;

    // Activate edit button
    editButtonElement.removeAttribute('disabled');

    // Deactivate add button
    addButtonElement.setAttribute('disabled', 'disabled');
};

const handleDeleteGame = async (game) => {
    try {
        // Delete game
        await fetch(`${baseUrl}/${game._id}`, { method: 'DELETE' });

        // Reload games
        await loadGames();
    } catch (error) {
        console.error('Error deleting game:', error);
    }
};

const handleEditButtonClick = async () => {
    try {
        // Get data from inputs
        const { name, type, players } = getInputData();

        // Get game id
        const gameId = formElement.getAttribute('data-id');

        // Make a PUT request
        const response = await fetch(`${baseUrl}/${gameId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ _id: gameId, name, type, players }),
        });

        if (!response.ok) {
            throw new Error('Failed to update game');
        }

        // Clear current game id
        formElement.removeAttribute('data-id');

        // Clear input fields
        clearInputData();

        // Reload games
        await loadGames();
    } catch (error) {
        console.error('Error editing game:', error);
    }
};

const handleAddButtonClick = async () => {
    try {
        // Get input data
        const newGame = getInputData();

        // Create POST request
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newGame),
        });

        if (!response.ok) {
            throw new Error('Failed to add game');
        }

        // Clear input fields
        clearInputData();

        // Reload games
        await loadGames();
    } catch (error) {
        console.error('Error adding game:', error);
    }
};

const getInputData = () => {
    const name = nameInputElement.value;
    const type = typeInputElement.value;
    const players = playersInputElement.value;
    return { name, type, players };
};

const clearInputData = () => {
    nameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
};

// Event listeners
loadButtonElement.addEventListener('click', loadGames);
editButtonElement.addEventListener('click', handleEditButtonClick);
addButtonElement.addEventListener('click', handleAddButtonClick);
