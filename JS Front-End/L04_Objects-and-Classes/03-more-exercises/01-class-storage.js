class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        let result = [];
        this.storage.forEach(product => {
            result.push(JSON.stringify(product));
        });
        return result.join('\n');
    }
}

