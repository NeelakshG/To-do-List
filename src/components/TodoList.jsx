import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab } = props; //take in the prop from the parent child

  //we passed down the selectedTab from the parent and use that to filter which list user wants to see
  const filterTodosList = //filtered todo list to show the right todo
    selectedTab === "All"
      ? todos
      : selectedTab === "completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          // For each todo item, render a TodoCard
          // Use `todoIndex` as a unique `key` prop (React uses it to optimize rendering)
          // Pass `todoIndex` explicitly as a prop (not anymore)
          // Use the spread operator `{...props}` to pass ALL other props down to each TodoCard (not anymore)
          <TodoCard
            key={todoIndex}
            {...props}
            todo={todo} //send over the current todo
            todoIndex={todos.findIndex((val) => val.input == todo.input)} //pass over the index of the todo so we know what to take out
          />
        );
      })}
    </>
  );
}
