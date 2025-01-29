const taskInput = document.getElementById('taskInput');
const descriptionInput = document.getElementById('descriptionInput');
const PrioriteInput = document.getElementById('PrioriteInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const descriptionText = descriptionInput.value.trim();
  const PrioriteText = PrioriteInput.value.trim();

  if (taskText !== '' && descriptionText !== '' && PrioriteText !== 'select priorite') {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    listItem.innerHTML = `
      <div>
        <strong>${taskText}</strong> 
        <p class="mb-1">${descriptionText}</p>
        <span class="badge bg-${getPriorityColor(PrioriteText)}">${PrioriteText}</span>
      </div>
      <div>
        <button class="btn btn-sm complete-btn me-2"><i class="bi bi-check2-square"></i></button>
        <button class="btn btn-sm delete-btn"><i class="bi bi-trash3"></i></button>
      </div>
    `;

    taskList.appendChild(listItem);

    
    taskInput.value = '';
    descriptionInput.value = '';
    PrioriteInput.value = 'select priorite';
  }
});


taskList.addEventListener('click', (e) => {
  if (e.target.closest('.delete-btn')) {
    
    const taskItem = e.target.closest('li');
    taskItem.remove();
  } else if (e.target.closest('.complete-btn')) {

    const taskText = e.target.closest('li').querySelector('strong');
    taskText.classList.toggle('completed');
  }
});

// Function to get priority color
function getPriorityColor(priority) {
  switch (priority) {
    case 'basse': return 'success';
    case 'moyenne': return 'warning';
    case 'haute': return 'danger';
    default: return 'secondary';
  }
}
