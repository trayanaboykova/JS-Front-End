function lockedProfile() {
    let main = document.getElementById('main');

    main.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
            let profile = e.target.parentElement;
            let moreInformationDiv = profile.querySelector('div');

            let lockStatus = profile.querySelector('input[type=radio]:checked').value;

            if(lockStatus === 'unlock'){
                if(e.target.textContent === 'Show more'){
                    moreInformationDiv.style.display = 'block';
                    e.target.textContent = 'Hide it';
                } else {
                    moreInformationDiv.style.display = 'none';
                    e.target.textContent = 'Show more';
                }
            }
        }
    });
}