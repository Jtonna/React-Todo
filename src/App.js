import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
// Todo List Imports todo.js
import TodoForm from './components/TodoComponents/TodoForm';

// this is my todo Array
const ListOfThingsTodo =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
	  task: 'Learn React.js props and state',
	  id: 15288398537,
	  completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
