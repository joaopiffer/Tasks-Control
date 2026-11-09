
//funçao que adiciona tarefa 

function addTask() {
    //título da Tarefa
    const taskTitle = document.querySelector("#task-title").value

    if(taskTitle) {

        //clona template
        const template = document.querySelector('.template')
        const newTask = template.cloneNode(true)

        //adiciona titulo no span
        newTask.querySelector('.task-title').textContent = taskTitle
        
        // remover as classes desnecessárias 
        newTask.classList.remove("template")
        newTask.classList.remove("hide")
        
        // adiciona a taerda na list a

        const list = document.querySelector("#task-list")
        list.appendChild(newTask)

        //----ADICIONAR EVENTOS DE BOTÕES----
        //1. Evento de remover tarefa
        const removeBtn = newTask.querySelector('.remove-btn')
        removeBtn.addEventListener("click", function() {
            removeTask(this)
        })

        //2. Evento de concluir tarefa
        const doneBtn = newTask.querySelector('.done-btn')
        doneBtn.addEventListener('click', function(){
            completeTask(this)
        })

        // limpar texto
        document.querySelector("#task-title").value = ""

    }



}
// evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function(e) {

    e.preventDefault()
    addTask()


})

// eventos para os botões de remove e done


function removeTask(task) {
    task.parentNode.remove(true)
}

function completeTask(task) {
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle('done')
}