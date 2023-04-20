import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PortadaComponent } from './componentes/portada/portada.component';
import { BarraNegraComponent } from './componentes/barra-negra/barra-negra.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CarouselRevistaComponent } from './componentes/carousel-revista/carousel-revista.component';
import { LateralRelacionadoComponent } from './componentes/lateral-relacionado/lateral-relacionado.component';
import { ArticuloRelacionadoComponent } from './componentes/articulo-relacionado/articulo-relacionado.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './componentes/main/main.component';
import { APortadaComponent } from './componentes/a-portada/a-portada.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Publicidadx3Component } from './componentes/publicidadx3/publicidadx3.component';
import { BIndiceComponent } from './componentes/b-indice/b-indice.component';
import { PublicidadHorizontalComponent } from './componentes/publicidad-horizontal/publicidad-horizontal.component';



@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    BarraNegraComponent,
    CarouselRevistaComponent,
    LateralRelacionadoComponent,
    ArticuloRelacionadoComponent,
    ArticuloComponent,
    MainComponent,
    APortadaComponent,
    FooterComponent,
    Publicidadx3Component,
    BIndiceComponent,
    PublicidadHorizontalComponent
    
    

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxUsefulSwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
