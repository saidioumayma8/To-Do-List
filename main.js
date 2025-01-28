const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add task
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        listItem.innerHTML = `
          <span class="task-text">${taskText}</span>
          <div>
            <button class="btn btn-sm complete-btn me-2"><i class="bi bi-check2-square"></i></button>
            <button class="btn btn-sm delete-btn"><i class="bi bi-trash3"></i></button>
          </div>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';
      }
    });

    // Handle task actions
    taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        // Delete task
        const taskItem = e.target.closest('li');
        taskItem.remove();
      } else if (e.target.classList.contains('complete-btn')) {
        // Mark task as completed
        const taskText = e.target.closest('li').querySelector('.task-text');
        taskText.classList.toggle('completed');
      }
    });