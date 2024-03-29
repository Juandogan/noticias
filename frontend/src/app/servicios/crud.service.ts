import { Injectable } from '@angular/core';

import { Articulos } from '../models/articulos';
import { HttpClient } from '@angular/common/http';


import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  readonly URL_API  = "https://www.culturademontania.org.ar/revista";
  readonly URL_API2  = "https://www.culturademontania.org.ar/ccam";
  readonly URL_API3  = "https://www.culturademontania.org.ar/anunciante";
  readonly URL_API4  = "https://www.culturademontania.org.ar/categorias";
  readonly URL_API5  = "https://www.culturademontania.org.ar/carousel";


  cambioPantalla = true;
   Articulos:Articulos[]=[];
   unArticulo:Articulos
  loading=true;
  
  
  constructor(private http:HttpClient,  private location:Location)  {
          this.unArticulo = new Articulos();
  
  }
  pedirCaousel(){
    return this.http.get(this.URL_API5);
    
  }

  cancel():void {
    this.location.back(); // <-- go back to previous location on cancel
    }


  //CRUD  


  getCategorias(_id:any){
    return this.http.get(this.URL_API4 + `/${_id}`);
  };


   uploadFile(formData:any){
  
  
   return this.http.post('http://168.197.50.191/upload' , formData)   // en produccion poner '/upload' por this.URL_API2

    }


  getArticulos() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API);

  };

  getOneRevista(_id:any){

    return this.http.get(this.URL_API + `/${_id}`);
    


  }
  getAnuncios() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API3);

  };
  modificarAnuncios(x:any) {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.put(this.URL_API3 + `/${x._id}` , x);

  };
  

  getArticulos2() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API);

  };

   getOneArticulo(_id:any){

    return this.http.get(this.URL_API2 + `/${_id}`);
  };

  addArticulo(articulo:Articulos) {
    
    return this.http.post(this.URL_API, articulo);
    

  };

  // modificarArticulo(articulo:Articulos) {
  //   console.log(articulo, 'antes de modificar')
  //   return this.http.put(this.URL_API + `/${articulo._id}` , articulo);

  // };

  modificarArticuloComentario(articulo:Articulos) {
    console.log(articulo, 'antes de modificar')
    return this.http.put(this.URL_API2 + `/${articulo._id}` , articulo);

  };


  deleteArticulo(_id:string) {
    return this.http.delete(this.URL_API + `/${_id}`);

  };

  cut(value:any){
    var corte = value.slice(8)

   return corte
 };

 extractImageURL2(code: string, index: number): string | null {
  const regex = /<img[^>]*src="([^"]+)"/g;
  const matches = code.match(regex);

  if (matches && index < matches.length) {
    const match = matches[index];
    const urlMatch = match.match(/src="([^"]+)"/);
    if (urlMatch && urlMatch[1]) {
      return urlMatch[1];
    }
  }

  return null;
}


 extractImageURL(text: string): string | null {
  const regex = /<img[^>]*src="([^"]+)"/;
  const match = text.match(regex);

  if (match && match[1]) {
    console.log(match[1])
    return match[1];
  }

  return null;
}



 };




  // uploadFile(formData){
  //   return this.http.post(this.URL_API2, formData)
  //   // se deja solo '/upload' en produccion

  // }



//FIN DE CLASE GENERAL
