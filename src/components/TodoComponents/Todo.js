import React from 'react';
import TodoList from './TodoList';

class Todo extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				{this.props.todo.task}
			</div>
		)
	}
}

export default Todo;
