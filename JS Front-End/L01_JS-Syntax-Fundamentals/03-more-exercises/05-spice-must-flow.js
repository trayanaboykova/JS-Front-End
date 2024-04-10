function spiceHarvest(source) {
    let days = 0; //
    let totalAmountSpices = 0;

    while (source >= 100) {
        let spices = source - 26;
        totalAmountSpices += spices;
        days++;
        source -= 10;
    }

    console.log(days);
    if (totalAmountSpices >= 26) {
        totalAmountSpices -= 26;
    } else {
        totalAmountSpices = Math.max(0, totalAmountSpices);
    }

    console.log(totalAmountSpices);
}

