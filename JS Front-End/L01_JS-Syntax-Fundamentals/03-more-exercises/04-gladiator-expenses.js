function calculateGladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBreakCount = 0;

    for (let fight = 1; fight <= lostFightsCount; fight++) {
        let helmetBreaks = fight % 2 === 0;
        let swordBreaks = fight % 3 === 0;

        if (helmetBreaks) {
            expenses += helmetPrice;
        }
        if (swordBreaks) {
            expenses += swordPrice;
        }
        if (helmetBreaks && swordBreaks) {
            expenses += shieldPrice;
            shieldBreakCount++;

            if (shieldBreakCount % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

// Example usage:
calculateGladiatorExpenses(7, 2, 3, 4, 5);  // Expected output: Gladiator expenses: 16.00 aureus
calculateGladiatorExpenses(23, 12.50, 21.50, 40, 200);  // Expected output: Gladiator expenses: 608.00 aureus
