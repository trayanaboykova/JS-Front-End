function armyLeaders(input) {
    const leaderMap = {};

    for (const command of input) {
        const matchArrive = /^(\w+) arrives$/.exec(command);
        const matchArmy = /^(\w+): (\w+), (\d+)$/.exec(command);
        const matchAdd = /^(\w+) \+ (\d+)$/.exec(command);
        const matchDefeated = /^(\w+) defeated$/.exec(command);

        if (matchArrive) {
            const leader = matchArrive[1];
            leaderMap[leader] = { total: 0, armies: {} };
        } else if (matchArmy) {
            const [leader, army, count] = [matchArmy[1], matchArmy[2], parseInt(matchArmy[3], 10)];
            if (leader in leaderMap) {
                leaderMap[leader].total += count;
                leaderMap[leader].armies[army] = count;
            }
        } else if (matchAdd) {
            const [army, count] = [matchAdd[1], parseInt(matchAdd[2], 10)];
            for (let leader in leaderMap) {
                if (leaderMap[leader].armies.hasOwnProperty(army)) {
                    leaderMap[leader].armies[army] += count;
                    leaderMap[leader].total += count;
                }
            }
        } else if (matchDefeated) {
            const leader = matchDefeated[1];
            delete leaderMap[leader];
        }
    }

    const leaders = Object.entries(leaderMap).map(([name, info]) => ({
        name,
        total: info.total,
        armies: Object.entries(info.armies).sort((a, b) => b[1] - a[1])
    })).sort((a, b) => b.total - a.total);

    let output = '';
    leaders.forEach(leader => {
        output += `${leader.name}: ${leader.total}\n`;
        leader.armies.forEach(([army, count]) => {
            output += `>>> ${army} - ${count}\n`;
        });
    });

    return output.trim();
}
