import { Todo } from '../classes';
import { todoList } from '../index';

// Referencias en el HTML
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulfiltros     = document.querySelector('.filters'); 
const anchorFiltros = document.querySelectorAll('.filtro');


export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
                <label> ${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}



// Eventos
// ///////
// Crear nuevo to-do
txtInput.addEventListener('keyup', ( event ) => {
    // condicion para que al presionar enter cree un todo y lo agregue al arreglo de todoList
    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {

        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value ); 
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        txtInput.value = '';
    }
});


// Marcar completado un to-do y eliminar individualmente
divTodoList.addEventListener('click', (event) => {
    
    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    if ( nombreElemento.includes('input') ) { //click en el check

        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')) {

        // Elimina todo del arreglo
        todoList.eliminarTodo( todoId );

        // Elimina referencia del html
        divTodoList.removeChild( todoElemento );
    }

    console.log(todoList);

});

btnBorrar.addEventListener('click', () =>{

    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i >= 0; i--) {
        const elemento = divTodoList.children[i];

        if ( elemento.classList.contains('completed') ) {
            divTodoList.removeChild(elemento);
        }
    }

});

ulfiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if( !filtro ) { return; }

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ) {
                    elemento.classList.add('hidden');
                }

        }


    }

});