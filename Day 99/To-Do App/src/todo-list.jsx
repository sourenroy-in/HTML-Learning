import { useState } from "react";

export default function TodoList() {
    let [todos,setTodo] = useState(["sample"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewtask = () => {
        // console.log("We Have new task todo");
        setTodo([...todos, newTodo]);
        setNewTodo("");
    }
    let updateValue = (event) =>{
        setNewTodo(event.target.value);
    }



    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateValue} />
            <br />
            <button onClick={addNewtask}>Add Task</button>
            <br /><br /><br />
        <h1>To Do List</h1>
        <hr />
        <ul>
            {
                todos.map((todo)=> {
                return <li>{todo}</li>;
                
                })
            }
        </ul>
        
        </div>
    );
}