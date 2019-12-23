import React from 'react';
import Todo from './Todo.js';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


class TodoList extends React.Component{
// we are using a Class Component here named Todo List which is an "extension" of React.Component (basically its saying this is an extenstion or addition to whatever file imports TodoList.js and declares it with <TodoList.js />

	render(){
		// Instead of just returning some JSX we will use the render method. The 'render' method works by only re-drawing/rendering the section of the screen that recieves updated data. Normally this would just re-render the whole page and this is the one of the many issues using react solves.
		return(
			<div>
				<h4>TodoList.js lives here!</h4>
				<Todo />
			</div>
		)
	}
}
export default TodoList;
