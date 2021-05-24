import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ));
// La instrucción anterior se puede simplificar :
//      todoList.todos.forEach( crearTodoHtml );
// Quiere decir que el primer argumento del callback (forEach)
// esta llamando a la funcion y el argumento que esa funcion requiere 
// es el argumento que esta regresando el callback, en este caso el foreach
// solo funciona con funcines que reciben un argumento


const newTodo = new Todo('Aprender JS');
todoList.todos[2].imprimirClase();


console.log('todos', todoList.todos);
