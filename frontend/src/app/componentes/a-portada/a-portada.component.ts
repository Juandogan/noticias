import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-a-portada',
  templateUrl: './a-portada.component.html',
  styleUrls: ['./a-portada.component.css']
})
export class APortadaComponent implements OnInit {
  @Input('nro') nro: any;
  @Input('publi') publi: any;
  @Input('data') data: any;

  

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
 
   

  }

  cut(value: any) {
    var corte = value.slice(2)

    return corte
  };

  sumarContador(x:any){

 
    if(x === 7 ){
      var aux = this.publi[0]?.contador7 + 1 
      this.publi[0].contador7 = aux
          this.crudService.modificarAnuncios(this.publi[0]).subscribe(res=>{

    })
  }
  }
}
