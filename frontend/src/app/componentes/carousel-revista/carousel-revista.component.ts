import { Component, OnInit, Inject, AfterViewInit  } from '@angular/core';
import { SwiperOptions } from 'swiper';
import{ carouselDataItems } from '../../models/dataCarousel'
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Carousel } from '../../models/carousel'
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-carousel-revista',
  templateUrl: './carousel-revista.component.html',
  styleUrls: ['./carousel-revista.component.css']
})
export class CarouselRevistaComponent implements OnInit, AfterViewInit  {


  title = 'ng-swiper-demo';

  slideData:any
  carga= false
  swipperisActive=false
  swipperisActive2:any

    constructor(@Inject(PLATFORM_ID) private _platformId: Object, private crudService:CrudService) {
  
      }

      config: SwiperOptions = {
        pagination: { el: '.swiper-pagination', clickable: true },
        autoHeight: true,
        allowTouchMove: true,
            breakpoints: {
          1024: {
            slidesPerView: 4
          },
          700: {
            slidesPerView: 3
          },
          400: {
            slidesPerView: 2
          },
          300: {
            slidesPerView: 1
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true
        

      };



      ngAfterViewInit() {
        if (isPlatformBrowser(this._platformId)) {
          this.crudService.pedirCaousel().subscribe(res=>{
            this.swipperisActive = false
            console.log(res,"****")
            this.slideData= res as Carousel
            this.slideData = this.slideData.reverse()
            this.swipperisActive2 = true
            this.swipperisActive = true;
            
          })
          
         }
    


      }

  ngOnInit(): void {
   
 
    if (isPlatformBrowser(this._platformId)) {
      
      
      // this.swipperisActive = true;
     }



  }

}
