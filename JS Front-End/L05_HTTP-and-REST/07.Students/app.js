function attachEvents() {
  window.addEventListener("load", loadData);
  document.querySelector("#submit").addEventListener("click", add);
}

const url = "http://localhost:3030/jsonstore/collections/students";
const table = document.querySelector("#results tbody");
const form = document.querySelector(".inputs");

async function add() {
  const inputs = Array.from(form.querySelectorAll("input"));

  if (inputs.some((input) => !input.value.trim())) {
    alert("Please fill in all the fields.");
    return;
  }

  const [firstName, lastName, facultyNumber, grade] = inputs.map(
    (input) => input.value.trim()
  );

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        facultyNumber,
        grade,
      }),
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    inputs.forEach((input) => (input.value = ""));
    loadData();
  } catch (error) {
    alert(error.message);
  }
}

async function loadData() {
  table.innerHTML = "";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    for (const student of Object.values(data)) {
      const tr = document.createElement("tr");

      const firstName = document.createElement("td");
      firstName.textContent = student.firstName;

      const lastName = document.createElement("td");
      lastName.textContent = student.lastName;

      const facultyNumber = document.createElement("td");
      facultyNumber.textContent = student.facultyNumber;

      const grade = document.createElement("td");
      grade.textContent = student.grade;

      tr.append(firstName, lastName, facultyNumber, grade);
      table.appendChild(tr);
    }
  } catch (error) {
    alert(error.message);
  }
}

attachEvents();
