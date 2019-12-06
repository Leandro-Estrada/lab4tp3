import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iCliente } from './iCliente';
import { iProducto } from './iProducto';
import { iFactura } from './iFactura';

const url = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('Service is Working');
  }
  // clientes
  getCliente() {
    return this.httpClient.get<iCliente[]>('http://localhost:3000/clientes');
  }

  addCliente(cliente: iCliente) {
    return this.httpClient.post<iCliente[]>(url + 'clientes', cliente);
  }

  editarCliente(cliente: iCliente) {
    return this.httpClient.put<iCliente>(url + 'clientes/' + cliente.id, cliente);
  }

  borrarCliente(id: number) {
    return this.httpClient.delete<iCliente>(url + 'clientes/' + id);
  }
  //  productos
  getProducto() {
    return this.httpClient.get<iProducto[]>('http://localhost:3000/productos');
  }

  addProducto(producto: iProducto) {
    console.log(producto);
    return this.httpClient.post<iProducto[]>(url + 'productos', producto);
  }

  editarProducto(producto: iProducto) {
    return this.httpClient.put<iProducto>(url + 'productos/' + producto.id, producto);
  }

  borrarProducto(id: number) {
    return this.httpClient.delete<iProducto>(url + 'productos/' + id);
  }

  //  facturas
  geFactura() {
    return this.httpClient.get<iFactura[]>('http://localhost:3000/facturas');
  }

  addFactura(factura: iFactura) {
    console.log(factura);
    return this.httpClient.post<iFactura[]>(url + 'facturas', factura);
  }

  editarFactura(factura: iFactura) {
    return this.httpClient.put<iFactura>(url + 'facturas/' + factura.id, factura);
  }

  borrarFactura(id: number) {
    return this.httpClient.delete<iFactura>(url + 'facturas/' + id);
  }
}
