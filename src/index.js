import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach((todo) => crearTodoHtml(todo));

//todoList.nuevoTodo(tarea);

//console.log(todoList);

//crearTodoHtml(tarea);
