// Select elements
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new <li> element
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Add delete functionality
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append delete button to the list item
  li.appendChild(deleteBtn);

  // Append list item to the task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}
