
let addButton = document.getElementById('add');
let table = document.getElementById('task-table');
let input = document.getElementById('task');
let tasksContainer = document.getElementById('tasks')
let TasksList = [];
main();
function main(){
    if(window.localStorage.getItem('Data')){
        TasksList = JSON.parse(window.localStorage.getItem('Data'));
    }
    if(!TasksList.length){
        tasksContainer.style.display = "none";
    }
    let oldTasks = '';
    for(let i = 0; i < TasksList.length; i++){
        oldTasks += `<tr>
                        <td>${TasksList[i].task}</td>
                        <td id='deleteTask'>
                            <button id="delete" onclick=deleteTask(${TasksList[i].index})>
                                <img src="delete.png">
                            </button></td>
                    </tr>`;
    }
    table.innerHTML = oldTasks;
}
addButton.addEventListener('click',()=>{
    if(!input.value){
        return
    }
    tasksContainer.style.display = "block";
    table.innerHTML += `<tr>
                            <td>${input.value}</td>
                            <td id='deleteTask'>
                                <button id="delete" onclick=deleteTask(${TasksList.length})>
                                    <img src="delete.png">
                                </button></td>
                        </tr>`;
    TasksList.push({
        index: TasksList.length,
        task: input.value
    });
    input.value = '';
    window.localStorage.setItem('Data' ,  JSON.stringify(TasksList));
})

function deleteTask(index){
    TasksList = TasksList.filter((val)=>{return val.index !== index})
    window.localStorage.setItem('Data' ,  JSON.stringify(TasksList));
    main()
}