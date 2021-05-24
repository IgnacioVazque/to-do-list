import { Todo } from "./todo.class";

export class TodoList {

    constructor () {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    // Métodos
    nuevoTodo(todo) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {
        // Se crea un arreglo exceptuando el elemento que coincide con el 
        // id que se tiene, se sobreescribe el arreglo y se almacena en 'this.todos'
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        // hacer barrido en el arreglo igualando el id
        for ( const todo of this.todos ) {
            console.log(id, todo.id);

            if( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {

        // Retorna los to-do que no estan marcados como completados
        this.todos = this.todos.filter( todo => !todo.completado)

        this.guardarLocalStorage();

    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos) );
    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        :  [] ;

        // if ( localStorage.getItem('todo') ) {

        //     this.todos = JSON.parse (localStorage.getItem('todo'));
            
        //     console.log('cargarLocal;', this.todos);
        //     console.log(typeof this.todos);

        // } else {
        //     this.todos = [];
        // }

        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
        this.todos = this.todos.map( Todo.fromJson );

    }

}