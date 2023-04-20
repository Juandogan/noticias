import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';
import { Location } from '@angular/common';
import { Articulos } from 'src/app/models/articulos';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ArticuloComponent implements OnInit,OnDestroy {
  articulos:any
  articulos2:any
  dataRelacionado:any
  constructor(private ruta:ActivatedRoute, public crudService:CrudService,private location: Location) {
    
   }
   
   nota:any
   auxContador:number=0

  ngOnInit(): void {
      // var height = document.getElementById("head").offsetHeight;
      // document.getElementById("content").style.height = height  + 'px';
      // console.log(height)
      // window.scroll(0,0)

      this.crudService.getArticulos2().subscribe(res=>{
        this.dataRelacionado = this.randomNoRepeat(res);  
        console.log(this.dataRelacionado)
      })


      this.ruta.data.subscribe((data)=>{
      this.nota = Object.entries(data).map(i => i[1]);
      this.auxContador =  this.nota[0].vistas
      console.log(this.nota[0])
      // this.sumarContador()
      this.pedirArticulos()
      })

      
    };


      pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
        // const resultPost =  [];
        this.crudService.getArticulos2().subscribe(res =>{
        this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
        this.articulos2 = this.articulos
        // for(const post of this.articulos){
        //      var aux = post?.categoria
        //   if (aux?.indexOf('revista'.toLowerCase()) > -1)
        //      {                  
        //    resultPost.push(post) 
        //    this.articulos = resultPost          
        //    }    
        //  }
         });//fin de subscribe

         
       } //

       randomNoRepeat(arr:any){
        let newArr = [];
        while(arr.length > 0) {
          let randomIndex = Math.floor(Math.random() * arr.length);
          let randomElement = arr[randomIndex];
          newArr.push(randomElement);
          arr.splice(randomIndex, 1);
        }
        return newArr;
      }


      subir(){
        // window.scroll(0,0)
      }

      alerta(){
        alert('en contrucción')
      }

      saltos2(data:string){
        var aux2 = data.split('<h2>').join(`<h2 style=" font-weight: 700; 
  line-height: 32px;
  letter-spacing: -1px;
  font-size:25px!important;
  color:orange;
  margin-bottom:15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
   `)
         
   aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400; 
   line-height: 30px;
   letter-spacing: 0px;
   font-size:22px;
   color:orange;
   margin-bottom:10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)
      
  aux2 = aux2.split('<p').join(`<p style="
                                    font-weight: 400;
                                    margin-top:-10px;
                                    font-size: 18px; 
                                    line-height: 28px;
                                    color:rgb(68, 68, 68);
                                    text-align:justify;  
                           text-justify:inter-character;
                                    "`)
                                                                            
                                          // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
                                          // aux2 = aux2.split('</p></strong>').join('</p></b>')

                                          // <img style="width:100%; margin-top:10px" src="http://168.197.50.191/upload/_BTJMOy-ce0StAhwmUC8V_AN.jpg">
                                          

                                          

                                          aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px; margin-bottom:10px"')
                                          
                                          aux2 = aux2.split('<strong>').join('<strong style="font-size:16px;line-height: 0px!important; ">')
                                          aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
                                          aux2 = aux2.split(' ,').join(', ')
                                          aux2 = aux2.split(' .').join('. ')
                                          aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
                                          aux2 = aux2.split('<h4>').join('<h4 style="text-align:center!important; font-size:15px; margin-top:-20px; margin-bottom:30px;">')
                                          aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                                          aux2 = aux2.split('<a ').join('<a target="_blank"')
                                          aux2 = aux2.split('</a></p><p><strong>').join('</a></p><p style="text-align:center"><strong>')

                                          // aux2 = aux2.split('<img style="width:100%; margin-top:10px" src="').join('<a href="')
                                          // aux2 = aux2.split('ng">').join('ng"></a>')
                                          // aux2 = aux2.split('pg">').join('pg"></a>')
                    
                                          
      // console.log('sa' + aux2)
      // console.log(aux2)
        return (aux2)
      
      
         };
   cut(value:any){
    var corte = value.slice(2)

   return corte
 }; 


 

  

   ngOnDestroy(){

  

 
  }

};