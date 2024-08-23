// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-buttons">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <button class="complete">Complete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function handleTaskActions(event) {
        const target = event.target;
        const taskItem = target.closest('.task-item');

        if (target.classList.contains('delete')) {
            taskList.removeChild(taskItem);
        } else if (target.classList.contains('edit')) {
            editTask(taskItem);
        } else if (target.classList.contains('complete')) {
            taskItem.classList.toggle('completed');
        }
    }

    function editTask(taskItem) {
        const taskText = taskItem.querySelector('.task-text');
        const newTaskText = prompt('Edit task:', taskText.textContent);
        if (newTaskText) {
            taskText.textContent = newTaskText.trim();
        }
    }
});
