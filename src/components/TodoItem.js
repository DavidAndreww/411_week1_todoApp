import React from 'react';

class TodoItem extends React.Component {
  render(){
    return(
      <div className="item">
        <span>{this.props.index + 1}: {this.props.itemText}</span>
        <button onClick={() => this.props.deleteListItem(this.props.match)}>Delete</button>
      </div>
    );
  };
}

export default TodoItem;