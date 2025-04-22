const userInput = document.getElementById("user");
const submitBtn = document.getElementById("submitBtn");
const todoList = document.getElementById("todoList");
function addTodo() {
  const newTask = userInput.value.trim(); 
  if (newTask) {
    const li = document.createElement("li");
    li.innerHTML = `${newTask} <button class="deleteBtn">Delete</button>`;
    todoList.appendChild(li);

    userInput.value = "";

    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
  }
}
submitBtn.addEventListener("click", addTodo);
const deleteButtons = document.querySelectorAll(".deleteBtn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const li = event.target.parentElement; 
    li.remove(); 
  });
});