import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <form>
            <input class="todo-input" type="text" maxLength="40" value="React" />
           <button class="todo-button" type="submit"> + </button>
           <div class="select">
            <select name="todos" class="filter-todo">
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>

            </select>

           </div>

        </form>
      </div>
    )
  }
}
