export function Header(props) {
  const { todos } = props; //destructing the todos property in props and only taing that property
  const todoLength = todos.length;

  //configuring the texts to output the right thing depending on the number of tasks
  const isTasksPlural = todos.length != 1;
  const taskOrtasks = isTasksPlural ? "tasks" : "task";
  return (
    <header>
      <h1 className="text-gradient">
        You have {todoLength} open {taskOrtasks}.
      </h1>
    </header>
  );
}
