function lockedProfile() {
    const profiles = document.getElementsByClassName('profile');
    
    for (let i = 0; i < profiles.length; i++) {
      const profile = profiles[i];
      const button = profile.querySelector('button');
      const lock = profile.querySelector(`input[name="user${i + 1}Locked"]`);
      const hiddenFields = profile.querySelector(`#user${i + 1}HiddenFields`);
      
      button.addEventListener('click', function() {
        if (!lock.checked) {
          return;
        }
        
        if (button.textContent === 'Show more') {
          hiddenFields.style.display = 'block';
          button.textContent = 'Hide it';
        } else {
          hiddenFields.style.display = 'none';
          button.textContent = 'Show more';
        }
      });
    }
  }
  