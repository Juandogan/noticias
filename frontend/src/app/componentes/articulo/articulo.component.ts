import { Component, OnInit,ViewChild, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app//servicios/crud.service';
import { Location } from '@angular/common';
import { Articulos } from 'src/app/models/articulos';
import { PLATFORM_ID } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  // encapsulation: ViewEncapsulation.None,
})




export class ArticuloComponent implements AfterViewInit {
 
  
  modalRef?: BsModalRef;
  estadoBtn= false
  articulos:any
  loader = true
  publi:any
  abrir= "modal" 
  
  dataRelacionado: any
  loader2 = false
  articulos2: any
  
  dataRelacionado2: any
  imagenfiltro:any

  @ViewChild('autoShownModal', { static: false }) autoShownModal?: ModalDirective;
isModalShown = false;

  
  constructor(private modalService: BsModalService, private ruta: ActivatedRoute, public crudService: CrudService, private location: Location,
    @Inject(PLATFORM_ID) private _platformId: Object ) { }

  nota: any
  auxContador: number = 0
  auxiliar: any
  ngOnInit(): void {

    this.ruta.data.subscribe((data) => {
      this.nota = Object.entries(data).map((i) => i[1]);
      this.crudService.unArticulo = this.nota[0];
      var aux3 = this.crudService.extractImageURL2(this.nota[0].nota,1)
      console.log(aux3, 'LINKKKK')
      var aux = Number(this.crudService.unArticulo.vistas)
      var aux2 = aux + 1
      this.crudService.unArticulo.vistas = aux2
      this.pedirPubli()
      // console.log(this.nota, 'primero')
      if (this.nota[0].art1) {
        this.dataRelacionado = this.nota[0];
        this.loader2 = true
      } else {
        this.crudService.getCategorias(this.crudService.unArticulo.categoria).subscribe(res => {
          var aux = res
          this.dataRelacionado = this.randomNoRepeat(aux);
          

          this.loader2 = true
        });


      }
    });




    // this.crudService.getCategorias(this.crudService.unArticulo.categoria).subscribe(res=>{
    //   var aux = res     
    //   this.dataRelacionado2 = this.randomNoRepeat(res);  
    //   this.loader2=true});

  }

