// Define constants
const url = "http://localhost:3030/jsonstore/phonebook";
const ul = document.getElementById("phonebook");
const loadBtn = document.getElementById("btnLoad");
const createBtn = document.getElementById("btnCreate");
const personInput = document.getElementById("person");
const phoneInput = document.getElementById("phone");

// Add event listeners
loadBtn.addEventListener("click", load);
createBtn.addEventListener("click", create);

async function load(ev) {
  ev.preventDefault();
  clearList();
  try {
    const data = await getData(url);
    data.forEach(addToList);
  } catch (error) {
    alert(error.message);
  }
}

async function create(ev) {
  ev.preventDefault();
  try {
    const person = personInput.value.trim();
    const phone = phoneInput.value.trim();
    if (!person || !phone) {
      throw new Error("Inputs are empty or invalid!");
    }
    const body = JSON.stringify({ person, phone });
    await postData(url, body);
    personInput.value = "";
    phoneInput.value = "";
    load(ev);
  } catch (error) {
    alert(error.message);
  }
}

async function deleteRecord(ev) {
  ev.preventDefault();
  const urlToken = `${url}/${ev.target.id}`;
  try {
    await deleteData(urlToken);
    ev.target.parentElement.remove();
  } catch (error) {
    alert(error.message);
  }
}

function clearList() {
  ul.innerHTML = "";
}

function addToList({ _id, person, phone }) {
  const li = document.createElement("li");
  li.textContent = `${person}: ${phone}`;
  const btn = document.createElement("button");
  btn.id = _id;
  btn.textContent = "Delete";
  btn.addEventListener("click", deleteRecord);
  li.appendChild(btn);
  ul.appendChild(li);
}

async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function postData(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: body,
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
}

async function deleteData(url) {
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
}
