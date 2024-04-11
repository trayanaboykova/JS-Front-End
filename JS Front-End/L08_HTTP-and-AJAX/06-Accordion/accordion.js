document.addEventListener('DOMContentLoaded', async function() {
    const output = document.getElementById('main');
    const titlesResponse = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const titles = await titlesResponse.json();

    for (const article of titles) {
        const wrapper = document.createElement('div');
        wrapper.className = 'accordion';

        const head = document.createElement('div');
        head.className = 'head';
        head.innerHTML = `<span>${article.title}</span><button class="button" id=${article._id}>More</button>`;

        const extra = document.createElement('div');
        extra.className = 'extra';
        extra.style.display = 'none';
        const paragraph = document.createElement('p');
        extra.appendChild(paragraph);

        wrapper.appendChild(head);
        wrapper.appendChild(extra);

        head.querySelector('button').addEventListener('click', async function() {
            if(extra.style.display === 'none') {
                const detailsResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`);
                const details = await detailsResponse.json();
                paragraph.textContent = details.content;
                extra.style.display = 'block';
                this.innerText = 'Less';
            } else {
                extra.style.display = 'none';
                this.innerText = 'More';
            }
        });

        output.appendChild(wrapper);
    }
});