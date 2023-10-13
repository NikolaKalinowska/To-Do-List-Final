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
            <li${task.done ? " style=\"text-decoration: line-through;\"" : ""}> 
                <button class="js-done" data-index="${index}">Zadanie zrobione</button>
                <button class="js-remove" data-index="${index}">Usuń</button>
                ${task.content}
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