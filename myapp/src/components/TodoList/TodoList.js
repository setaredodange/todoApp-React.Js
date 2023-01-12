import React, { Component } from 'react'
import Todo from "../Todo/Todo"
import './TodoList.css';

export default class TodoList extends Component {

  constructor(props){
    super(props)
    this.state={
      todos :[],
      todoTitle : '',
      status :'all'
    }

    this.todoTitleHandler=this.todoTitleHandler.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  todoTitleHandler(event){
    console.log(event.target.value);

    this.setState({
      todoTitle: event.target.value
    })
    
  }

  addTodo(event){
    event.preventDefault();

   let  newTodoObject = {
      id: this.state.todos.length + 1,
      title : this.state.todoTitle,
      completed : false
    }

    this.setState (prevState => {
      return {
        todos : [...prevState.todos, newTodoObject],
        todoTitle : '',
      }
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.addTodo}>
            <input class="todo-input" type="text" maxLength="40" value={this.state.todoTitle}
             onChange={this.todoTitleHandler} />
           <button class="todo-button" type="submit"> + </button>
           <div class="select">
            <select name="todos" class="filter-todo">
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>

            </select>

           </div>

        </form>

        <div className="todo-container">
          <ul className="todo-list">
            {this.state.todos.map(todo => (
              <Todo {...todo}/>
            ))}

          </ul>
        </div>
      </>
    )
  }
}
