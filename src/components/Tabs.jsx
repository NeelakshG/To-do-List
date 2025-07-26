export function Tabs(props) {
  const tabs = ["All", "Open", "completed"]; //making an array of the different types of tabs I want
  const { todos, selectedTab, setSelectedTab } = props;
  return (
    ////instead of creating each tab,but making indiviual buttons, you can map through the array
    //we map each tab into an index and make a btn
    //we have to be able to distinguish all the btns and we do this by adding a key to each btn
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All" // All case
            ? todos.length // print the length of the todos length
            : tab === "Open" //open case
            ? todos.filter((val) => !val.complete).length //print out all the are not completed
            : todos.filter((val) => val.complete).length; //print out the ones finished

        return (
          <button
            onClick={() => setSelectedTab(tab)}// this line updates the state reacts in
            //if we didn't update the state, if user clicked a new tab it woulndn't update and therefor would stay highlighting the old tab
            className={
              //class name is being updated dynamically, we are underlining the selectedTab so user knows which one they are in
              "tab-button " + (tab === selectedTab ? " tab-selected" : " ")
            }
            key={tabIndex}
          >
            {tab} <span>{numOfTasks}</span>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
