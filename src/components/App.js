import React from "react";

/* 
1. create state for your app.js with isClicked: false in it
2. create a button and add an on-click handler that changes the value of isClicked
3. create an input field then a function that changes state of text: '' to the e.target.value           onChange of the input field
4. change your onClickHandler function to push into the value of todos: [] the text
5. Now clear text in the same function.
6. Once you have state being changed properly create an element for each of the items in todos: []
7. Now .map() over todos and show each item in the DOM. REMEMBER to give the callback function in       .map() and index and provide that to each of the elements as index={index}
8. Create a button on each of the elements that use this and when clicked removes/deletes the item      from todos: []
*/

class App extends React.Component {
  state = {
    isClicked: false,
    text: '',
    todos: []
  };

  changeClick = (e) => {
    let isClicked = this.state.isClicked 

    if (isClicked === true){
      isClicked = false
    } else {
      isClicked = true
    }
   
    this.setState({
      isClicked: isClicked,
    })
  };

  changeText = (e) => {
    let input = e.target.value

    this.setState({
      text: input
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.changeClick}>Change</button>
        <input type="text" onChange={this.changeText}></input>
      </div>
    );
  }
}

export default App;
