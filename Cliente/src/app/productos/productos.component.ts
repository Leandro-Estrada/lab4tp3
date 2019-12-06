import { Component, OnInit } from '@angular/core';
import { producto } from '../modelos/producto'
import { DataService } from '../data.service'
import { iProducto } from '../iProducto'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = [];

  constructor(private DataService: DataService) {
    this.DataService.getProducto().subscribe(data => {
      this.productos = data
    }, error => {
      alert("Falla lectura de producto json");
    });
  }

  agregarProducto(id, codigo, descripcion, pu) {
    console.log(id, codigo, descripcion, pu);
    var nuevoProducto = new producto(id, codigo, descripcion, pu);
    console.log(nuevoProducto);
    this.DataService.addProducto(nuevoProducto as iProducto).subscribe((nuevo) => {
      this.productos.push(nuevo);
    }, error => {
      alert("Falla agregar productos json");
    });

    return false;
  }

  modificarProducto(id, codigo, descripcion, pu) {
    var producto = this.productos.find(function (pro) {
      return pro.pu == pu;
    });

    producto.id = id;
    producto.codigo = codigo;
    producto.descripcion = descripcion;
    producto.pu = pu;

    if (producto) {
      this.DataService.editarCliente(producto).subscribe(editado => {
      })
    }
  }

  borrarProducto(pu) {

    var producto = this.productos.find(function (pro) {
      return pro.pu == pu;
    });

    if (producto) {
      this.DataService.borrarProducto(producto.id).subscribe(borrado => {
        for (let i = 0; i < this.productos.length; i++) {
          if (pu == this.productos[i].pu) {
            this.productos.splice(i, 1);
          }
        }
      })
    }
  }

  ngOnInit() {
  }
}
