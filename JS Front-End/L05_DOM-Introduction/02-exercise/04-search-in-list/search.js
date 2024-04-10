function search() {
    let searchText = document.getElementById('searchText').value.toLowerCase();
    let towns = Array.from(document.querySelectorAll('#towns li'));

    towns.forEach(t => t.style.fontWeight = 'normal');

    let matches = towns.filter(t => t.textContent.toLowerCase().includes(searchText)).map(t => t.style.fontWeight = 'bold').length;

    document.getElementById('result').textContent = `${matches} matches found`;
}