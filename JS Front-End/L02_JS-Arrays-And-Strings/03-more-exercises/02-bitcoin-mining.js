function bitcoinMining(shift) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let totalMoney = 0;
    let bitcoins = 0;
    let firstBitcoinDay = 0;

    for (let day = 1; day <= shift.length; day++) {
        let goldMined = shift[day - 1];

        if (day % 3 === 0) {
            goldMined *= 0.7;
        }

        totalMoney += goldMined * goldPrice;

        while (totalMoney >= bitcoinPrice) {
            if (bitcoins === 0) {
                firstBitcoinDay = day;
            }
            bitcoins++;
            totalMoney -= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

