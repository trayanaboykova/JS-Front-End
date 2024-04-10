function storeUniqueSequences(input) {
    const uniqueArrays = new Map();

    input.forEach(jsonArray => {
        const array = JSON.parse(jsonArray).sort((a, b) => b - a); // Sort in descending order
        const key = JSON.stringify(array); // Use the sorted array as a key
        if (!uniqueArrays.has(key)) {
            uniqueArrays.set(key, array);
        }
    });

    const sortedArrays = Array.from(uniqueArrays.values()).sort((a, b) => a.length - b.length);

    sortedArrays.forEach(array => console.log(`[${array.join(', ')}]`));
}