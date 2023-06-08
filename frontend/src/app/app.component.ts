import { Component, OnInit, Inject, } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  loader=false
  browser:any
  constructor(@Inject(PLATFORM_ID) private _platformId: Object) {}

  ngOnInit(): void {
            if (isPlatformBrowser(this._platformId)) {
              const htmlElement = document.querySelector('html');

              // Agregar el evento contextmenu
              htmlElement?.addEventListener('contextmenu', function (e) {
                e.preventDefault(); // Evitar que se muestre el menú contextual por defecto
                alert('Si están interesados en el material fotográfico del CCAM, acuerden con la institución su uso. Contactarse a: info@culturademontania.org.ar');
              });
         }
    
  }
}


