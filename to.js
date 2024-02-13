const taskForm = document.getElementById('form');
    const taskInput = document.getElementById('input');
    const prioritySelect = document.getElementById('selector');
    const dateInput = document.getElementById('dateInput');
    const taskList = document.getElementById('taskList');
    taskForm.addEventListener('submit',function(e){
        e.preventDefault();
        const task =taskInput.value;
        const priority =prioritySelect.value;
        const date=dateInput.value;
        if (task.trim() == ''){
            alert('Please enter a task.');
            return;
        }
        const taskitem = document.createElement('ul');
        taskitem.classList.add('task-item');
        taskitem.innerHTML = `
        <li>${task} Practice</li>
        <li> Priority : ${priority}</li> 
        <li> Deadline : ${date}</li>
        <li style="background-color:green; border: 5px; color:white; border-radius:3px;  padding:2px;">Mark done</li>`;
        taskList.appendChild(taskitem);

        taskInput.value='';
        prioritySelect.value='high';
        dateInput.value='';
    });