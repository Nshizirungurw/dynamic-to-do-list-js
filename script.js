document.addEventListener("DOMContentLoaded", () => {
    
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        tasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    function createTaskElement(taskText) {
        
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn')
        
        removeBtn.onclick = () => {
            taskList.removeChild(listItem);
            tasks = tasks.filter(task => task !== taskText);
            saveTasksToLocalStorage();
        };

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);
    }

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        createTaskElement(taskText);
        tasks.push(taskText);
        saveTasksToLocalStorage();

        taskInput.value = "";
    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    loadTasks();
});
