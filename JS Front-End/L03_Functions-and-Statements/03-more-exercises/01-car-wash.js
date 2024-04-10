function carWash(commands) {
    let cleanliness = 0; // Starting from 0% cleanliness

    commands.forEach(command => {
        switch (command) {
            case 'soap':
                cleanliness += 10;
                break;
            case 'water':
                cleanliness *= 1.20; // Increase by 20%
                break;
            case 'vacuum cleaner':
                cleanliness *= 1.25; // Increase by 25%
                break;
            case 'mud':
                cleanliness *= 0.90; // Decrease by 10%
                break;
        }
    });

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

