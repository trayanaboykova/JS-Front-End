function flightSchedule(input) {
    let [flights, flightStatuses, [statusToCheck]] = input;
    let schedule = {};

    flights.forEach(flight => {
        let [code, destination] = flight.split(' ');
        schedule[code] = { Destination: destination, Status: 'Ready to fly' };
    });

    flightStatuses.forEach(change => {
        let [code, newStatus] = change.split(' ');
        if (schedule[code]) {
            schedule[code].Status = newStatus;
        }
    });

    Object.keys(schedule).forEach(code => {
        let flight = schedule[code];
        if (flight.Status === statusToCheck) {
            console.log(flight);
        } else if (statusToCheck === 'Ready to fly' && flight.Status === 'Ready to fly') {
            console.log(flight);
        }
    });
}
