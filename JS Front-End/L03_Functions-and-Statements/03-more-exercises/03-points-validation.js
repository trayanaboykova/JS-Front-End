function pointsValidation([x1, y1, x2, y2]) {
    function calculateDistance(xA, yA, xB, yB) {
        return Math.sqrt((xA - xB) ** 2 + (yA - yB) ** 2);
    }
    function isDistanceValid(xA, yA, xB, yB) {
        const distance = calculateDistance(xA, yA, xB, yB);
        return distance === Math.floor(distance);
    }
    if (isDistanceValid(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isDistanceValid(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isDistanceValid(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

