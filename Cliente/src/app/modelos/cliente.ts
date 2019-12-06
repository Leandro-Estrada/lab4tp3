export class cliente {
     id: number;
     nombre: string;
     direccion: string;
     cuit: string;

    constructor(id: number, nombre: string, direccion: string, cuit: string) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.cuit = cuit;
    }

    // public get id(): number {
    //     return this.id;
    // }
    // public set id(value: number) {
    //     this.id = value;
    // }

    // public get nombre(): string {
    //     return this.nombre;
    // }
    // public set nombre(value: string) {
    //     this.nombre = value;
    // }

    // public get direccion(): string {
    //     return this.direccion;
    // }
    // public set direccion(value: string) {
    //     this.direccion = value;
    // }
    // public get cuit(): string {
    //     return this.cuit;
    // }
    // public set cuit(value: string) {
    //     this.cuit = value;
    // }
}