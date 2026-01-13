const input = document.getElementById("Addtask");
const addBtn = document.getElementById("Addtaskbtn");
const container = document.getElementById("task-list");
const allBtn = document.querySelector(".all");
const completedBtn = document.querySelector(".completed");
const pendingBtn = document.querySelector(".pending");


function addTask()
{
    if(input.value.trim()===""){
        alert("You must enter something!");
    }
    else {   
        let li = document.createElement("li");
        li.innerHTML= input.value+ " ";
         
        let span = document.createElement("span");
        span.innerHTML = "🗑️";
        span.style.marginLeft= "10px";
        li.appendChild(span);

        container.appendChild(li)
        saveData();
    }
    input.value="";
}
container.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", container.innerHTML);
}

function showTask(){
    container.innerHTML = localStorage.getItem("data") || "";
}
showTask();

allBtn.addEventListener("click",() => {
    let tasks = container.querySelectorAll("li");
    tasks.forEach(task => {
        task.style.display = "list-item";
   });
});

completedBtn.addEventListener("click", () => {
    let tasks = container.querySelectorAll("li");
    tasks.forEach(task => {
        if(task.classList.contains("checked")){
            task.style.display= "list-item"
        } else{
            task.style.display = "none";
        }
    });
});

pendingBtn.addEventListener("click", () => {
    let tasks = container.querySelectorAll("li");
    tasks.forEach(task => {
        if (!task.classList.contains("checked")){
            task.style.display = "list-item"
        }else {
            task.style.display = "none";
        }
    });
});


addBtn.addEventListener("click", addTask);