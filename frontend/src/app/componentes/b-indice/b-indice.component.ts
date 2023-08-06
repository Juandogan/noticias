import { Component, OnInit,Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-b-indice',
  templateUrl: './b-indice.component.html',
  styleUrls: ['./b-indice.component.css']
})
export class BIndiceComponent implements OnInit {



  @Input('data') data : any ;
  

  publi :any
  link= ""
  titulo =''
  autor = ""
  descripcion= ''
  ruta=''
  constructor(private crudAnuncios:CrudService) {
   
   }

  ngOnInit(): void {

    this.crudAnuncios.getAnuncios().subscribe(res=>{
      this.publi = res 
      console.log(this.publi,'sd')
    })
  this.cambioImagen1()
    
     
  }

  cambioImagen1(){

    this.descripcion = this.data?.resultadoCategoria
    this.link= this.data?.resultadoImagen
    this.titulo= this.data?.art1
    this.ruta =this.data?.resultadoID
    

  }

  cambioImagen2(){
    this.descripcion= this.data?.resultadoCategoria2
    this.link = this.data?.resultadoImagen2
    this.titulo= this.data?.art2
    this.ruta =this.data?.resultadoID2
  
  }
  cambioImagen3(){
    this.descripcion= this.data?.resultadoCategoria3
    this.link = this.data?.resultadoImagen3
    this.titulo= this.data?.art3
    this.ruta =this.data?.resultadoID3
  }
    cambioImagen4(){
      this.descripcion= this.data?.resultadoCategoria4
      this.link = this.data?.resultadoImagen4
      this.titulo= this.data?.art4
      this.ruta =this.data?.resultadoID4
  }
  cambioImagen5(){
    this.descripcion= this.data?.resultadoCategoria5
    this.link = this.data?.resultadoImagen5
    this.titulo= this.data?.art5
    this.ruta =this.data?.resultadoID5
  }
  cambioImagen6(){
    this.descripcion= this.data?.resultadoCategoria6
    this.link = this.data?.resultadoImagen6
    this.titulo= this.data?.art6
    this.ruta =this.data?.resultadoID6
  }
  cambioImagen7(){
    this.descripcion= this.data?.resultadoCategoria7
    this.link = this.data?.resultadoImagen7
    this.titulo= this.data?.art7
    this.ruta =this.data?.resultadoID7
  }
  cambioImagen8(){
    this.descripcion= this.data?.resultadoCategoria8
    this.link = this.data?.resultadoImagen8
    this.titulo= this.data?.art8
    this.ruta =this.data?.resultadoID8
  }



  goToLink(url: string){ window.open(url, "_blank"); }

  
  

}
