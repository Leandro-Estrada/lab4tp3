import { Component, OnInit } from '@angular/core';
import { cliente } from '../modelos/cliente';
import { DataService } from '../data.service';
import { iCliente } from '../iCliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [];

  constructor(private DataService: DataService) {
    this.DataService.getCliente().subscribe(data => {
      this.clientes = data
    }, error => {
      alert("Falla lectura de clientes json");
    });
  }

  agregarCliente(id, nombre, direccion, cuit) {
    var nuevoCliente = new cliente(id, nombre, direccion, cuit);

    this.DataService.addCliente(nuevoCliente as iCliente).subscribe((nuevo) => {
      this.clientes.push(nuevo);
    }, error => {
      alert("Falla agregar clientes json");
    });

    return false;
  }

  modificarCliente(id, nombre, direccion, cuit) {
    var cliente = this.clientes.find(function (cli) {
      return cli.cuit == cuit;
    });

    cliente.id = id;
    cliente.nombre = nombre;
    cliente.direccion = direccion;
    cliente.cuit = cuit;

    if (cliente) {
      this.DataService.editarCliente(cliente).subscribe(editado => {

      })
    }
  }

  borrarCliente(cuit) {


    var cliente = this.clientes.find(function (cli) {
      return cli.cuit == cuit;
    });

    if (cliente) {
      this.DataService.borrarCliente(cliente.id).subscribe(borrado => {
        for (let i = 0; i < this.clientes.length; i++) {
          if (cuit == this.clientes[i].cuit) {
            this.clientes.splice(i, 1);
          }
        }
      })
    }
  }

  ngOnInit() {
  }
}
