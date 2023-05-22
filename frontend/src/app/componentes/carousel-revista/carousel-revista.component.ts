import { Component, OnInit, Inject, AfterViewInit  } from '@angular/core';
import { SwiperOptions } from 'swiper';
import{ carouselDataItems } from '../../models/dataCarousel'
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-carousel-revista',
  templateUrl: './carousel-revista.component.html',
  styleUrls: ['./carousel-revista.component.css']
})
export class CarouselRevistaComponent implements OnInit, AfterViewInit  {


  title = 'ng-swiper-demo';
  slideData = carouselDataItems
  carga= false
  swipperisActive=false

    constructor(@Inject(PLATFORM_ID) private _platformId: Object) {

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
          this.swipperisActive = true;
         }
    


      }

  ngOnInit(): void {
   

    if (isPlatformBrowser(this._platformId)) {
      this.swipperisActive = true;
     }



  }

}
