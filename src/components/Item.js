import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    const itemName = this.props.item.name
    const newLocation = prompt("Whats the new location you want?")
    this.props.store.editItem(itemName, newLocation)
  }

  deleteItem = () => {
    const itemName = this.props.item.name
    this.props.store.deleteItem(itemName)
  }

  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox"
          onClick={this.checkItem}
          value={item.name} />
        {item.name} {" "} {item.location}
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>)
  }
}

export default observer(Item)