let result = (function () {
    const infoBox = document.querySelector("#info > span.info");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
  
    let currentStop = {
      next: "depot"
    };
  
    function depart() {
      fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Invalid data received");
          }
        })
        .then((data) => {
          currentStop = data;
          infoBox.textContent = `Next stop ${data.name}`;
          departBtn.disabled = true;
          arriveBtn.disabled = false;
        })
        .catch((error) => {
          infoBox.textContent = "Error";
          departBtn.disabled = true;
          arriveBtn.disabled = true;
        });
    }
  
    function arrive() {
      infoBox.textContent = `Arriving at ${currentStop.name}`;
      departBtn.disabled = false;
      arriveBtn.disabled = true;
    }
  
    return {
      depart,
      arrive,
    };
  })();
  