async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopNameElem = document.getElementById('stopName');
    const busesListElem = document.getElementById('buses');
  
    stopNameElem.textContent = '';
    busesListElem.innerHTML = '';
  
    try {
      const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
  
      const stopName = data.name;
      const buses = data.buses;
  
      stopNameElem.textContent = stopName;
  
      for (const busId in buses) {
        const time = buses[busId];
        const listItem = document.createElement('li');
        listItem.textContent = `Bus ${busId} arrives in ${time} minutes`;
        busesListElem.appendChild(listItem);
      }
    } catch (error) {
      stopNameElem.textContent = 'Error';
    }
  }
  