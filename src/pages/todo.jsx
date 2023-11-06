import React, { useState } from "react"; 
import Form from "../components/form/index.jsx"; 
import Lista from "../components/list/index.jsx";
import "./todo.css"

const Todo = () => { 
  const [task, setTask] = useState(""); 
  const [itemsList, setItemsList] = useState([]);

const handleChangeInput = (event) => { 
  const inputTask = event.target.value;
  setTask(inputTask);
};

const handleAddItemToList = (event) => 
{ event.preventDefault();

if (!task) {
  return;
}

setItemsList([...itemsList, task]);
setTask("");

};

return ( <div className="todo-wrapper"> <h1 id="todoHeader">ToDo List</h1> 
<Form task={task} handleChangeInput={handleChangeInput} handleAddItemToList={handleAddItemToList} /> 
<Lista itemsList={itemsList} /> </div> ); };

export default Todo;