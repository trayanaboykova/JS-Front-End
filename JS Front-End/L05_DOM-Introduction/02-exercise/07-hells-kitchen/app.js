function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurants = {};
      let bestRestaurant;

      let textareaValue = document.querySelector('textarea').value;
      let lines = JSON.parse(textareaValue);

      for (let line of lines) {
         let [restaurantName, workersString] = line.split(' - ');
         let workersArr = workersString.split(', ');

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = { workers: {}, count: 0, totalSalary:0, averageSalary: 0, bestSalary: Number.MIN_SAFE_INTEGER };
         }

         for (let workerStr of workersArr) {
            let [name, salaryStr] = workerStr.split(' ');
            let salary = Number(salaryStr);
            restaurants[restaurantName].workers[name] = salary;
            restaurants[restaurantName].count += 1;
            restaurants[restaurantName].totalSalary += salary;
            restaurants[restaurantName].bestSalary = Math.max(salary, restaurants[restaurantName].bestSalary);
         }

         restaurants[restaurantName].averageSalary = restaurants[restaurantName].totalSalary / restaurants[restaurantName].count;

         if (!bestRestaurant || restaurants[restaurantName].averageSalary > bestRestaurant.averageSalary || (restaurants[restaurantName].averageSalary === bestRestaurant.averageSalary && restaurants[restaurantName].bestSalary > bestRestaurant.bestSalary)) {
            bestRestaurant = restaurants[restaurantName];
            bestRestaurant.name = restaurantName;
         }
      }

      let bestRestaurantP = document.querySelector('#bestRestaurant p');
      bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let workersOutput = '';
      let sortedWorkers = Object.entries(bestRestaurant.workers).sort((a, b) => b[1] - a[1]);
      for (let [workerName, salary] of sortedWorkers) {
         workersOutput += `Name: ${workerName} With Salary: ${salary} `;
      }

      let workersP = document.querySelector('#workers p');
      workersP.textContent = workersOutput.trim();
   }
}