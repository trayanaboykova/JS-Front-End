const loadBoardButton = document.getElementById("load-board-btn");
const createTaskButton = document.getElementById("create-task-btn");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");

const taskLists = {
    "ToDo": document.querySelector("#todo-section .task-list"),
    "In Progress": document.querySelector("#in-progress-section .task-list"),
    "Code Review": document.querySelector("#code-review-section .task-list"),
    "Done": document.querySelector("#done-section .task-list"),
};

loadBoardButton.addEventListener("click", loadBoard);
createTaskButton.addEventListener("click", addTask);

async function loadBoard() {
    const response = await fetch("http://localhost:3030/jsonstore/tasks/");
    const data = await response.json();

    for (const taskList of Object.values(taskLists)) {
        taskList.innerHTML = "";
    }

    for (const task of Object.values(data)) {
        const taskElement = createTaskElement(task);
        taskLists[task.status].appendChild(taskElement);
    }
}

async function addTask() {
    const title = titleInput.value;
    const description = descriptionInput.value;

    if (!title || !description) return;

    const taskData = {
        title,
        description,
        status: "ToDo",
    };

    await fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
    });

    titleInput.value = "";
    descriptionInput.value = "";

    loadBoard();
}

function createTaskElement(task) {
    const taskElement = document.createElement("li");
    taskElement.className = "task";

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;

    const taskButton = document.createElement("button");
    setTaskButton(task, taskButton);

    taskElement.appendChild(taskTitle);
    taskElement.appendChild(taskDescription);
    taskElement.appendChild(taskButton);

    return taskElement;
}

function setTaskButton(task, taskButton) {
    switch (task.status) {
        case "ToDo":
            taskButton.textContent = "Move to In Progress";
            taskButton.addEventListener("click", () => updateTaskStatus(task, "In Progress"));
            break;
        case "In Progress":
            taskButton.textContent = "Move to Code Review";
            taskButton.addEventListener("click", () => updateTaskStatus(task, "Code Review"));
            break;
        case "Code Review":
            taskButton.textContent = "Move to Done";
            taskButton.addEventListener("click", () => updateTaskStatus(task, "Done"));
            break;
        case "Done":
            taskButton.textContent = "Close";
            taskButton.addEventListener("click", () => deleteTask(task));
            break;
    }
}

async function updateTaskStatus(task, newStatus) {
    await fetch(`http://localhost:3030/jsonstore/tasks/${task._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
    });

    loadBoard();
}

async function deleteTask(task) {
    await fetch(`http://localhost:3030/jsonstore/tasks/${task._id}`, {
        method: "DELETE",
    });

    loadBoard();
}
