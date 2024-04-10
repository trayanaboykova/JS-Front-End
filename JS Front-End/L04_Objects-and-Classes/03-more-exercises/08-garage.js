function organizeGarage(input) {
    let garages = {};

    input.forEach(entry => {
        let [garageNumber, carInfo] = entry.split(' - ');
        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }

        let formattedCarInfo = carInfo.replace(/, /g, ', ').replace(/: /g, ' - ');
        garages[garageNumber].push(formattedCarInfo);
    });

    Object.entries(garages).sort((a, b) => a[0] - b[0]).forEach(([garageNumber, cars]) => {
        console.log(`Garage № ${garageNumber}`);
        cars.forEach(car => {
            console.log(`--- ${car}`);
        });
    });
}
