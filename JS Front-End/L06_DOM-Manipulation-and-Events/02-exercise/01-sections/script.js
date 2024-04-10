function create(strings) {
   const content = document.getElementById('content');

   for (let i = 0; i < strings.length; i++) {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = strings[i];
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      div.addEventListener('click', () => {
         paragraph.style.display = 'block';
      });
      content.appendChild(div);
   }
}
