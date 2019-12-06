import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {path: '', component: AboutComponent},
  {path: 'facturacion', component: FacturacionComponent},
  {path: 'facturas', component: FacturasComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'productos', component: ProductosComponent},
]

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    FacturacionComponent,
    ProductosComponent,
    ClientesComponent,
    FacturasComponent,
    ItemsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
