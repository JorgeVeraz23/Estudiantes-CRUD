

export class Estudiante {
    nombre: string;
    apellido: string;
    estado: boolean;
    edad: string; // Nueva propiedad agregada

    constructor(nombre: string, apellido: string, estado: boolean, edad: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estado = estado;
        this.edad = edad; // Asignamos el valor de edad al atributo correspondiente
    }
}
