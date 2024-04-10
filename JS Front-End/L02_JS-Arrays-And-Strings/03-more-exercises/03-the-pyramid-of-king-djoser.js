function pyramid(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let layerCount = 0;
    let currentBase = base;

    while (currentBase > 2) {
        let currentLayerArea = currentBase * currentBase;
        let innerLayerArea = (currentBase - 2) * (currentBase - 2);

        totalStone += innerLayerArea * increment;

        if ((layerCount + 1) % 5 === 0) {
            totalLapis += (currentLayerArea - innerLayerArea) * increment;
        } else {
            totalMarble += (currentLayerArea - innerLayerArea) * increment;
        }

        currentBase -= 2;
        layerCount++;
    }

    let finalLayerArea = currentBase * currentBase;
    let totalGold = finalLayerArea * increment;
    layerCount++;
    
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(layerCount * increment)}`);
}


