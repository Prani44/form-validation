let todoList = [];

function showLogin() {
  document.getElementById('signup-page').style.display = 'none';
  document.getElementById('login-page').style.display = 'block';
}

function showSignup() {
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('signup-page').style.display = 'block';
}

function signup() {
  // Add your signup logic here (validate fields, store user data, etc.)
  // For simplicity, let's just show a success message for now.
  document.getElementById('signup-notification').innerText = '👍 Sign up successful! If you have an account, click here to sign in.';
}

function login() {
  // Add your login logic here (validate credentials, etc.)
  // For simplicity, let's just show a success message and move to the todo page.
  document.getElementById('login-notification').innerText = '👍 Welcome back, [Full Name]! If you don\'t have an account, click here to create one.';
  showTodoPage();
}

function showTodoPage() {
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('signup-page').style.display = 'none';
  document.getElementById('todo-page').style.display = 'block';
  displayTodoList();
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    todoList.push(task);
    displayTodoList();
    taskInput.value = '';
  }
}

function displayTodoList() {
  const todoListContainer = document.getElementById('todo-list');
  todoListContainer.innerHTML = '';

  todoList.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerText = `${index + 1}. ${task}`;
    todoListContainer.appendChild(li);
  });
}
