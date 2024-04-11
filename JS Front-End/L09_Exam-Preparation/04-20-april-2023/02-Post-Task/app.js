window.addEventListener("load", solve);

function solve() {
    const publishButton = document.getElementById('publish-btn');
    publishButton.addEventListener('click', (e) => {
        const titleElement = document.getElementById('task-title');
        const categoryElement = document.getElementById('task-category');
        const contentElement = document.getElementById('task-content');

        const title = titleElement.value;
        const category = categoryElement.value;
        const content = contentElement.value;

        if (!title || !category || !content) {
            return;
        }

        const titleHeaderElement = document.createElement('h4');
        titleHeaderElement.textContent = title;

        const categoryParagraphElement = document.createElement('p');
        categoryParagraphElement.textContent = `Category: ${category}`;

        const contentParagrapthElement = document.createElement('p');
        contentParagrapthElement.textContent = `Content: ${content}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(titleHeaderElement);
        articleElement.appendChild(categoryParagraphElement);
        articleElement.appendChild(contentParagrapthElement);

        const buttonElement = document.createElement('button');
        buttonElement.classList.add('action-btn');

        const buttonEditElement = buttonElement.cloneNode();
        buttonEditElement.classList.add('edit');
        buttonEditElement.textContent = 'Edit';

        const buttonPostElement = buttonElement.cloneNode();
        buttonPostElement.classList.add('post');
        buttonPostElement.textContent = 'Post';

        const listItemElement = document.createElement('li');
        listItemElement.className = 'rpost';
        listItemElement.appendChild(articleElement);
        listItemElement.appendChild(buttonEditElement);
        listItemElement.appendChild(buttonPostElement);

        const reviewListElement = document.getElementById('review-list');
        reviewListElement.appendChild(listItemElement);

        const publishedListElement = document.getElementById('published-list');

        titleElement.value = '';
        categoryElement.value = '';
        contentElement.value = '';

        buttonEditElement.addEventListener('click', (e) => {
            titleElement.value = title;
            categoryElement.value = category;
            contentElement.value = content;

            listItemElement.remove();
        });

        buttonPostElement.addEventListener('click', (e) => {
            buttonEditElement.remove();
            buttonPostElement.remove();

            publishedListElement.appendChild(listItemElement);
        });
    });
}