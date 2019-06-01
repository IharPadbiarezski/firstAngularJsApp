angular.module('todoApp', []).controller('TodoListController', function() {
	let todoList = this;
	todoList.todos = [ { text: 'learn AngularJS', done: true }, { text: 'build an AngularJS app', done: false } ];
	todoList.completedTodos = [];
	todoList.message = 'Hey, time to complete at least one task!';

	todoList.addTodo = () => {
		todoList.todos.push({ text: todoList.todoText, done: false });
		todoList.todoText = '';
	};

	todoList.remaining = () => {
		let count = 0;
		angular.forEach(todoList.todos, (todo) => {
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	todoList.archive = () => {
		angular.forEach(todoList.todos, (todo, index) => {
			if (todo.done) {
				todoList.completedTodos.push(todo);
				todoList.todos.splice(index, 1);
			}
		});

		if (todoList.completedTodos.length) {
			todoList.message = '';
		}
	};
});
