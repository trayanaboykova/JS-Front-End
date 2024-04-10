function solve(input) {
    let groceries = input.shift().split('!');
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'Go Shopping!') {
        break;
      }
  
      const [command, arg1, arg2] = input[i].split(' ');
  
      switch (command) {
        case 'Urgent':
          if (!groceries.includes(arg1)) {
            groceries.unshift(arg1);
          }
          break;
        case 'Unnecessary':
          if (groceries.includes(arg1)) {
            groceries = groceries.filter((item) => item !== arg1);
          }
          break;
        case 'Correct':
          const index = groceries.indexOf(arg1);
          if (index !== -1) {
            groceries[index] = arg2;
          }
          break;
        case 'Rearrange':
          const index2 = groceries.indexOf(arg1);
          if (index2 !== -1) {
            groceries.splice(index2, 1);
            groceries.push(arg1);
          }
          break;
      }
    }
  
    console.log(groceries.join(', '));
  }
  