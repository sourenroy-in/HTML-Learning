let todo = [];

while (true) {
    let req = prompt("Please enter your request");
    
    if (req === "quit") {
        console.log("Quitting the app");
        break;
    }
    
    if (req === "list") {
        console.log("----------------");
        for (let i=0; i<todo.length; i++) {
            console.log(i , todo[i]);
        }
        console.log("-------------------");
    } else if (req === "add") {
        let task = prompt("Add Your task");
        todo.push(task);
        console.log("Task Added");
    } else if (req === "delete"){

        let ids = prompt("Please Enter the Task index");
        todo.splice(ids, 1);
        console.log("Task Deleted");

    } else {
        console.log("Invalid request. Try 'list', 'add', or 'quit'.");
    }
    let choice = prompt("Please enter your request");

    //else if (choice == "quite")
}