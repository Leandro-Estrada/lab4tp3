import { cliente } from './cliente';

export class factura{
    id: number;
    tipo: string;
    fecha: Date;
    numero: number;
    ptoVenta: number;
    cliente: string;
    total: number;   

    constructor (id:number, tipo:string, fecha:Date, numero:number, ptoVenta: number, cliente: string, total:number){
        this.id=1;
        this.tipo=tipo;
        this.fecha=fecha;
        this.numero=numero;
        this.ptoVenta=ptoVenta;
        this.cliente=cliente;
        this.total=total;
    }
}