"use strict";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value.trim();
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = `<i class="fa-solid fa-x"></i>`;
    li.appendChild(span);
  }
  saveData();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
    if (e.target.tagName === "SPAN") {
      removeData(e)
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//Its a bit cleaner to wrap this in a function
function removeData(e){
  e.target.parentElement.remove();
  saveData()
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

//Instead of just showing the tasks when the JS is ready, make it a habit to wait for the entire domain
document.addEventListener("DOMContentLoaded", () => {
  showTask()
})

