import React from 'react';
import Todo from './Todo'

const todos = [
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


class TodoList extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				todolist.js is here
				<Todo />
			</div>
		)
	}
}

export default TodoList;
