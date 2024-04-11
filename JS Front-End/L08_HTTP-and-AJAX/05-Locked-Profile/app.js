async function lockedProfile() {
    const baseURL = 'http://localhost:3030/jsonstore/advanced/profiles';

    const profilesResponse = await fetch(baseURL);
    const profiles = await profilesResponse.json();

    document.getElementById('main').innerHTML = '';

    let index = 0;
    Object.entries(profiles).forEach(([profileID, profileInfo]) => {
        const divProfile = document.createElement('div');
        divProfile.className = 'profile';
        divProfile.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${index + 1}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${index + 1}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${index + 1}Username" value="${profileInfo.username}" disabled readonly />
            <div id="user${index + 1}HiddenFields" style="display:none">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${index + 1}Email" value="${profileInfo.email}" disabled readonly />
                <label>Age:</label>
                <input type="email" name="user${index + 1}Age" value="${profileInfo.age}" disabled readonly />
            </div>
            <button id="user${index + 1}Button">Show more</button>
        `;

        document.getElementById('main').appendChild(divProfile);

        document.getElementById(`user${index + 1}Button`).addEventListener('click', () => {
            const lockRadioButton = divProfile.querySelector('input[type="radio"][value="lock"]:checked');
            const hiddenFields = document.getElementById(`user${index + 1}HiddenFields`);
            const btnText = lockRadioButton ? 'Show more' : 'Hide it';
            hiddenFields.style.display = lockRadioButton ? 'none' : 'block';
            document.getElementById(`user${index +1}Button`).textContent = btnText;
        });

        index++;
    });
}