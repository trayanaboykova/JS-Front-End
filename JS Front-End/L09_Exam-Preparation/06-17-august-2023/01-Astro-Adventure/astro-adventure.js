function astroAdventure(input) {

    let n = Number(input.shift());

    let astronauts = {};

    for (let i = 0; i < n; i++) {
        let [name, oxygen, energy] = input.shift().split(' ');
        oxygen = Number(oxygen);
        energy = Number(energy);

        astronauts[name] = { oxygen, energy };
    }

    while (input.length !== 0) {
        let command = input.shift().split(' - ');
        if (command[0] == 'End') {
            break;
        }

        let action = command[0];
        let astronautName = command[1];
        let amount = Number(command[2]);

        switch (action) {
            case 'Explore':
                if (amount > astronauts[astronautName].energy) {
                    console.log(`${astronautName} does not have enough energy to explore!`);
                } else {
                    astronauts[astronautName].energy -= amount;
                    console.log(`${astronautName} has successfully explored a new area and now has ${astronauts[astronautName].energy} energy!`);
                }
                break;
            case 'Refuel':
                let energyToBeAdded = Math.min(amount, 200 - astronauts[astronautName].energy);
                astronauts[astronautName].energy += energyToBeAdded;
                console.log(`${astronautName} refueled their energy by ${energyToBeAdded}!`);
                break;
            case 'Breathe':
                let oxygenToBeAdded = Math.min(amount, 100 - astronauts[astronautName].oxygen);
                astronauts[astronautName].oxygen += oxygenToBeAdded;
                console.log(`${astronautName} took a breath and recovered ${oxygenToBeAdded} oxygen!`);
                break;
        }
    }

    for (let astronautName in astronauts) {
        let astronaut = astronauts[astronautName];
        console.log(`Astronaut: ${astronautName}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`);
    }
}

// astroAdventure([
//     '3',
//     'John 50 120',
//     'Kate 80 180',
//     'Rob 70 150',
//     'Explore - John - 50',
//     'Refuel - Kate - 30',
//     'Breathe - Rob - 20',
//     'End'
// ]);

astroAdventure([
    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End'
]);