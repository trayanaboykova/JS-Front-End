function processCafeteria(input) {
    let baristas = {};

    const n = parseInt(input[0]);
    for (let i = 1; i <= n; i++) {
        const [name, shift, drinks] = input[i].split(' ');
        baristas[name] = { shift, drinks: drinks.split(',') };
    }

    for (let i = n + 1; i < input.length - 1; i++) {
        const [action, ...args] = input[i].split(' / ');
        if (action === 'Prepare') {
            const [baristaName, shift, coffeeType] = args;
            if (baristas[baristaName].shift === shift && baristas[baristaName].drinks.includes(coffeeType)) {
                console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
            }
        } else if (action === 'Change Shift') {
            const [baristaName, newShift] = args;
            baristas[baristaName].shift = newShift;
            console.log(`${baristaName} has updated his shift to: ${newShift}`);
        } else if (action === 'Learn') {
            const [baristaName, newCoffeeType] = args;
            if (baristas[baristaName].drinks.includes(newCoffeeType)) {
                console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
            } else {
                baristas[baristaName].drinks.push(newCoffeeType);
                console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
            }
        }
    }

    for (const baristaName in baristas) {
        const { shift, drinks } = baristas[baristaName];
        console.log(`Barista: ${baristaName}, Shift: ${shift}, Drinks: ${drinks.join(', ')}`);
    }
}

// Test cases
const input1 = [
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed'
];

const input2 = [
    '4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed'
];

processCafeteria(input1);
console.log();
processCafeteria(input2);
