export class Todo {

    constructor( tarea ) {
        this.tarea = tarea;

        this.id         = new Date().getTime(); // get time da la representacion de la hora, min, seg de la fecha
        this.completado = false;
        this.crado      = new Date();
    }
    
}