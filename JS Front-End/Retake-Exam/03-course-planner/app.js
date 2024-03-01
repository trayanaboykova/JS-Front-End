const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const elements = {
  loadBtn: document.querySelector('#load-course'),
  addBtn: document.querySelector('#add-course'),
  editBtn: document.querySelector('#edit-course'),
  courseName: document.querySelector('#course-name'),
  courseType: document.querySelector('#course-type'),
  description: document.querySelector('#description'),
  teacherName: document.querySelector('#teacher-name'),
  list: document.querySelector('#list'),
};

elements.loadBtn.addEventListener('click', onLoadCourses);
elements.addBtn.addEventListener('click', onAddCourse);
elements.editBtn.addEventListener('click', onUpdateBtnClick);

let courses = [];

async function onLoadCourses() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    courses = Object.values(data);
    elements.list.innerHTML = '';
    courses.forEach((course) => displayCourse(course));
    elements.editBtn.disabled = true;
  } catch (error) {
    console.error(error.message);
  }
}

async function onAddCourse(event) {
  try {
    event.preventDefault();
    const course = {
      title: elements.courseName.value,
      type: elements.courseType.value,
      description: elements.description.value,
      teacher: elements.teacherName.value,
    };
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(course),
    });
    const data = await response.json();
    courses.push(data);
    elements.list.innerHTML = '';
    courses.forEach((course) => displayCourse(course));
    clearForm();
  } catch (error) {
    console.error(error.message);
  }
}

async function onUpdateBtnClick(e) {
  try {
    e.preventDefault();

    const course = {
      title: elements.courseName.value,
      type: elements.courseType.value,
      description: elements.description.value,
      teacher: elements.teacherName.value,
    };

    if (Object.values(course).some(v => !v)) {
      return alert('All fields are required!');
    }

    await updateCourse(elements.editBtn.dataset.id, course);
    elements.addBtn.disabled = false;
    elements.editBtn.disabled = true;

    clearInputs();
    onLoadCourses();
  } catch (error) {
    console.error(error.message);
  }
}

async function onDeleteBtnClick(courseId) {
  try {
    await deleteCourse(courseId);
    onLoadCourses();
  } catch (error) {
    console.error(error.message);
  }
}

function clearInputs() {
  elements.courseName.value = '';
  elements.courseType.value = '';
  elements.description.value = '';
  elements.teacherName.value = '';
}

function displayCourse(course) {
  const container = document.createElement('div');
  container.classList.add('container');

  const courseTitle = document.createElement('h2');
  courseTitle.textContent = course.title;
  container.appendChild(courseTitle);

  const teacherName = document.createElement('h3');
  teacherName.textContent = course.teacher;
  container.appendChild(teacherName);

  const courseType = document.createElement('h3');
  courseType.textContent = course.type;
  container.appendChild(courseType);

  const courseDescription = document.createElement('h4');
  courseDescription.textContent = course.description;
  container.appendChild(courseDescription);

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Edit Course';
  editBtn.addEventListener('click', () => onEditBtnClick(course));
  container.appendChild(editBtn);

  const finishBtn = document.createElement('button');
  finishBtn.classList.add('finish-btn');
  finishBtn.textContent = 'Finish Course';
  finishBtn.addEventListener('click', () => onDeleteBtnClick(course._id));
  container.appendChild(finishBtn);

  elements.list.appendChild(container);
}
function onEditBtnClick(course) {
  elements.courseName.value = course.title;
  elements.courseType.value = course.type;
  elements.description.value = course.description;
  elements.teacherName.value = course.teacher;
  elements.editBtn.dataset.id = course._id;
}

async function onUpdateBtnClick(e) {
  e.preventDefault();

  const course = {
    title: elements.courseName.value,
    type: elements.courseType.value,
    description: elements.description.value,
    teacher: elements.teacherName.value,
  };

  if (Object.values(course).some(v => !v)) {
    return alert('All fields are required!');
  }

  await updateCourse(elements.editBtn.dataset.id, course);
  elements.addBtn.disabled = false;
  elements.editBtn.disabled = true;

  clearInputs();
  onLoadBtnClick();
}

async function onDeleteBtnClick(courseId) {
  await deleteCourse(courseId);
  onLoadBtnClick();
}

function clearInputs() {
  elements.courseName.value = '';
  elements.courseType.value = '';
  elements.description.value = '';
  elements.teacherName.value = '';
}

function renderCourses(courses) {
  const template = courses.map(course => html`
    <div class="container">
      <h2>${course.title}</h2>
      <h3>${course.teacher}</h3>
      <h3>${course.type}</h3>
      <h4>${course.description}</h4>
      <button class="edit-btn" @click=${() => onEditBtnClick(course)}>Edit Course</button>
      <button class="finish-btn" @click=${() => onDeleteBtnClick(course._id)}>Finish Course</button>
    </div>`);

  render(template, elements.coursesList);
}

async function loadCourses() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  courses = Object.values(data);
  elements.list.innerHTML = '';
  courses.forEach((course) => displayCourse(course));
}

async function addCourse(course) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course),
  });
  const data = await response.json();
  courses.push(data);
  elements.list.innerHTML = '';
  courses.forEach((course) => displayCourse(course));
}

async function updateCourse(courseId, course) {
  const response = await fetch(`${baseUrl}/${courseId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course),
  });
  const data = await response.json();
  const index = courses.findIndex((c) => c._id === courseId);
  courses[index] = data;
  elements.list.innerHTML = '';
  courses.forEach((course) => displayCourse(course));
}

async function deleteCourse(courseId) {
  await fetch(`${baseUrl}/${courseId}`, {
    method: 'DELETE',
  });
  courses = courses.filter((course) => course._id !== courseId);
  elements.list.innerHTML = '';
  courses.forEach((course) => displayCourse(course));
}

elements.loadBtn.addEventListener('click', loadCourses);
elements.addBtn.addEventListener('click', async () => {
  const course = {
    title: elements.courseName.value,
    type: elements.courseType.value,
    description: elements.description.value,
    teacher: elements.teacherName.value,
  };

  if (Object.values(course).some(v => !v)) {
    return alert('All fields are required!');
  }
