console.log("Connected!");

var toDos = ["Buy fun"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listToDos();
  } else if (input === "new") {
    addToDo();
  } else if (input === "delete") {
    deleteToDo();
  }
  input = prompt("What would you like to do?");
}
console.log("Understood, quitting program");

function listToDos() {
  console.log("****");
  toDos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("****");
}

function addToDo() {
  var newToDo = prompt("Enter a new action item");
  toDos.push(newToDo);
  console.log("Added item");
}

function deleteToDo() {
  var index = prompt("Enter index of item to delete");
  toDos.splice(index, 1);
  console.log("Deleted item");
}
