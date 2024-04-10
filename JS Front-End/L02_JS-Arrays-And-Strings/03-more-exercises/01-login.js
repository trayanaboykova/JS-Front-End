function login(input) {
    const username = input[0];
    const password = username.split('').reverse().join('');

    for (let i = 1; i < input.length; i++) {
        if (input[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (i === 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log("Incorrect password. Try again.");
            }
        }
    }
}

