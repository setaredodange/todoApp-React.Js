import React, { Component } from 'react'
import './Todo.css';

export default class Todo extends Component {
  render() {
    return (
      <div className="todo" style ={{display :'flex'}} >
        <li className="todo-item" > {this.props.title} </li>

        <button className='check-btn'>
            <i className="fas fa-check" aria-hidden="true"></i>
            </button>
        <button className='trash-btn'>
        <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        
      </div>
    )
  }
}
