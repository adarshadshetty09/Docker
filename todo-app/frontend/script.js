const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function fetchTasks() {
    fetch('/todos')
        .then(response => response.json())
        .then(tasks => {
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.task;
                taskList.appendChild(li);
            });
        });
}

function addTask() {
    const task = taskInput.value;
    fetch('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: task })
    })
    .then(() => {
      fetchTasks();
      taskInput.value = "";
    });
}
fetchTasks();