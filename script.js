// function addTask() {
//   const inputField = document.getElementById("todo-input");
//   const newTask = inputField.value.trim();

//   if (newTask) {
//     const list = document.getElementById("todo-list");
//     const taskItem = document.createElement("li");

//     // that is innerHtml but i change it to textContent
//     taskItem.textContent = newTask;
//     // Add delete button element for every task
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.removeChild();

//     taskItem.appendChild(deleteBtn);

//     // Append new task to the list
//     list.appendChild(taskItem);

//     // Clear the input after adding a task
//     inputField.value = "";
//   } else {
//     alert("Please enter a task to add.");
//   }
// }

// document.querySelector("#add-btn").addEventListener("click", () => {
//   addTask();
// });
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const ul = document.querySelector("#todo-list");

function addTask() {
  const taskMessage = input.value.trim();

  if (taskMessage) {
    const li = document.createElement("li");
    li.textContent = taskMessage;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(removeBtn);
    ul.appendChild(li);
    input.value = "";
  } else {
    alert("!");
  }
}

addBtn.addEventListener("click", () => {
  addTask();
});
