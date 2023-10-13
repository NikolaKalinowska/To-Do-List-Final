

document.addEventListener('DOMContentLoaded', function() {
    const newTask = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const completedTasksList = document.getElementById('completed-tasks');
    const deleteTasksList = document.getElementById('delete-tasks');

    function addTask() {
        const taskText = newTask.value;
        if (taskText !== "") {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="complete-task">Zakończ</button>
                <button class="delete-task">Usuń</button>
            `;
            taskList.appendChild(listItem);
            newTask.value = "";
        }
    }

    function completeTask() {
        const listItem = this.parentElement;
        const completedTaskText = listItem.querySelector('span');
        completedTaskText.classList.toggle('completed-task');

        const completedListItem = document.createElement('li');
        completedListItem.textContent = completedTaskText.textContent;
        completedTasksList.appendChild(completedListItem);

        listItem.remove();
    }

    function deleteTask() {
        const listItem = this.parentElement;
        listItem.remove();
    }

    addTaskButton.addEventListener('click', addTask);

    newTask.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON' && event.target.className === 'delete-task') {
            deleteTask.call(event.target);
        } else if (event.target.tagName === 'BUTTON' && event.target.className === 'complete-task') {
            completeTask.call(event.target);
        }
    });
});
}