export class producto{
    id: number;
    codigo: string;
    descripcion: string;
    pu: number;   

    constructor (id:number, codigo:string, descripcion:string, pu:number){
        this.id=id;
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.pu=pu;
    }
}