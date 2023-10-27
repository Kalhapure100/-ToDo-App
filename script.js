let inputs=document.getElementById("inp");
let text=document.querySelector(".text");
let clearButton = document.getElementById('clearButton');

function Add(){
    if(inputs.value==""){
        alert("Please Enter Task")
    }else{
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value=" ";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove();
        }
    }
    
}
function removeTask(element) {
    element.parentElement.remove();
}

function clearTasks() {
    const taskList = document.querySelector('.text');
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}