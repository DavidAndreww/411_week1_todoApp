import React from "react";
import Header from "./Header";
import TodoItem from './TodoItem'

class App extends React.Component {
  state = {
    listOfItems: [],
    itemId: 0,
    itemText: ""
  };

  

  render() {
    return (
      <div className="todo-list">
        <Header />
        <div className="input-field">
          <input className="input-field" 
            type="text"
            ref={this.inputField}
            required
            placeholder="Whaddya gotta do?"
          />
        </div>
        <button>Add Item</button>
        <ul className="list-field">
          <TodoItem />
        </ul>
      </div>
    );
  }
}

export default App;
