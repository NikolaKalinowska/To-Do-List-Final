{
    // Tablica zadań
const tasks = [
    {
        content: "test",
        done: false
    },
    {
        content: "test",
        done: true,
    },
];

// Funkcja dodająca nowe zadanie
const addNewTask = (newTaskContent) => {
    tasks.push({
        content: newTaskContent,
        done: false
    });
    render();
}

// Funkcja usuwająca dane zadanie
const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
}

// Funkcja zmieniająca status zadania na zrobione
const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
}

// Funkcja do renderowania listy zadań
const render = () => {
    let htmlString = "";
    for (const [index, task] of tasks.entries()) {
        htmlString += `
        <li class="tasks__item">
            <button class="task__button js-done ${task.done ? "toggle__button--checked" : ""}">
                ${task.done ? "✓" : " "}
            </button>
            <span class="tasks__content ${task.done ? "tasks__item--checked" : ""}">
                ${task.content}
            </span>
            <button class="remove__button js-remove">🗑</button>
        </li>`;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;

    // Przycisk usuwający dany task
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const taskIndex = event.target.dataset.index;
            removeTask(taskIndex);
        });
    });

    // Przycisk oznaczający zadanie jako zrobione
    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const taskIndex = event.target.dataset.index;
            toggleTaskDone(taskIndex);
        });
    });
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
        return;
    }
    addNewTask(newTaskContent); // Dodanie nowego zadania
};

// Funkcja inicjalizacyjna
const init = () => {
    render();

    // Dodanie obsługi formularza
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit); // Dodanie obsługi zdarzenia "submit"
};

// Inicjalizacja
init();
}