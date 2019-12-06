import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { factura } from '../modelos/factura';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas = [];

  constructor(private DataService: DataService) {
    this.DataService.geFactura().subscribe(data => {
      this.facturas = data
    }, error => {
      alert("Falla lectura de facturas json");
    });
  }

  borrarFactura(numero) {
    var factura = this.facturas.find(function (fac) {
      return fac.numero == numero;
    });

    if (factura) {
      this.DataService.borrarCliente(factura.id).subscribe(borrado => {
        for (let i = 0; i < this.facturas.length; i++) {
          if (numero == this.facturas[i].numero) {
            this.facturas.splice(i, 1);
          }
        }
      })
    }
  }

  ngOnInit() {
  }  
}
