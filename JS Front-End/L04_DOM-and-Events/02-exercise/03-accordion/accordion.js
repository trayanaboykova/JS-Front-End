function toggle() {
    const extraDiv = document.getElementById('extra');
    const buttonSpan = document.querySelector('.button');
    
    if (extraDiv.style.display === 'none') {
      extraDiv.style.display = 'block';
      buttonSpan.textContent = 'Less';
    } else {
      extraDiv.style.display = 'none';
      buttonSpan.textContent = 'More';
    }
  }
  