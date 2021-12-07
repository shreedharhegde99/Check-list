let task = document.querySelector(".item");
let btn = document.querySelector(".btn");
let display = document.querySelector(".tasks");
btn.addEventListener("click", addToTask);

window.addEventListener("load", renderDOM);

function renderDOM() {
    let count   =1;
  let storage = window.localStorage;
  let items = JSON.parse(storage.getItem("tasks"));
  let div = document.querySelector(".tasks");
  for (let i = 0; i < items.length; i++) {
    let p = document.createElement("p");
    p.textContent = `${count++}.${items[i]}`;
    div.append(p);
  }
}




function addToTask() {
  let p = document.createElement("p");
  if (task.value != "") {
    let storage = window.localStorage;
    let items = JSON.parse(storage.getItem("tasks")) || [];
    items.push(task.value);
    storage.setItem("tasks", JSON.stringify(items));
    console.log(items);
    let div =   document.querySelector(".tasks")
    div.textContent = "";
    
    renderDOM()
    task.value = "";
  } else {
    alert("Please give input to add");
  }
}
