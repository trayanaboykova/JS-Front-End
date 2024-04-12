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
