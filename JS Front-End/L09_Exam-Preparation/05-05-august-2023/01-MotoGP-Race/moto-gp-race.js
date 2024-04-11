function motoGPRace(input) {
    const noOfRiders = Number(input.shift());
    const allRiders = [];

    for (let i = 0; i < noOfRiders; i++) {
        const [name, fuelCapacity, position] = input[i].split('|');
        if (Number(fuelCapacity) <= 100) {
            allRiders.push({ name: name, fuelCapacity: Number(fuelCapacity), position: Number(position) });
        }
    }

    const newInput = input.slice(noOfRiders);
    const output = [];

    for (let command of newInput) {
        if (command === 'Finish') {
            break;
        }
        const [action, ...args] = command.split(' - ');

        switch (action) {
            case 'StopForFuel':
                const [riderFuel, minimumFuel, changedPosition] = args;
                const currRider = allRiders.find(rider => rider.name === riderFuel);
                if (currRider) {
                    if (currRider.fuelCapacity < Number(minimumFuel)) {
                        currRider.position = Number(changedPosition);
                        output.push(`${riderFuel} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                    } else {
                        output.push(`${riderFuel} does not need to stop for fuel!`);
                    }
                }
                break;

            case 'Overtaking':
                const [rider1, rider2] = args;
                const riderRef1 = allRiders.find(rider => rider.name === rider1);
                const riderRef2 = allRiders.find(rider => rider.name === rider2);
                if (riderRef1 && riderRef2 && riderRef1.position < riderRef2.position) {
                    [riderRef1.position, riderRef2.position] = [riderRef2.position, riderRef1.position];
                    output.push(`${rider1} overtook ${rider2}!`);
                }
                break;

            case 'EngineFail':
                const [riderName, lapsLeft] = args;
                const indexToRemove = allRiders.findIndex(rider => rider.name === riderName);
                if (indexToRemove >= 0) {
                    allRiders.splice(indexToRemove, 1);
                    output.push(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                }
                break;
        }
    }

    for (const { name, position } of allRiders) {
        output.push(`${name}\nFinal position: ${position}`);
    }

    return output.join('\n');
}