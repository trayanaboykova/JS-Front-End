function printCityInfo(city) {
    for (let key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}
