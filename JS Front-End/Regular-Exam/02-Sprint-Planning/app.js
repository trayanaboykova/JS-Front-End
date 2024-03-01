function solve() {
  const tasksSection = document.getElementById('tasks-section');
  const createTaskForm = document.getElementById('create-task-form');
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const labelSelect = document.getElementById('label');
  const pointsInput = document.getElementById('points');
  const assigneeInput = document.getElementById('assignee');
  const taskIdInput = document.getElementById('task-id');
  const createTaskBtn = document.getElementById('create-task-btn');
  const deleteTaskBtn = document.getElementById('delete-task-btn');
  const totalSprintPoints = document.getElementById('total-sprint-points');

  let taskIdCounter = 0;
  let totalPoints = 0;
  
  function createTask() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const label = labelSelect.value;
    const points = parseInt(pointsInput.value.trim(), 10);
    const assignee = assigneeInput.value.trim();

    if (!title || !description || !points || !assignee) {
      alert("Please fill out all fields");
      return;
    }

    const task = {
      id: ++taskIdCounter,
      title,
      description,
      label,
      points,
      assignee,
    };

    const taskArticle = createTaskArticle(task);
    tasksSection.appendChild(taskArticle);

    totalPoints += task.points;
    updateTotalSprintPoints(totalPoints);

    clearCreateTaskForm();
  }

  function createTaskArticle() {
    if (
      titleInput.value === '' ||
      descriptionInput.value === '' ||
      pointsInput.value === '' ||
      assigneeInput.value === ''
    ) {
      return;
    }

    taskIdCounter++;
    const taskArticle = document.createElement('article');
    taskArticle.id = `task-${taskIdCounter}`;

    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    const taskCardLabel = document.createElement('div');
    taskCardLabel.classList.add('task-card-label');

    let labelClass, labelIcon;
    switch (labelSelect.value) {
      case 'Feature':
        labelClass = 'feature';
        labelIcon = '&#8865;';
        break;
      case 'Low Priority Bug':
        labelClass = 'low-priority';
        labelIcon = '&#9737;';
        break;
      case 'High Priority Bug':
        labelClass = 'high-priority';
        labelIcon = '&#9888;';
        break;
    }
    taskCardLabel.classList.add(labelClass);
    taskCardLabel.innerHTML = labelIcon + labelSelect.value;

    const taskCardTitle = document.createElement('h3');
    taskCardTitle.classList.add('task-card-title');
    taskCardTitle.textContent = titleInput.value;

    const taskCardDescription = document.createElement('p');
    taskCardDescription.classList.add('task-card-description');
    taskCardDescription.textContent = descriptionInput.value;

    const taskCardPoints = document.createElement('p');
    taskCardPoints.classList.add('task-card-points');
    taskCardPoints.textContent = `Points: ${pointsInput.value}`;

    const taskCardAssignee = document.createElement('p');
    taskCardAssignee.classList.add('task-card-assignee');
    taskCardAssignee.textContent = `Assignee: ${assigneeInput.value}`;

    const taskCardActions = document.createElement('div');
    taskCardActions.classList.add('task-card-actions');
    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.textContent = 'Delete';
    taskDeleteBtn.addEventListener('click', () => {
      deleteTaskArticle(taskArticle, parseInt(pointsInput.value));
    });
    taskCardActions.appendChild(taskDeleteBtn);

    taskCard.appendChild(taskCardLabel);
    taskCard.appendChild(taskCardTitle);
    taskCard.appendChild(taskCardDescription);
    taskCard.appendChild(taskCardPoints);
    taskCard.appendChild(taskCardAssignee);
    taskCard.appendChild(taskCardActions);

    taskArticle.appendChild(taskCard);
    tasksSection.appendChild(taskArticle);

    totalPoints += parseInt(pointsInput.value);
    totalSprintPoints.textContent = `Total Points ${totalPoints}pts`;

    clearForm();
  }

 
   function deleteTaskArticle(taskArticle, taskPoints) {
    taskArticle.remove();
    totalPoints -= taskPoints;
    totalSprintPoints.textContent = `Total Points ${totalPoints}pts`;
    clearForm();
    createTaskBtn.disabled = false;
    deleteTaskBtn.disabled = true;
  }

  createTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    createTaskArticle();
  });

  deleteTaskBtn.addEventListener('click', () => {
    const taskId = taskIdInput.value;
    const taskArticle = document.getElementById(`task-${taskId}`);
    const taskPoints = parseInt(pointsInput.value);
    deleteTaskArticle(taskArticle, taskPoints);
  });
}

