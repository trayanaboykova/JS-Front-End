function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      Array.from(document.querySelectorAll('.container tbody tr'), row => {
         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }
      });
      let searchText = document.getElementById('searchField').value.toLowerCase();

      let rows = Array.from(document.querySelectorAll('.container tbody tr'));

      let matches = rows.filter(row => Array.from(row.children).some(td => td.textContent.toLowerCase().includes(searchText)));
      matches.forEach(row => row.classList.add('select'));

      document.getElementById('searchField').value = '';
   }
}