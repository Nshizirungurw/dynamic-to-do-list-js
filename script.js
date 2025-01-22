document.addEventListener('DOMContentLoaded',()=>{
    const addButton = document.getElementById('add-task-btn');
    const taskInput  = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        var taskText = taskInput.value.trim()
        if (taskText === "") {
            alert('Please Enter a task ');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');
        
        removeBtn.onclick=()=>{
            taskList.removeChild(listItem);
        }

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        taskInput.value = "";

    }

    addButton.addEventListener('click',addTask)
    taskInput.addEventListener('keypress',(event) =>{
        if (event.key === "Enter") {
            addTask();
        }
    })
})