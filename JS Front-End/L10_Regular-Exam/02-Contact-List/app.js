window.addEventListener("load", solve);
function solve() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const categorySelect = document.getElementById('category');
    const addButton = document.getElementById('add-btn');
    const checkList = document.getElementById('check-list');
    const contactList = document.getElementById('contact-list');

    addButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const category = categorySelect.value.trim();

        // Ensure all fields are filled
        if (!name || !phone || !category) {
            return;
        }

        // Create list item and article elements
        const li = document.createElement('li');
        const article = document.createElement('article');
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        // Set class for styling
        li.className = 'contact-item';

        // Create and append name, phone, and category paragraphs
        article.appendChild(createParagraph(`name:${name}`));
        article.appendChild(createParagraph(`phone:${phone}`));
        article.appendChild(createParagraph(`category:${category.toLowerCase()}`));

        // Append article to li
        li.appendChild(article);

        // Create edit and save buttons
        const editButton = createButton('edit-btn');
        editButton.textContent = 'Edit';
        const saveButton = createButton('save-btn');
        saveButton.textContent = 'Save';
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(saveButton);

        // Append buttonsDiv to li
        li.appendChild(buttonsDiv);

        let deleteButtonExists = false;

        // Edit button functionality
        editButton.addEventListener('click', function() {
            nameInput.value = name;
            phoneInput.value = phone;
            categorySelect.value = category;
            checkList.removeChild(li);
        });

        // Save button functionality
        saveButton.addEventListener('click', function() {
            if (!deleteButtonExists) {
                const deleteButton = createButton('del-btn');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', function() {
                    contactList.removeChild(li);
                });
                buttonsDiv.appendChild(deleteButton);
                deleteButtonExists = true;
            }

            // Remove edit and save buttons from buttonsDiv
            buttonsDiv.removeChild(editButton);
            buttonsDiv.removeChild(saveButton);

            // Move li to contactList
            contactList.appendChild(li);
        });

        // Append li to checkList
        checkList.appendChild(li);

        // Clear input fields
        nameInput.value = '';
        phoneInput.value = '';
        categorySelect.selectedIndex = 0;
    });

    function createParagraph(text) {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    }

    function createButton(className) {
        const button = document.createElement('button');
        button.className = className;
        return button;
    }
}