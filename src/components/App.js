import React from "react";
import Header from "./Header";
import ToDoItem from "./ToDoItem";

class App extends React.Component {
  // Creates state object
  state = {
    listOfItems: [],
    itemId: 0,
    itemText: ""
  };

  // Creates reference on <input> to let us access that node and its properties
  userInput = React.createRef();

  createListItem = () => {
    let counter = this.state.itemId;
    // value = data entered into <input>
    let input = this.userInput.current.value;
    // take a copy of the state.list (so we don't overwrite old one)
    counter++;
    let newItem = {
      itemId: counter,
      itemText: input
    };
    // set state of state.list to include new value
    this.setState({
      listOfItems: [...this.state.listOfItems, newItem],
      itemId: counter
    });
    // clears <input> field
    this.userInput.current.value = "";
  };

  //Able to make this work using splice to remove the appropriate item
  deleteListItem = identifier => {
    // variable to hold copy of the array
    let listOfItems = this.state.listOfItems;
    // gets the object with id that matches the parameter passed into this function (object id associated with the individual button that was clicked) 
    let buttonMatch = listOfItems.find(x => x.id === identifier);
    // get the index of that object in the listOfItems array
    let index = listOfItems.indexOf(buttonMatch);
    // . Splice matched object from array list removing ToDoItem, retuning new array
    listOfItems.splice(index, 1);
    // . Update state to the new array
    this.setState({ listOfItem: [...listOfItems] });
  };

  render() {
    let listOfItems = this.state.listOfItems;
    return (
      <div className="todo-list">
        <Header heading={`My ${new Date().getFullYear()} To Do List`} />
        <div className="input-field">
          <input
            name="input"
            type="text"
            ref={this.userInput} // ref= references DOM node on page, relies on React.createRef();
            required
            placeholder="Whaddya gotta do?"
          />
          <button onClick={() => this.createListItem()}>Add Item</button>
        </div>
        <ul className="list-field">
          {listOfItems.map((object, index) => (
            <ToDoItem
              key={object.itemId}
              index={index}
              itemText={object.itemText}
              deleteListItem={this.deleteListItem}
              match={object.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
