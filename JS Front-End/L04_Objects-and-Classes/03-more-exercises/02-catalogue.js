function createCatalogue(products) {
    let catalogue = {};

    for (let entry of products) {
        let [name, price] = entry.split(' : ');
        price = Number(price);
        let initial = name[0];

        if (!catalogue[initial]) {
            catalogue[initial] = [];
        }

        catalogue[initial].push({ name, price });
    }

    Object.keys(catalogue).sort().forEach(initial => {
        console.log(initial);
        catalogue[initial].sort((a, b) => a.name.localeCompare(b.name)).forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    });
}
