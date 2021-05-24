export class Todo {

    // Lo que se ha hecho hasta ahora es crear objetos de los To-dos.
    // Para almacenarlos en localStorage se han converido a string mediante JSON.stringify
    // pero a la hora de recuperarlos del localStorage dejan de ser objetos y se pierden
    // los métodos que tenian definidos como objetos

    static fromJson ({id, tarea, completado, creado}) {
        
        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;

    }

    constructor( tarea ) {
        this.tarea = tarea;

        this.id         = new Date().getTime(); // get time da la representacion de la hora, min, seg de la fecha
        this.completado = false;
        this.creado      = new Date();
    }
    
    imprimirClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }

}