  randomNoRepeat(arr: any) {

    // console.log(arr)


    let newArr = [];
    while (arr.length > 0) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      let randomElement = arr[randomIndex];
      newArr.push(randomElement);
      arr.splice(randomIndex, 1);
    }
    return newArr;
  }
  pedirArticulos() {    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
    // const resultPost =  [];
    this.crudService.getArticulos2().subscribe(res => {
      this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
      this.articulos2 = this.articulos

      // console.log(this.articulos)
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
  pedirPubli() {
    this.crudService.getAnuncios().subscribe(res => {
      this.publi = res
    })
  }



  subir() {
    window.scroll(0, 0)
  }

  alerta() {
    alert('en contrucción')
  }

  saltos2(data: string) {
    var aux2 = data.split('<h2 style="margin-left:0px;text-align:justify;">').join(`<h2 style=" font-weight: 700; 
  line-height: 32px;
  letter-spacing: -1px;
  font-size:25px!important;
  color:orange;
  margin-bottom:15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
   `)

 


    aux2 =  aux2 = data.split('<figcaption>').join(`<figcaption style="  
         
    font-size:15px!important;
    margin-bottom:15px;
    text-align:center!important;
    color:rgb(68, 68, 68);
    
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
     `)
 
    

    aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400; line-height: 30px;letter-spacing: 0px;font-size:22px;color:orange;margin-bottom:10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)

 
                                    aux2 = aux2.split('<p').join(`<p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;"`)
                            
                                    aux2 =  aux2.split('<h1>').join(`<h1 style=" font-weight: 700; 
                                    line-height: 32px;
                                    letter-spacing: -1px;
                                    font-size:29px!important;
                                    color:orange!important;
                                    margin-bottom:15px;
                                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                     `)
                                    aux2 =  aux2.split('<h2>').join(`<h2 style=" font-weight: 700; 
                                    line-height: 32px;
                                    letter-spacing: -1px;
                                    font-size:29px!important;
                                    color:orange!important;
                                    margin-bottom:15px;
                                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                     `)
    // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
    // aux2 = aux2.split('</p></strong>').join('</p></b>')

    // <img style="width:100%; margin-top:10px" src="http://168.197.50.191/upload/_BTJMOy-ce0StAhwmUC8V_AN.jpg">




    aux2 = aux2.split('<img').join('<img style="width:100%!important; margin-top:10px; margin-bottom:10px"')


    aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
    aux2 = aux2.split(' ,').join(', ')
    aux2 = aux2.split(' .').join('. ')
    aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
    aux2 = aux2.split('<h4>').join('<h4 style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;">')
    aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    aux2 = aux2.split('<a ').join('<a target="_blank"')
    aux2 = aux2.split('style="margin-left:0px;text-align:center;"').join('style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"')
    aux2 = aux2.split('style="text-align:center!important;"').join('style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"')
    aux2 = aux2.split('<figure ').join('<figure style="width:100%!important" ')
      
    //regla pie de foto3




    //regla pie de foto1



     aux2 = aux2.split('</a></p><p style="margin-left:0px;text-align:center;"><strong>')
     .join('</a></p><p style="margin-left:0px;text-align:center;"><div style="text-align:center!important;"><strong>')      
       aux2 = aux2.split('</strong>').join('</strong></div>')
//regla pie de foto2
       aux2 = aux2.split('</a><strong>').join('</a><div style="text-align:center!important;"><strong>')      
         aux2 = aux2.split('</strong>').join('</strong></div>')









     
     //</a></p><p style="margin-left:0px;text-align:center;"><strong>
 

    var aux2 = aux2.split('<h2 style="margin-left:0px;text-align:justify;"').join(`<h2 style=" font-weight: 700; 
    line-height: 32px;
    letter-spacing: -1px;
    font-size:25px!important;
    color:orange;
    margin-bottom:19px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
     `)
     var aux2 = aux2.split('<h1 style="margin-left:0px;text-align:justify;"').join(`<h1 style=" font-weight: 700; 
     line-height: 32px;
     letter-spacing: -1px;
     font-size:25px!important;
     color:orange;
     margin-bottom:19px;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
      `)

      aux2 = aux2.split('jpg"></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><strong>')
.join('jpg"></p><div style="text-align:center!important;margin-top:-10px"><strong>')      
aux2 = aux2.split('</strong>').join('</strong></div>')

aux2 = aux2.split('alt=""></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><strong>')
.join('alt=""></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><div style="text-align:center!important;margin-top:-10px"><strong>')      
aux2 = aux2.split('</strong>').join('</strong></div>')

aux2 = aux2.split('jpg"></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><strong>"><strong>')
.join('jpg"></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><div style="text-align:center!important;margin-top:-10px"><strong>')      
aux2 = aux2.split('</strong>').join('</strong></div>')



aux2 = aux2.split('jpg"></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><strong>')
.join('jpg"></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><div style="text-align:center!important;margin-top:-10px"><strong>')      
aux2 = aux2.split('</strong>').join('</strong></div>')


//  aux2 = aux2.split('https://www.culturademontania.org.ar/').join('https://old.culturademontania.org.ar/')
//  aux2 = aux2.split('http://191.101.18.184:3000/').join('https://www.culturademontania.org.ar/')
//  aux2 = aux2.split('https://old.culturademontania.org.ar/ccam/').join('https://www.culturademontania.org.ar/ccam/') 
   
   


 aux2 = aux2.split('https://www.culturademontania.org.ar/').join('https://old.culturademontania.org.ar/')
 aux2 = aux2.split('https://culturademontania.org.ar/').join('https://old.culturademontania.org.ar/')
 aux2 = aux2.split('http://www.culturademontania.org.ar/').join('https://old.culturademontania.org.ar/')
 aux2 = aux2.split('http://191.101.18.184:3000/').join('https://www.culturademontania.org.ar/')
 aux2 = aux2.split('http://168.197.50.191/').join('https://www.culturademontania.org.ar/ccam/')
 aux2 = aux2.split('https://old.culturademontania.org.ar/ccam/').join('https://www.culturademontania.org.ar/ccam/') 







      console.log(aux2)
    
    return (aux2)


  };
  cut(value: any) {
    var corte = value.slice(2)

    return corte
  };

  // sumarContador() {

  //   //incrementa el contador
  //   this.crudService.unArticulo.contadorComentarios = this.nota[0]?.contadorComentarios
  //   this.crudService.unArticulo.correos = this.nota[0]?.correos
  //   this.crudService.unArticulo.comentarios = this.nota[0]?.comentarios
  //   this.crudService.unArticulo.vistas = this.auxContador + 1
  //   this.crudService.unArticulo.imagen1 = this.nota[0]?.imagen1
  //   this.crudService.unArticulo.imagen2 = this.nota[0]?.imagen2
  //   this.crudService.unArticulo.imagen3 = this.nota[0]?.imagen3
  //   this.crudService.unArticulo.categoria = this.nota[0]?.categoria;
  //   this.crudService.unArticulo.fecha = this.nota[0]?.fecha;
  //   this.crudService.unArticulo.fechaMod = this.nota[0]?.fechaMod;
  //   this.crudService.unArticulo.autor = this.nota[0]?.autor
  //   this.crudService.unArticulo.fotografia = this.nota[0]?.fotografia
  //   this.crudService.unArticulo.edicionFotografia = this.nota[0]?.edicionFotografia
  //   this.crudService.unArticulo.nota = this.nota[0]?.nota
  //   this.crudService.unArticulo._id = this.nota[0]?._id
  //   this.crudService.unArticulo.categoria = this.nota[0]?.categoria
  //   this.crudService.unArticulo.titulo = this.nota[0]?.titulo
  //   this.crudService.unArticulo.tituloAlt = this.nota[0]?.tituloAlt
  //   this.crudService.unArticulo.subtitulo = this.nota[0]?.subtitulo

  //   this.crudService.unArticulo.posicion = this.nota[0]?.posicion
  //   this.crudService.unArticulo.art1 = this.nota[0]?.art1
  //   this.crudService.unArticulo.art2 = this.nota[0]?.art2
  //   this.crudService.unArticulo.art3 = this.nota[0]?.art3
  //   this.crudService.unArticulo.art4 = this.nota[0]?.art4
  //   this.crudService.unArticulo.art5 = this.nota[0]?.art5
  //   this.crudService.unArticulo.art6 = this.nota[0]?.art6
  //   this.crudService.unArticulo.art7 = this.nota[0]?.art7
  //   this.crudService.unArticulo.art8 = this.nota[0]?.art8
  //   this.crudService.unArticulo.art9 = this.nota[0]?.art9
  //   this.crudService.unArticulo.art10 = this.nota[0]?.art10
  //   this.crudService.unArticulo.art11 = this.nota[0]?.art11
  //   this.crudService.unArticulo.art12 = this.nota[0]?.art12


  //   this.crudService.unArticulo.fecha = this.nota[0]?.fecha

  //   this.crudService.unArticulo.resultadoCategoria = this.nota[0]?.resultadoCategoria
  //   this.crudService.unArticulo.resultadoCategoria2 = this.nota[0]?.resultadoCategoria2
  //   this.crudService.unArticulo.resultadoCategoria3 = this.nota[0]?.resultadoCategoria3
  //   this.crudService.unArticulo.resultadoCategoria4 = this.nota[0]?.resultadoCategoria4
  //   this.crudService.unArticulo.resultadoCategoria5 = this.nota[0]?.resultadoCategoria5
  //   this.crudService.unArticulo.resultadoCategoria6 = this.nota[0]?.resultadoCategoria6
  //   this.crudService.unArticulo.resultadoCategoria7 = this.nota[0]?.resultadoCategoria7
  //   this.crudService.unArticulo.resultadoCategoria8 = this.nota[0]?.resultadoCategoria8
  //   this.crudService.unArticulo.resultadoCategoria9 = this.nota[0]?.resultadoCategoria9
  //   this.crudService.unArticulo.resultadoCategoria10 = this.nota[0]?.resultadoCategoria10
  //   this.crudService.unArticulo.resultadoCategoria11 = this.nota[0]?.resultadoCategoria11
  //   this.crudService.unArticulo.resultadoCategoria12 = this.nota[0]?.resultadoCategoria12



  //   this.crudService.unArticulo.resultadoImagen = this.nota[0]?.resultadoImagen
  //   this.crudService.unArticulo.resultadoImagen2 = this.nota[0]?.resultadoImagen2
  //   this.crudService.unArticulo.resultadoImagen3 = this.nota[0]?.resultadoImagen3
  //   this.crudService.unArticulo.resultadoImagen4 = this.nota[0]?.resultadoImagen4
  //   this.crudService.unArticulo.resultadoImagen5 = this.nota[0]?.resultadoImagen5
  //   this.crudService.unArticulo.resultadoImagen6 = this.nota[0]?.resultadoImagen6
  //   this.crudService.unArticulo.resultadoImagen7 = this.nota[0]?.resultadoImagen7
  //   this.crudService.unArticulo.resultadoImagen8 = this.nota[0]?.resultadoImagen8
  //   this.crudService.unArticulo.resultadoImagen9 = this.nota[0]?.resultadoImagen9
  //   this.crudService.unArticulo.resultadoImagen10 = this.nota[0]?.resultadoImagen10
  //   this.crudService.unArticulo.resultadoImagen11 = this.nota[0]?.resultadoImagen11
  //   this.crudService.unArticulo.resultadoImagen12 = this.nota[0]?.resultadoImagen12


  //   this.crudService.unArticulo.resultadoID = this.nota[0]?.resultadoID
  //   this.crudService.unArticulo.resultadoID2 = this.nota[0]?.resultadoID2
  //   this.crudService.unArticulo.resultadoID3 = this.nota[0]?.resultadoID3
  //   this.crudService.unArticulo.resultadoID4 = this.nota[0]?.resultadoID4
  //   this.crudService.unArticulo.resultadoID5 = this.nota[0]?.resultadoID5
  //   this.crudService.unArticulo.resultadoID6 = this.nota[0]?.resultadoID6
  //   this.crudService.unArticulo.resultadoID7 = this.nota[0]?.resultadoID7
  //   this.crudService.unArticulo.resultadoID8 = this.nota[0]?.resultadoID8
  //   this.crudService.unArticulo.resultadoID9 = this.nota[0]?.resultadoID9
  //   this.crudService.unArticulo.resultadoID10 = this.nota[0]?.resultadoID10
  //   this.crudService.unArticulo.resultadoID11 = this.nota[0]?.resultadoID11
  //   this.crudService.unArticulo.resultadoID12 = this.nota[0]?.resultadoID12







  //   // this.crudService.unProducto.fecha = String(this.fachaPublicacion)

  //   this.crudService.modificarArticulo(this.crudService.unArticulo)
  //     .subscribe(res => { console.log(res) })
  // }
  
  extractImageURL(text: string): string | null {
    const regex = /<img[^>]*src="([^"]+)"/;
    const match = text.match(regex);
  
    if (match && match[1]) {
      console.log(match[1])
      return match[1];
    }
  
    return null;
  }
  
  
  
  ngAfterViewInit(): void {
    
    if (isPlatformBrowser(this._platformId)) {

      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
                this.showModal()
      }
          }
    
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


 
cerrar(){
  this.estadoBtn = true
}
  




showModal(): void {
  this.isModalShown = true;
}

hideModal(): void {
  this.autoShownModal?.hide();
}

onHidden(): void {
  this.isModalShown = false;
}
}


