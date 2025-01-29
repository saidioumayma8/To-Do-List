const taskInput = document.getElementById("taskInput");
const descriptionInput = document.getElementById("descriptionInput");
const PrioriteInput = document.getElementById("PrioriteInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const completeTab = document.querySelector(".bi-check2-square").parentElement;
const todayTab = document.querySelector(".bi-hourglass-split").parentElement;
const weekTab = document.querySelector(".bi-calendar4-week").parentElement;


const completedTaskList = document.createElement("ul");
completedTaskList.id = "completedTasks";
completedTaskList.className = "list-group mt-4 d-none"; 
taskList.parentElement.appendChild(completedTaskList); 

function getPriorityColor(priority) {
  switch (priority) {
    case "basse":
      return "success";
    case "moyenne":
      return "warning";
    case "haute":
      return "danger";
    default:
      return "secondary";
  }
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const descriptionText = descriptionInput.value.trim();
  const priorityText = PrioriteInput.value;

  if (taskText !== "" && descriptionText !== "" && priorityText !== "Select Priority") {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";

    listItem.innerHTML = `
      <div>
        <strong>${taskText}</strong> 
        <p class="mb-1">${descriptionText}</p>
        <span class="badge bg-${getPriorityColor(priorityText)}">${priorityText}</span>
      </div>
      <div>
        <button class="btn btn-sm complete-btn me-2"><i class="bi bi-check2-square"></i></button>
        <button class="btn btn-sm delete-btn"><i class="bi bi-trash3"></i></button>
      </div>
    `;

    taskList.appendChild(listItem);

   
    taskInput.value = "";
    descriptionInput.value = "";
    PrioriteInput.value = "Select Priority";
  }
});


taskList.addEventListener("click", (e) => {
  const taskItem = e.target.closest("li");

  if (!taskItem) return;

  if (e.target.closest(".delete-btn")) {
    taskItem.remove(); 
  } else if (e.target.closest(".complete-btn")) {
    taskItem.querySelector("strong").classList.add("text-decoration-line-through"); 
    completedTaskList.appendChild(taskItem);
  }
});

completedTaskList.addEventListener("click", (e) => {
  const taskItem = e.target.closest("li");

  if (!taskItem) return;

  if (e.target.closest(".delete-btn")) {
    taskItem.remove();
  }
});


completeTab.addEventListener("click", () => {
  taskList.classList.add("d-none");
  completedTaskList.classList.remove("d-none");
});

[todayTab, weekTab].forEach((tab) => {
  tab.addEventListener("click", () => {
    taskList.classList.remove("d-none"); 
    completedTaskList.classList.add("d-none"); 
  });
});
