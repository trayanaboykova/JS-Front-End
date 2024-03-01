function cookingByNumbers(inputNum, op1, op2, op3, op4, op5) {
    let num = Number(inputNum);
    let operations = [op1, op2, op3, op4, op5];
  
    for (let i = 0; i < operations.length; i++) {
      let operation = operations[i];
  
      switch (operation) {
        case 'chop':
          num /= 2;
          break;
        case 'dice':
          num = Math.sqrt(num);
          break;
        case 'spice':
          num += 1;
          break;
        case 'bake':
          num *= 3;
          break;
        case 'fillet':
          num -= num * 0.2;
          break;
        default:
          console.log(`Invalid operation: ${operation}`);
          return;
      }
  
      console.log(num);
    }
  }
  