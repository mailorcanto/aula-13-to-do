import React, { useState } from "react"; //useState salva no estado da aplicação os valores que estamos utilizando  
import Form from "../components/form/index.jsx"; 
import Lista from "../components/list/index.jsx";
import "./todo.css"

const Todo = () => { 
  const [task, setTask] = useState(""); 
  const [itemsList, setItemsList] = useState([]); //comentar linha se for usar localStorage
  //const [itemsList, setItemsList] = useState( //código para armazenar dados localmente (NÃO RECOMENDADO)
  //JSON.parse(localStorage.getItem('tasks')) || []); //código para armazenar dados localmente (NÃO RECOMENDADO)

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
 //localStorage.setItem("tasks", JSON.stringify([...itemsList, task])) //código para armazenar dados localmente (NÃO RECOMENDADO)
setTask("");

};

return ( <div className="todo-wrapper"> <h1 id="todoHeader">ToDo List</h1> 
<Form task={task} handleChangeInput={handleChangeInput} handleAddItemToList={handleAddItemToList} /> 
<Lista itemsList={itemsList} /> </div> ); };

export default Todo;
