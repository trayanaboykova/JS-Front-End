function processCommands(commands) {
    let horses = [];
    let horsePositions = new Map();
    let result = "";
  
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];
      let tokens = command.split(" ");
      let horseName = tokens[1];
  
      switch (tokens[0]) {
        case "Retake":
          let overtakenHorse = tokens[2];
          let overtakingHorsePos = horsePositions.get(horseName);
          let overtakenHorsePos = horsePositions.get(overtakenHorse);
          if (overtakingHorsePos < overtakenHorsePos) {
            horsePositions.set(horseName, overtakenHorsePos);
            horsePositions.set(overtakenHorse, overtakingHorsePos);
            result += `${horseName} retakes ${overtakenHorse}.\n`;
          }
          break;
        case "Trouble":
          let currentHorsePos = horsePositions.get(horseName);
          if (currentHorsePos < horses.length - 1) {
            let newHorsePos = currentHorsePos + 1;
            horsePositions.set(horseName, newHorsePos);
            result += `Trouble for ${horseName} - drops one position.\n`;
          }
          break;
        case "Rage":
          let horsePos = horsePositions.get(horseName);
          let newPos = Math.max(0, horsePos - 2);
          let newPositionHorse = horses[newPos];
          if (horsePos == 1) {
            newPos = 0;
          }
          horsePositions.set(horseName, newPos);
          horsePositions.set(newPositionHorse, horsePos);
          result += `${horseName} rages 2 positions ahead.\n`;
          break;
        case "Miracle":
          let lastHorse = horses[horses.length - 1];
          horsePositions.set(lastHorse, 0);
          result += `What a miracle - ${lastHorse} becomes first.\n`;
          break;
        default:
          if (horses.length == 0) {
            horses = tokens[0].split("|");
            for (let i = 0; i < horses.length; i++) {
              horsePositions.set(horses[i], i);
            }
          }
          break;
      }
    }
  
    let finalResult = "";
    horsePositions.forEach((pos, horse) => {
      finalResult = `${horse}->${finalResult}`;
    });
    finalResult = finalResult.slice(0, -2);
    finalResult = `The winner is: ${horses[0]}\n${finalResult}`;
  
    return `${result.trim()}\n${finalResult}`;
  }