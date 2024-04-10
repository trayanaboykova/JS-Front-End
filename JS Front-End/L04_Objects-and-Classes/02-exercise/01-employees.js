function employees(arr) {
    const employeesList = {};
  
    for (const employee of arr) {
      const name = employee;
      const personalNum = employee.length;
  
      employeesList[name] = personalNum;
    }
  
    for (const [name, personalNum] of Object.entries(employeesList)) {
      console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    }
  }
  