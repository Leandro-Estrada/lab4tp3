import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { cliente } from '../modelos/cliente';
import { iProducto } from '../iProducto';
import { iCliente } from '../iCliente';
import { Item } from '../modelos/item';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {
  
 public productos: iProducto[];
 public clientes: iCliente[];
  
  constructor(private DataService: DataService) {
    this.DataService.getProducto().subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    }, error => {
      alert("Falla lectura de productos json");
    });
    this.DataService.getCliente().subscribe(data => {
      this.clientes = data;
      console.log(this.clientes);
    }, error => {
      alert("Falla lectura de clientes json");
    });


  }
  
  Items = [];

  agregarItem(id, cuit, codigo, descripcion, pu, IVA, Cantidad) {
    var nuevoItem = new Item(Cantidad, codigo, descripcion, pu, IVA);

    this.Items.push(nuevoItem);

    //seria algo asi!!
    // this.DataService.addItem(nuevoItem as iItem).subscribe((nuevo) => {
    //   this.Item.push(nuevo);
    // }, error => {
    //   alert("Falla agregar Item json");
    // });

  }

  quitarItem(codigo) {
    var item = this.Items.find(function (itm) {
      return itm.codigo == codigo;
    });

    if (item) {
      //      this.DataService.borrarItem(cliente.id).subscribe(borrado => {
      for (let i = 0; i < this.Items.length; i++) {
        if (codigo == this.Items[i].codigo) {
          this.Items.splice(i, 1);
        }
      }
      //      })
    }
  }

  

  
  ngOnInit() {
  }

}
