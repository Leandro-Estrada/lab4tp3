export class Item{
    id: number;
    cantidad:number;
    codigo:string;
    descripcion:string;
    pu:number;
    IVA:number;
    subtotal:number;

    constructor (cantidad:number, codigo:string, descripcion:string, pu:number, IVA:number){
        this.id=1;
        this.cantidad=cantidad;
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.pu=pu;
        this.IVA=IVA;
        this.subtotal=cantidad*pu;
    }
}