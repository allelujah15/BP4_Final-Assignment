// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้

userTaskList.push({id: 5, task: "Walk the dog" });
function updateTask(id, newTask){
  const taskToUpdate = userTaskList.find(task => task.id === id);
  if (taskToUpdate){
    taskToUpdate.task = newTask;
  } else {
    console.log(`Task With ID ${id} not found`)
  }
}
updateTask(4,"Go to the gym");
userTaskList.splice(4)
console.log(userTaskList)


