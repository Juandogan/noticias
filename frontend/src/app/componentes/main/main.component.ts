import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Inject, OnInit,  Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('slideDown', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate('500ms ease-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})



export class MainComponent implements AfterViewInit {
  modalRef?: BsModalRef;
  estadoBtn= false
  articulos:any
  loader = true
  publi:any
  abrir= "modal"


  @ViewChild('autoShownModal', { static: false }) autoShownModal?: ModalDirective;
  isModalShown = false;

  

  constructor(private modalService: BsModalService, private crudservice:CrudService, @Inject(PLATFORM_ID) private _platformId: Object,private renderer: Renderer2, private el: ElementRef){
    //  this.template = {} as TemplateRef<any> ;


  }

  ngOnInit(): void {
   
    this.crudservice.getArticulos().subscribe(res=>{

      this.articulos = res
      this.articulos = this.articulos.reverse() 
      this.loader = false
          //sumar contador
    // this.articulos[0].vistas = this.articulos[0]?.vistas + 1 
    // this.crudservice.modificarArticulo(this.articulos[0]).subscribe(res => console.log(res))

    })
    this.crudservice.getAnuncios().subscribe(res=>{

     this.publi = res
     console.log(this.publi)
    })  


    if (isPlatformBrowser(this._platformId)) {
      const htmlElement = document.querySelector('html');

      // Agregar el evento contextmenu
      htmlElement?.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Evitar que se muestre el menú contextual por defecto
        alert('Si están interesados en el material fotográfico del CCAM, acuerden con la institución su uso. Contactarse a: info@culturademontania.org.ar');
      });
 }
    
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
