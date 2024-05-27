// scripts.js
document.getElementById('submit-btn').addEventListener('click', addToDo);
document.getElementById('delete-btn').addEventListener('click', deleteAll);

function addToDo() {
    const todoInput = document.getElementById('todo-input').value;
    const priority = document.getElementById('priority').value;
    const date = new Date().toLocaleString();
    const deadline = document.getElementById('deadline').value;

    if (todoInput === '' || deadline === '') {
        alert('Please enter a to do and set a deadline');
        return;
    }

    const listItem = document.createElement('li');
    const deadlineDate = new Date(deadline);
    const isOverdue = deadlineDate < new Date() ? ' (Overdue)' : '';

    listItem.innerHTML = `
        <input type="checkbox" onclick="completeTask(this)">
        <span>${todoInput} [${priority}] - ${date} (Deadline: ${deadline})${isOverdue}</span>
    `;

    document.getElementById('list').appendChild(listItem);
    document.getElementById('todo-input').value = '';
    document.getElementById('deadline').value = '';
}

function completeTask(checkbox) {
    const listItem = checkbox.parentElement;
    listItem.classList.add('completed');
    document.getElementById('done').appendChild(listItem);
}

function deleteAll() {
    document.getElementById('list').innerHTML = '';
    document.getElementById('done').innerHTML = '';
}