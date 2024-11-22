
let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("task");

function addTask() {
    let task = taskInput.value;
    if (task !== "") {
        let newTask = document.createElement("LI");
        newTask.textContent = task;
        taskList.appendChild(newTask);
        taskInput.value = "";
        newTask.addEventListener("click", function() {
            this.classList.toggle("done");
        });
        newTask.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            taskList.removeChild(this);
        });
    }
}
