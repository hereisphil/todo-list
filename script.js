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
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
