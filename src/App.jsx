import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { useState, useEffect } from "react";
function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]); //is a hook used to manipulate data
  // useState does not need a param but we decided to add it

  const [selectedTab, setSelectedTab] = useState("Open"); //in react, when destructuring an array, the second function is always a function

  function handleAddTodo(newTodo) {
    //we are considering the case where we add an inputed todo into the list
    //the way react sets things up, its easier to just make a new list when adding to a list
    //we then pass it along to the TodoInput child seen below in the code
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
    console.log("Asdasd");
  }

  function handleCompleteTodo(index) {
    //update/edit/modify
    let newTodoList = [...todos]; //create a shallow copy of the todo
    let completedTodo = todos[index]; //store the todo we have set to as done,and update the complete value
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index; //"Keep all items except the one at the given index."
    });

    setTodos(newTodoList); //set the state of the todo List into this new Todo
    handleSaveData(newTodoList);
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    } //if there is no local storage, or there is a localStorage but the item todo-app doesn not exsist, return nothing
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  return (
    <>
      <Header todos={todos}> </Header>
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      ></Tabs>
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
      >
        {" "}
      </TodoList>
      <TodoInput handleAddTodo={handleAddTodo}> </TodoInput>
    </>
  );
}

export default App;
