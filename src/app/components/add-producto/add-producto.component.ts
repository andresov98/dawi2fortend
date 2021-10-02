import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';


@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  ProductoService: any;

 Producto: string[] = [];
  registraProducto(){
      console.log(this.Producto);
      this.ProductoService.registrar(this.Producto).subscribe(
          response => {
              console.log(response.mensaje);
              alert(response.mensaje);
            },
            error => {
              console.log(error);
            },
      );
  }



}
