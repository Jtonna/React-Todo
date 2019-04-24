import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
	constructor(){
		super();
	}

	render(){

		console.log(this.props)

		return(
			<div>
				todolist.js is here
				{this.props.todos.map((todo) => (
					<Todo todo={todo} />
					// passes data to the "todo" component
				))}
			</div>
		)
	}
}

export default TodoList;
