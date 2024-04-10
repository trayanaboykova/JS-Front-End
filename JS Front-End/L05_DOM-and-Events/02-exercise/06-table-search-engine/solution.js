function solve() {
   const searchBtn = document.getElementById('searchBtn');
   const searchField = document.getElementById('searchField');
   const rows = document.querySelectorAll('tbody tr');
 
   searchBtn.addEventListener('click', () => {
     const searchText = searchField.value.toLowerCase().trim();
 
     for (let i = 0; i < rows.length; i++) {
       const row = rows[i];
       row.classList.remove('select');
       if (searchText) {
         const cells = row.querySelectorAll('td');
         for (let j = 0; j < cells.length; j++) {
           const cell = cells[j];
           if (cell.textContent.toLowerCase().includes(searchText)) {
             row.classList.add('select');
             break;
           }
         }
       }
     }
 
     searchField.value = '';
   });
 }
 