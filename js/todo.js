// info date
const dateNumber    = document.getElementById('dateNumber');
const dateText      = document.getElementById('dateText');
const dateMonth     = document.getElementById('dateMonth'); 
const dateYear      = document.getElementById('dateYear');

// task container

const taskContainer = document.getElementById('taskContainer');


const setDate = () => {
    date = new Date();
    dateNumber.textContent  = date.toLocaleString('fr', { day: 'numeric'});
    dateText.textContent    = date.toLocaleString('fr', {weekday:'long'});
    dateMonth.textContent   = date.toLocaleString('fr', {month:'short'});
    dateYear.textContent    = date.toLocaleString('fr', {year:'numeric'}); 
}

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    taskContainer.prepend(task);
    event.target.reset();

}


const changeTaskState = event => {
    event.target.classList.toggle('done');
};

// tâches faites et tâches à faire
const order = () => {
    const done = [];
    const toDo = [];
    taskContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })

    return [...toDo, ...done];
}
// Rangement des tâches
const renderOrderTask = () => {
order().forEach(el => taskContainer.appendChild(el))
};

setDate();

