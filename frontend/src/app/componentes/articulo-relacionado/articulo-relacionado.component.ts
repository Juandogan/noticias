import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../servicios/crud.service'
import { Articulos } from '../../models/articulos';
@Component({
  selector: 'app-articulo-relacionado',
  templateUrl: './articulo-relacionado.component.html',
  styleUrls: ['./articulo-relacionado.component.css']
})
export class ArticuloRelacionadoComponent implements OnInit {

  articulos: Articulos[] = []

  articuloBusqueda: Articulos[] = []


  @Input('data') nota : any ;
  @Input('estado') estado = true ;

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    console.log('badenra',this.nota)

  }


  cut(value:any){
    if(value){
    var corte = value.slice(2)
    return corte
  }else

 return value;


};

}
