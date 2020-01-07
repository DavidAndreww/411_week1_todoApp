import React from 'react';

class TodoItem extends React.Component {
  render() {
    return(
      <div className="item">
        <span>{this.props.text}</span>
        <button>Delete</button>
      </div>
    )
  }
}

export default TodoItem