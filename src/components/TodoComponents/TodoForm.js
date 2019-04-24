import React from 'react';

class TodoForm extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<form onSubmit={this.props.addTodo}>
					<input type="text" value={this.props.todoTask} name="todoTask" onChange={this.props.changeHandler}/>
					<button type="submit">Add Todo</button>
					<button type="button" onClick={this.props.clearTodos}>Clear Completed</button>
						{/* type has to = button or else it acts like submit is being clicked */}
				</form>
			</div>
		)
	}
}

export default TodoForm;
