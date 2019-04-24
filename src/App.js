import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

const todosList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      todos: todosList,
      // adds an array to the todo list
      todoTask: '',
    }
    this.addTodo = this.addTodo.bind(this)
  }
  
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo(e) {
    // e = event
    e.preventDefault();
    // prevents the event of a click from refreshing the page
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.todoTask,
          id: Date.now(),
          completed: false,
        }
      ]

    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTodo={this.addTodo}
          clearTodos={this.clearTodos}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
