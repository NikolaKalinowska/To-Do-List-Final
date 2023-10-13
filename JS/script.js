{
    // Tablica zadan
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

    // Funkcja do renderowania listy zadań
    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li${task.done ? " style=\"text-decoration: line-through;\"" : ""}> 
                    ${task.content}
                </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    // Funkcja inicjalizacyjna
    const init = () => {
        render();

        // Dodanie obsługi formularza
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault(); 

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            console.log(newTaskContent)

            if (newTaskContent === "") {
                return;
            }
        });
    };

    // Inicjalizacja
    init();
}