function toggle() {
    let extraContent = document.getElementById('extra');
    let moreLessButton = document.querySelector('.button');

    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
        moreLessButton.textContent = 'Less';
    } else {
        extraContent.style.display = 'none';
        moreLessButton.textContent = 'More';
    }
}