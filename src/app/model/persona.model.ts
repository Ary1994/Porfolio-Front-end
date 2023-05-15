export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    acercaDe: string;
    titulo1 : string;
    titulo2 : string;
    img: string;
    cumple:string;
    telefono:string;
    edad:string;
    email:string;
    constructor(nombre: string, apellido: string, acercaDe: string, titulo1: string, titulo2 : string,  img: string,cumple:string, email:string,telefono:string,edad: string,){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDe = acercaDe;
        this.titulo1 = titulo1;
        this.titulo2 = titulo2;
        this.img = img;
        this.cumple=cumple;
        this.email=email;
        this.telefono=telefono;
        this.edad=edad;

    }

}