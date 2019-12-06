import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { iProducto } from './iProducto'
import { Observable } from 'rxjs';



const productosUrl = './assets/productos.json';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  constructor(private httpClient: HttpClient) {
    console.log('ProductoService is Working');
  }

  getProducto(): Observable<HttpResponse<iProducto[]>> {
    return this.httpClient.get<iProducto[]>(
      productosUrl, { observe: 'response' });
  }
  /*getProducto() {
    return this.httpClient.get<iProducto[]>('./assets/productos.json');
   }*/
  getProductoById(id: any): Observable<any> {
    return this.httpClient.
      get<iProducto>(productosUrl + id)
      ;
  }

  addProducto(producto: iProducto): Observable<iProducto> {
    return this.httpClient.post<iProducto>(productosUrl, producto)

  }

  updateProducto(id: number, producto: iProducto): Observable<iProducto> {
    return this.httpClient.put<iProducto>(productosUrl + id, producto)
      ;
  }

  deleteProducto(id: number, producto: iProducto): Observable<iProducto> {
    return this.httpClient.delete<iProducto>(productosUrl + id);
  }

}