function organizeBookshelf(inputData) {
    const shelves = {};

    for (let data of inputData) {
        if (data.includes('->')) { // Shelf data line
            const [shelfId, shelfGenre] = data.split(' -> ');
            if (!shelves[shelfId]) {
                shelves[shelfId] = { genre: shelfGenre, books: [] };
            }
        } else { // Book data line
            const [bookTitle, bookAuthor, bookGenre] = data.match(/(.+): (.+), (.+)/).slice(1);

            // Search for a suitable shelf for the book
            for (const shelf of Object.values(shelves)) {
                if (shelf.genre === bookGenre) {
                    shelf.books.push(`${bookTitle}: ${bookAuthor}`);
                    break;
                }
            }
        }
    }

    // Sort books within each shelf by title
    for (const shelf of Object.values(shelves)) {
        shelf.books.sort();
    }

    // Sort shelves by number of books in descending order
    const sortedShelves = Object.entries(shelves).sort((a, b) => b[1].books.length - a[1].books.length);

    // Format the output
    let output = '';
    for (const [shelfId, shelf] of sortedShelves) {
        output += `${shelfId} ${shelf.genre}: ${shelf.books.length}\n`;
        for (const book of shelf.books) {
            output += `--> ${book}\n`;
        }
    }

    return output.trim();
}

