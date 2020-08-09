import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItemsList] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItemsList((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    setItemsList((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TO DO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add an item"
            value={inputList}
            onChange={itemEvent}
          ></input>
          <button onClick={listOfItems}>+</button>
          <ol>
            {Items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                  text={itemval}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
