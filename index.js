let task = document.querySelector(".item");
let btn = document.querySelector(".btn");
let display = document.querySelector(".tasks");
btn.addEventListener("click", addToTask);

window.addEventListener("load", renderDOM);


//display all the tasks
function renderDOM() {
  let count = 1;
  let storage = window.localStorage;
  let items = JSON.parse(storage.getItem("tasks")) || [];
  let div = document.querySelector(".tasks");
  for (let i = 0; i < items.length; i++) {
    let p = document.createElement("p");
    p.textContent = `${count++}.${items[i].task}`;
    div.append(p);
  }
}


// adding tasks to the list
function addToTask() {
  let p = document.createElement("p");
  if (task.value != "") {
    let storage = window.localStorage;
    let items = JSON.parse(storage.getItem("tasks")) || [];
    // console.log(items)
    class Task {
      constructor(task, status = false) {
        this.task = task;
        this.status = status;
      }
    }

    let tasks = new Task(task.value);

    items.push(tasks);
    // console.log(items)
    storage.setItem("tasks", JSON.stringify(items));

    let div = document.querySelector(".tasks");
    div.textContent = "";

    renderDOM();
    task.value = "";
  } else {
    alert("Please give any task to add");
  }
}


let dltbtn  = document.querySelector(".deletebtn")
dltbtn.addEventListener("click",deleteAll)

function  deleteAll(){
  window.localStorage.removeItem("tasks")
  document.querySelector(".tasks").textContent  = ""
}


